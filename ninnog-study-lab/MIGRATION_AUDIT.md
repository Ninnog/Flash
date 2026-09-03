# Audit de migration Ninnog

## Périmètre retenu

Les archives fournissent une application de révision avec des écrans distincts pour les fiches techniques, les exercices de cours, les preuves de cours, les cartes mentales et l’entraînement oral. Les données exportées couvrent ces mêmes catégories. La reconstruction conserve les parcours utiles, les contenus exploitables et le principe de modes **lecture**, **édition** et **entraînement**, tout en remplaçant la couche de données, l’authentification et la navigation par l’architecture Node.js + tRPC du projet.

| Domaine archivé | Données disponibles | Parcours conservé dans la reconstruction |
|---|---:|---|
| Fiches techniques | 23 exportations | Bibliothèque filtrable par matière et chapitre, lecture détaillée, gestion du contenu et tags |
| Exercices de cours | 6 exportations | Catalogue, filtre, correction masquée puis révélée, séance d’entraînement |
| Preuves de cours | 6 exportations | Catalogue et mode d’entraînement dédié |
| Cartes mentales | 4 exportations | Aperçu, détail et association à des fiches |
| Oral | 2 exportations | Questions, correction et retours de préparation |

## Éléments exclus ou remplacés

La source archivée dépend de la bibliothèque `@base44/sdk`, du plugin Vite associé, d’une base de données injectée côté client, d’une authentification Base44 et d’un téléversement de fichiers propriétaire. Ces dépendances ne sont pas reprises. Elles seront remplacées par les procédures tRPC, la base de données relationnelle du projet, l’authentification intégrée et, lorsque la gestion de fichiers sera activée, le stockage S3 de l’application.

Les entrées manifestement provisoires, telles que les fiches intitulées « Test » ou les cartes sans contenu pédagogique identifiable, ne seront pas importées. Les contenus pédagogiques réels des exports seront conservés et normalisés.

| Export | Entrées importées | Exclusions justifiées |
|---|---:|---|
| Fiches techniques | 20 | 3 entrées de test ou sans chapitre ni contenu pédagogique exploitable |
| Exercices de cours | 2 | 4 doublons de formulations déjà présentes |
| Preuves de cours | 2 | 4 doublons de formulations déjà présentes |
| Questions orales | 2 | Aucune |
| Cartes mentales | 1 | 3 entrées de test, de doublon ou sans structure pédagogique exploitable |

Les 31 ressources importées sont structurées en 5 matières et 10 chapitres. La migration remplace également les séquences LaTeX altérées lors de l’export SQL afin que les formules soient rendues correctement dans l’interface.

## Décisions de conception

L’expérience sera structurée autour d’un tableau de bord « Study Lab » avec une barre latérale sur grand écran, une navigation compacte sur mobile, une recherche globale, des filtres rapides et un panneau de progression. Les données de révision conserveront leurs champs pédagogiques d’origine, auxquels s’ajouteront un statut de maîtrise et une trace de session pour rendre les parcours d’entraînement observables.

| Table indépendante | Rôle | Champs de migration principaux |
|---|---|---|
| `revision_cards` | Fiches de révision et bibliothèque | titre, matière, chapitre, contenu, tags, statut de maîtrise |
| `exercises` | Exercices de cours, preuves et préparation orale | type, titre, matière, énoncé, correction, média éventuel |
| `mind_maps` | Cartes mentales et leurs liens pédagogiques | titre, matière, contenu, média, description, fiches liées |
| `study_sessions` | Historique léger des séances d’entraînement | utilisateur, type de séance, matière, volume et durée |
| `mastery_records` | Suivi d’assimilation par ressource | utilisateur, ressource, niveau de maîtrise, dernière révision |

La première version met l’accent sur une consultation immédiatement utile des contenus importés, la recherche et le filtrage, des séances d’entraînement guidées et l’archivage de progrès. Les opérations de création et de modification de contenu seront réservées à l’utilisateur authentifié afin de préserver les données du catalogue partagé.
