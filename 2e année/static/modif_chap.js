const selectMatiere = document.getElementById("nom_mat");
const selectChapitre = document.getElementById("nom_chap");
const inputNom = document.getElementById("nouveau_nom");
const boutonModifier = document.getElementById("modifier");
const boutonSupprimer = document.getElementById("supprimer");
const formulaire = document.getElementById("formulaire");
const message = document.getElementById("message");

let chapitreSelectionne = null;
const utilisateur = localStorage.getItem("utilisateur");

function afficherMessage(texte, type = "info") {
  message.textContent = texte;
  message.className = `message ${type}`;
}

function activerActions(actif) {
  inputNom.disabled = !actif;
  boutonModifier.disabled = !actif;
  boutonSupprimer.disabled = !actif;
}

function optionVide(texte) {
  const option = document.createElement("option");
  option.value = "";
  option.textContent = texte;
  return option;
}

async function chargerMatieres() {
  if (!utilisateur) {
    afficherMessage("Utilisateur non identifié. Reconnecte-toi puis réessaie.", "erreur");
    return;
  }

  try {
    const reponse = await fetch("/matieres");
    if (!reponse.ok) throw new Error("Impossible de charger les matières.");
    const matieres = await reponse.json();

    for (const matiere of matieres) {
      const option = document.createElement("option");
      option.value = matiere.id;
      option.textContent = matiere.nom;
      selectMatiere.appendChild(option);
    }
  } catch (erreur) {
    afficherMessage(erreur.message || "Erreur lors du chargement des matières.", "erreur");
  }
}

async function chargerChapitres() {
  chapitreSelectionne = null;
  selectChapitre.replaceChildren(optionVide("-- Choisir un chapitre --"));
  selectChapitre.disabled = true;
  inputNom.value = "";
  activerActions(false);
  message.textContent = "";

  if (!selectMatiere.value || !utilisateur) return;

  try {
    const url = `/chapitres/${encodeURIComponent(selectMatiere.value)}?utilisateur=${encodeURIComponent(utilisateur)}`;
    const reponse = await fetch(url);
    const donnees = await reponse.json();
    if (!reponse.ok) throw new Error(donnees.detail || "Impossible de charger les chapitres.");

    for (const chapitre of donnees) {
      const option = document.createElement("option");
      option.value = chapitre.id;
      option.textContent = chapitre.nom;
      option.dataset.nom = chapitre.nom;
      selectChapitre.appendChild(option);
    }

    selectChapitre.disabled = false;
    if (donnees.length === 0) afficherMessage("Aucun chapitre dans cette matière pour cet utilisateur.");
  } catch (erreur) {
    afficherMessage(erreur.message || "Erreur lors du chargement des chapitres.", "erreur");
  }
}

function selectionnerChapitre() {
  const option = selectChapitre.selectedOptions[0];
  chapitreSelectionne = selectChapitre.value ? {
    id: Number(selectChapitre.value),
    nom: option.dataset.nom || option.textContent
  } : null;

  inputNom.value = chapitreSelectionne ? chapitreSelectionne.nom : "";
  activerActions(Boolean(chapitreSelectionne));
  message.textContent = "";
}

selectMatiere.addEventListener("change", chargerChapitres);
selectChapitre.addEventListener("change", selectionnerChapitre);

formulaire.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (!chapitreSelectionne) return;

  const nouveauNom = inputNom.value.trim();
  if (!nouveauNom) {
    afficherMessage("Le nom du chapitre ne peut pas être vide.", "erreur");
    return;
  }

  const donnees = new FormData();
  donnees.append("id_chap", String(chapitreSelectionne.id));
  donnees.append("nom_chap", nouveauNom);
  donnees.append("utilisateur", utilisateur);

  boutonModifier.disabled = true;
  try {
    const reponse = await fetch("/modifier-chapitre", { method: "POST", body: donnees });
    const resultat = await reponse.json();
    if (!reponse.ok) throw new Error(resultat.detail || "La modification a échoué.");

    afficherMessage("Chapitre modifié pour les utilisateurs concernés.", "succes");
    await chargerChapitres();
    const option = [...selectChapitre.options].find(o => o.textContent === nouveauNom);
    if (option) {
      selectChapitre.value = option.value;
      selectionnerChapitre();
    }
    afficherMessage("Chapitre modifié pour les utilisateurs concernés.", "succes");
  } catch (erreur) {
    afficherMessage(erreur.message || "Erreur lors de la modification.", "erreur");
  } finally {
    boutonModifier.disabled = !chapitreSelectionne;
  }
});

boutonSupprimer.addEventListener("click", async () => {
  if (!chapitreSelectionne) return;
  const nom = chapitreSelectionne.nom;
  const confirme = confirm(`Supprimer le chapitre « ${nom} » pour les utilisateurs concernés ? Toutes les cartes de ces chapitres seront également supprimées. Cette action est irréversible.`);
  if (!confirme) return;

  const donnees = new FormData();
  donnees.append("id_chap", String(chapitreSelectionne.id));
  donnees.append("utilisateur", utilisateur);
  boutonSupprimer.disabled = true;

  try {
    const reponse = await fetch("/supprimer-chapitre", { method: "POST", body: donnees });
    const resultat = await reponse.json();
    if (!reponse.ok) throw new Error(resultat.detail || "La suppression a échoué.");

    afficherMessage("Chapitre et cartes associées supprimés.", "succes");
    await chargerChapitres();
  } catch (erreur) {
    afficherMessage(erreur.message || "Erreur lors de la suppression.", "erreur");
    boutonSupprimer.disabled = !chapitreSelectionne;
  }
});

chargerMatieres();
