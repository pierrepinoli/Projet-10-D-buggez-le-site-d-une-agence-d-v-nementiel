import { useCallback, useState } from "react";
import PropTypes from "prop-types";
import Field, { FIELD_TYPES } from "../../components/Field";
import Select from "../../components/Select";
import Button, { BUTTON_TYPES } from "../../components/Button";

const mockContactApi = () => new Promise((resolve) => { setTimeout(resolve, 1000); })

const Form = ({ onSuccess, onError }) => {
  const [sending, setSending] = useState(false);

  // defini l'etat de reset des champs etat faux par defaut
  const [shouldResetFields, setShouldResetFields] = useState(false);
  const sendContact = useCallback(
    async (evt) => {
      evt.preventDefault();
      setSending(true);
      
      // We try to call mockContactApi
      try {
        await mockContactApi();
        setSending(false);


        // Déclenche la réinitialisation des champs
        setShouldResetFields(true);


        // Appel onSuccess lorsque l'envoi est réussi
        onSuccess();
      } catch (err) {
        setSending(false);
        onError(err);
      }
    },
    [onSuccess, onError]
  );
  
  return (
    <form onSubmit={sendContact}>
      <div className="row">
        <div className="col">
          <Field placeholder="" label="Nom" resetFields={shouldResetFields}/>
          <Field placeholder="" label="Prénom" resetFields={shouldResetFields}/>
          <Select
            selection={["Personel", "Entreprise"]}
            onChange={() => null}
            label="Personel / Entreprise"
            type="large"
            titleEmpty
            resetFields={shouldResetFields} // 
          />
          <Field 
            placeholder="" 
            label="Email" 
            type={FIELD_TYPES.INPUT_EMAIL}
            resetFields={shouldResetFields}
            />
          <Button type={BUTTON_TYPES.SUBMIT} disabled={sending}>
            {sending ? "En cours" : "Envoyer"}
          </Button>
        </div>
        <div className="col">
          <Field
            placeholder="message"
            label="Message"
            type={FIELD_TYPES.TEXTAREA}
            resetFields={shouldResetFields}
          />
        </div>
      </div>
    </form>
  );
};

Form.propTypes = {
  onError: PropTypes.func,
  onSuccess: PropTypes.func,
}

Form.defaultProps = {
  onError: () => null,
  onSuccess: () => null,
}

export default Form;
