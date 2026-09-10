const utilisateur = localStorage.getItem("utilisateur");

const matiereSelect = document.getElementById("nom_mat");
const chapitreSelect = document.getElementById("nom_chap");
const formulaire = document.getElementById("formulaire-import");
const message = document.getElementById("message");

const nomCompte = document.querySelector(".nom-compte");

let chemin = `${window.BACKEND_URL}` ;

if (nomCompte && utilisateur) {
    nomCompte.textContent = utilisateur;
}

async function chargerMatieres() {
    try {
        const response = await fetch("/matieres");
        if (!response.ok) {
            throw new Error("Impossible de récupérer les matières.");
        }
        const matieres = await response.json();
        matieres.forEach(matiere => {
            const option = document.createElement("option");
            option.value = matiere.id;
            option.textContent = matiere.nom;
            matiereSelect.appendChild(option);

        });

    } catch (erreur) {
        console.error(erreur);
        message.textContent = "Impossible de charger les matières.";
    }

}

matiereSelect.addEventListener("change", async () => {
    const idMatiere = matiereSelect.value;
    chapitreSelect.innerHTML = "";
    const optionDefaut = document.createElement("option");

    optionDefaut.value = "";
    optionDefaut.textContent ="-- Choisir un chapitre --";

    chapitreSelect.appendChild(optionDefaut);

    if (!idMatiere) {
        chapitreSelect.disabled = true;
        return;
    }
    try {
        const response = await fetch(
            `/chapitres/${idMatiere}?utilisateur=${encodeURIComponent(utilisateur)}`
        );

        if (!response.ok) {
            throw new Error("Impossible de récupérer les chapitres.");
        }

        const chapitres = await response.json();

        chapitres.forEach(chapitre => {
            const option = document.createElement("option");
            option.value = chapitre.id;
            option.textContent = chapitre.nom;
            chapitreSelect.appendChild(option);
        });

        chapitreSelect.disabled = false;

    } catch (erreur) {
        console.error(erreur);
        chapitreSelect.disabled = true;
        message.textContent = "Impossible de charger les chapitres.";
    }

});

formulaire.addEventListener("submit", async (event) => {
    event.preventDefault();
    const fichier = document.getElementById("fichier").files[0];
    const idMatiere = matiereSelect.value;
    const idChapitre = chapitreSelect.value;

    if (!fichier) {
        message.textContent = "Veuillez sélectionner un fichier CSV.";
        return;
    }

    if (!idMatiere || !idChapitre) {
        message.textContent = "Veuillez sélectionner une matière et un chapitre.";
        return;
    }
    const donnees = new FormData();
    donnees.append("fichier", fichier);
    donnees.append("id_chap", idChapitre);
    donnees.append("utilisateur", utilisateur);

    try {
        const response = await fetch("/import-csv", {
            method: "POST",
            body: donnees
        });
        const resultat = await response.json();

        if (!response.ok) {
            throw new Error(
                resultat.detail || "Erreur lors de l'importation."
            );
        }

        message.textContent = resultat.message || "Cartes importées avec succès !";
        document.getElementById("fichier").value = "";

    } catch (erreur) {
        console.error(erreur);
        message.textContent = erreur.message;
    }

});
chargerMatieres();