let chemin = `${window.BACKEND_URL}` ;

document.addEventListener("DOMContentLoaded", () => {

    const matiereSelect = document.getElementById("nom_mat");
    const chapitreSelect = document.getElementById("nom_chap");
    const carteSelect = document.getElementById("nom_carte");

    const formulaire = document.getElementById("formulaire");

    const question = document.getElementById("question");
    const reponse = document.getElementById("reponse");
    const image = document.getElementById("image");
    const imageActuelle = document.getElementById("image-actuelle");
    const supprimerBtn = document.getElementById("supprimer");

    matiereSelect.addEventListener("change", async () => {

        const matiereId = matiereSelect.value;

        chapitreSelect.innerHTML = '<option value="">-- Choisir --</option>';
        carteSelect.innerHTML = '<option value="">-- Carte --</option>';

        question.value = "";
        reponse.value = "";
        imageActuelle.style.display = "none";

        if (!matiereId) return;

        const utilisateur = localStorage.getItem("utilisateur");

        try {

            const res = await fetch(
                `${chemin}/chapitres/${matiereId}?utilisateur=${encodeURIComponent(utilisateur)}`
            );

            const data = await res.json();

            if (!Array.isArray(data)) {
                console.error(data);
                return;
            }

            data.forEach(c => {
                const opt = document.createElement("option");
                opt.value = c.id;
                opt.textContent = c.nom;
                chapitreSelect.appendChild(opt);
            });

        } catch (e) {
            console.error(e);
        }
    });

    chapitreSelect.addEventListener("change", async () => {

        const chapitreId = chapitreSelect.value;

        carteSelect.innerHTML = '<option value="">-- Carte --</option>';

        question.value = "";
        reponse.value = "";
        imageActuelle.style.display = "none";

        if (!chapitreId) return;

        const utilisateur = localStorage.getItem("utilisateur");

        try {

            const res = await fetch(
                `${chemin}/cartes/${chapitreId}?utilisateur=${encodeURIComponent(utilisateur)}`
            );

            const data = await res.json();

            if (!Array.isArray(data)) {
                console.error(data);
                return;
            }

            data.forEach(c => {
                const opt = document.createElement("option");
                opt.value = c.id;
                opt.textContent = c.question;
                carteSelect.appendChild(opt);
            });

        } catch (e) {
            console.error(e);
        }

    });

    carteSelect.addEventListener("change", async () => {

        const id = carteSelect.value;

        if (!id) return;

        try {

            const res = await fetch(`${chemin}/carte/${id}`);
            const c = await res.json();

            question.value = c.question || "";
            reponse.value = c.reponse || "";

            if (c.image) {
                imageActuelle.src = `/static/images/${c.image}`;
                imageActuelle.style.display = "block";
            } else {
                imageActuelle.style.display = "none";
            }

        } catch (e) {
            console.error(e);
        }

    });

    formulaire.addEventListener("submit", async (e) => {

        e.preventDefault();

        const formData = new FormData();

        formData.append("carte_id", carteSelect.value);
        formData.append("question", question.value);
        formData.append("reponse", reponse.value);

        if (image.files.length > 0) {
            formData.append("image", image.files[0]);
        }

        try {

            const res = await fetch(
                `${chemin}/update-carte`,
                {
                    method: "POST",
                    body: formData
                }
            );

            if (res.ok) {
                alert("Carte modifiée !");
            } else {
                alert("Erreur modification");
            }

        } catch (e) {
            console.error(e);
        }

    });

    supprimerBtn.addEventListener("click", async () => {

        if (!carteSelect.value) return;

        if (!confirm("Supprimer cette carte ?")) return;

        const formData = new FormData();
        formData.append("carte_id", carteSelect.value);

        try {

            const res = await fetch(
                `${chemin}/supprimer-carte`,
                {
                    method: "POST",
                    body: formData
                }
            );

            if (res.ok) {

                alert("Carte supprimée");

                carteSelect.innerHTML = '<option value="">-- Carte --</option>';
                question.value = "";
                reponse.value = "";
                imageActuelle.style.display = "none";

            } else {

                alert("Erreur suppression");

            }

        } catch (e) {
            console.error(e);
        }

    });

});