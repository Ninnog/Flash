
## Installation locale avec comptes Ninnog

Ninnog Study Lab peut être lancé localement sans connexion Manus. Au démarrage, l’application affiche les profils locaux comme un écran de sélection façon Netflix. Deux profils maximum peuvent être créés ; chaque profil possède son propre espace de données et aucun mot de passe n’est demandé.

### Pré-requis

Installez Docker Desktop, puis ouvrez un terminal dans le dossier du projet. Le premier démarrage construit l’image de l’application et initialise la base de données.

```bash
docker compose -f docker-compose.local.yml up -d --build
```

Ouvrez ensuite [http://localhost:3000](http://localhost:3000). Lors du premier démarrage, choisissez « Ajouter un profil » et saisissez un nom. Les démarrages suivants affichent les profils existants ; cliquez simplement sur celui de la personne qui souhaite réviser.

### Arrêt et données

Pour arrêter l’application sans supprimer les données, utilisez `docker compose -f docker-compose.local.yml down`. Le volume `ninnog_mysql` conserve les comptes et les contenus. Pour effectuer une sauvegarde SQL, utilisez `docker compose -f docker-compose.local.yml exec db mysqldump -u ninnog -p ninnog > ninnog-backup.sql`. Ne supprimez le volume que si vous souhaitez repartir d’une installation vide.

Avant de rendre l’installation accessible sur un réseau, remplacez `JWT_SECRET`, `MYSQL_PASSWORD` et `MYSQL_ROOT_PASSWORD` dans `docker-compose.local.yml` par des valeurs longues et privées.
