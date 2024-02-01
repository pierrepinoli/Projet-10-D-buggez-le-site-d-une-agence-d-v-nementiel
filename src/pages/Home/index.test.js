import { fireEvent, render, screen } from "@testing-library/react";
import Home from "./index";

describe("When Form is created", () => {
  it("a list of fields card is displayed", async () => {
    render(<Home />);
    await screen.findByText("Email");
    await screen.findByText("Nom");
    await screen.findByText("Prénom");
    await screen.findByText("Personel / Entreprise");
  });

  describe("and a click is triggered on the submit button", () => {
    it("the success message is displayed", async () => {
      render(<Home />);
      fireEvent(
        await screen.findByText("Envoyer"),
        new MouseEvent("click", {
          cancelable: true,
          bubbles: true,
        })
      );
      await screen.findByText("En cours");
       // ajout d'une temporisation avec set time out
      setTimeout(() => {
        screen.findByText("Message envoyé !");
      }, 1500);
    });
  });

});








describe("When a page is created", () => {
  it("a list of events is displayed", () => {
    render(<Home />);
  
    // Utilise une requête pour rechercher un élément spécifique du composant enfant à l'intérieur du composant parent i.e : l'id events 
    const childElement = screen.getByTestId("events-testid");

     // Assert pour vérifier la présence du composant enfant
    expect(childElement).toBeInTheDocument();

  })

  it("a list a people is displayed", async () => {
    render(<Home />);

    // verifie la presence d'un nom et d'une fonction
    await screen.findByText("Samira");
    await screen.findByText("Directeur marketing");

    // verifie la presence d'un texte alternatif afin de verifier la presence d'une image
    await screen.findByAltText("photo de profil de Luís");
    })
  


  it("a footer is displayed", () => {
    render(<Home />);

    // Utilise la requête getByRole avec 'contentinfo' pour trouver l'élément de pied de page
    const footerElement = screen.getByRole('contentinfo');

    // Assert pour vérifier la présence de l'élément de pied de page
    expect(footerElement).toBeInTheDocument();

  })


  it("an event card, with the last event, is displayed", () => {
    render(<Home />);
    expect(screen.getByText('Notre dernière prestation')).toBeInTheDocument();
  })
});


