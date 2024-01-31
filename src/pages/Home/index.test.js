import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Home from "./index";

describe("When Form is created", () => {
  it("a list of fields card is displayed", async () => {
    render(<Home />);
    await screen.findByText("Email");
    await screen.findByText("Nom");
    await screen.findByText("Prénom");
    await screen.findByText("Personel / Entreprise");
  });

  // changement de type de test : test de l'ouverture de la modale 
  // plus robuste : car ce test se concentre sur le comportement attendu plutôt que sur les messages spécifiques.
  describe("and a click is triggered on the submit button", () => {
    it("the success modal is opened", async () => {
      render(<Home />);
      
      // Recherche de l'élément du bouton "Envoyer"
      const submitButton = await waitFor(() => screen.getByText("Envoyer"));
      
      // Déclenchement d'un'clic sur le bouton "Envoyer"
      fireEvent.click(submitButton);
  
      await waitFor(() => {
        // Attente de l'ouverture de la modale
        const successModal = screen.queryByTestId("success-modal");
        // Vérification de la presence de la modale dans le DOM
        expect(successModal).toBeInTheDocument();
    });
  });
});
});



describe("When a page is created", () => {
  it("a list of events is displayed", async () => {
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

  it("a footer is displayed", async () => {
    render(<Home />);

    // Utilise la requête getByRole avec 'contentinfo' pour trouver l'élément de pied de page
    const footerElement = screen.getByRole('contentinfo');

    // Assert pour vérifier la présence de l'élément de pied de page
    expect(footerElement).toBeInTheDocument();
  })

  it("an event card, with the last event, is displayed", async () => {
    // render(<Home />);
    // // Attendre que l'appel à l'API (ou le mock) soit effectué
    
    // await screen.findByText('User&product MixUsers');

    // // Vérifier que EventCard a été appelé avec les données appropriées
    // expect(screen.getByAltText('User&product MixUsers')).toBeInTheDocument();
    // expect(screen.getByText('User&product MixUsers')).toBeInTheDocument();
    // expect(screen.getByText('conférence')).toBeInTheDocument();
    // // Ajoutez d'autres assertions pour les autres propriétés de l'événement
  })
});
