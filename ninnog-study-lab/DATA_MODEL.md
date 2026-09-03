# Modèle de données Ninnog Study Lab

## Principes

Le catalogue pédagogique est partagé, alors que les signaux de progression sont personnels. Les identifiants Base44 ne sont pas réutilisés : chaque ressource reçoit un identifiant numérique relationnel. Les contenus LaTeX restent stockés au format texte, afin d’être affichés sans transformation destructive.

| Table | Clé et contraintes | Champs | Relations |
|---|---|---|---|
| `subjects` | `id` primaire ; `name` unique | name, slug, accent, description, timestamps | Une matière possède plusieurs chapitres et ressources |
| `chapters` | `id` primaire ; unique sur matière + nom | subjectId, name, slug, position, description | Un chapitre appartient à une matière et organise les fiches |
| `revision_cards` | `id` primaire ; titre requis | subjectId, chapterId nullable, title, content, tags JSON, masteryHint, timestamps | Une fiche appartient à une matière et facultativement à un chapitre |
| `exercises` | `id` primaire ; `kind` contraint | subjectId, title, statement, solution, kind (`course`, `proof`, `oral`), imageUrl nullable, timestamps | Un exercice appartient à une matière |
| `mind_maps` | `id` primaire ; titre requis | subjectId, title, content nullable, imageUrl nullable, description nullable, linkedCardIds JSON, timestamps | Une carte appartient à une matière et peut référencer plusieurs fiches |
| `study_sessions` | `id` primaire ; utilisateur et mode requis | userId nullable, mode (`cards`, `exercises`, `oral`), subjectId nullable, itemCount, correctCount, durationSeconds, completedAt | Une séance peut cibler une matière et se rattacher à un utilisateur authentifié |
| `mastery_records` | unique sur utilisateur + type + ressource | userId, resourceType (`card`, `exercise`), resourceId, status (`new`, `learning`, `confident`), lastReviewedAt, reviewCount | Un signal de maîtrise appartient à un utilisateur et une ressource |

## Règles de migration

| Export d’origine | Destination indépendante | Transformation |
|---|---|---|
| `FicheTechnique_export.csv` | `revision_cards` | Création de matière et chapitre si nécessaire ; conservation des tags et du contenu LaTeX ; exclusion des entrées de test non pédagogiques |
| `ExerciceCours_export.csv` | `exercises` | `kind = course` ; conservation de l’énoncé, de la correction et de l’URL média si elle est valable |
| `PreuveCours_export.csv` | `exercises` | `kind = proof` ; migration de `description` vers l’énoncé |
| `ExoConcoursOral_export.csv` | `exercises` | `kind = oral` ; migration de l’énoncé et de la correction ; commentaires laissés hors du premier lot car ils sont historiques |
| `CarteMentale_export.csv` | `mind_maps` | Conservation du contenu, de la description et des liens vers les fiches lorsque l’ancienne référence peut être résolue |

Les suppressions de contenus exigent une authentification. L’affichage, la recherche, les filtres et les séances de découverte restent accessibles sans dépendance à un fournisseur externe. Le suivi de maîtrise et les séances ne sont enregistrés qu’après authentification ; l’interface reste utile avant connexion sans donner l’illusion d’une sauvegarde locale permanente.
