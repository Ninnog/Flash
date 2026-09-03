# Project TODO

- [x] Auditer les archives `Ninnog.zip` et `DataNinnog.zip` afin d’inventorier les écrans, données, parcours et intégrations utiles.
- [x] Identifier les dépendances, références et mécanismes propres à Base44 présents dans les archives.
- [x] Vérifier formellement qu’aucune dépendance, référence ou mécanisme Base44 n’est repris dans l’application reconstruite.
- [x] Finaliser l’architecture de données avec les tables, champs, relations et contraintes des matières, chapitres, fiches, exercices, cartes mentales, séances et suivis de maîtrise.
- [x] Traduire le modèle de données indépendant dans `drizzle/schema.ts` et appliquer la migration relationnelle associée.
- [x] Mettre en place les procédures tRPC et la persistance nécessaires aux parcours de révision.
- [x] Importer systématiquement tous les contenus pédagogiques utiles des exports CSV et consigner les exclusions non pédagogiques.
- [x] Ajouter un écran de suivi de séances et enregistrer les séances d’entraînement complétées.
- [x] Refonte complète de l’interface avec une hiérarchie, une atmosphère et un degré de finition inspirés de la référence fournie.
- [x] Adapter l’interface pour les formats mobile, tablette et bureau.
- [x] Ajouter des retours de réussite et d’échec visibles aux mutations de fiches.
- [x] Vérifier les focus clavier, les contrastes et les retours d’action sur les composants interactifs personnalisés.
- [x] Étendre les tests unitaires aux procédures de données et aux mutations de fiches.
- [x] Vérifier visuellement les flux complets de lecture, entraînement et édition sur bureau et mobile.
- [x] Confirmer l’absence de dépendance à Base44 avant livraison.
- [x] Vérifier que tous les éléments terminés sont cochés avant livraison.
- [x] Unifier les exercices oraux avec le moteur d’exercices et leurs corrections, tout en conservant leur contexte de concours.
- [ ] Ajouter une configuration de session personnalisée pour les fiches, exercices, oral et cartes mentales.
- [x] Enregistrer les vrais résultats de session personnalisée, y compris durée, score et paramètres choisis, dans le suivi utilisateur.
- [x] Appliquer le rendu LaTeX aux libellés et contenus de toutes les bulles affichées.
- [x] Afficher les nœuds et connexions réels de chaque carte mentale dans son aperçu de bibliothèque.
- [x] Permettre la création, l’édition et le lien entre bulles de carte mentale et fiches techniques.
- [ ] Vérifier le déroulé complet de session personnalisée et l’édition de bulles sur ordinateur et mobile.
- [ ] Ajouter la création et la modification des matières.
- [ ] Ajouter la création et la modification des chapitres reliés aux matières.
- [ ] Ajouter la création et la modification des exercices et des feuilles de cours.
- [ ] Relier matières, chapitres, fiches, exercices, feuilles et cartes mentales dans les filtres et parcours associés.
- [x] Transformer les liens des bulles en navigation réelle vers les fiches techniques ciblées.
- [ ] Ajouter des boutons retour arrière dans les dialogues, détails, éditeurs et séances.
- [ ] Tester les créations, les relations, les liens et la navigation sur ordinateur et mobile.
- [ ] Enregistrer un checkpoint après validation complète de cette évolution.

## Follow-up from previous iteration
- [ ] Ajouter une configuration de session personnalisée pour les fiches, exercices, oral et cartes mentales.
- [ ] Vérifier le déroulé complet de session personnalisée et l’édition de bulles sur ordinateur et mobile.

## Scope gap review
- [ ] Afficher dans l’écran /suivi les vrais résultats enregistrés (score, durée, paramètres choisis) pour chaque séance personnalisée.
- [ ] Étendre l’enregistrement des résultats réels aux futures sessions personnalisées de fiches et de cartes mentales, ou reformuler le todo pour le limiter explicitement aux exercices/oraux déjà implémentés.

## Implementation review
- [ ] Refaire une vérification globale de tous les états de chargement, vides, d’erreur et de réussite avant la prochaine livraison.
- [ ] Refaire une vérification globale des focus clavier et de la navigation mobile avant la prochaine livraison.
- [ ] Vérifier que le rendu LaTeX est bien appliqué à tous les champs de contenu éditables et consultables.
- [x] Vérifier que le build de production est stable après les prochaines modifications.
- [ ] Relire ce fichier avant le prochain checkpoint et ne marquer terminés que les éléments réellement vérifiés.
- [ ] Ne pas considérer cette évolution comme finale tant que les contrôles précédents ne sont pas résolus.

## Latest user request follow-up
- [ ] Vérifier que chaque nouvel écran et chaque mutation répond correctement aux états de chargement, vides, erreur et succès.
- [ ] Vérifier que les nouveaux contenus restent correctement reliés après création, modification et suppression.
- [ ] Ajouter une vérification responsive dédiée aux écrans de gestion de contenus et aux boutons retour.
- [ ] Confirmer l’absence de toute dépendance Base44 après l’ajout des nouveaux flux.
- [x] Exécuter `pnpm check`, `pnpm test` et `pnpm build` avant la prochaine livraison.
- [ ] Créer un checkpoint uniquement après validation des éléments ci-dessus.
- [ ] Ajouter les mutations et interfaces d’édition des matières.
- [ ] Ajouter les mutations et interfaces d’édition des chapitres.
- [ ] Ajouter l’édition et la suppression des exercices et feuilles.
- [ ] Ajouter les boutons retour dédiés aux dialogues, détails et éditeurs.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests et la prévisualisation après ces ajustements.
- [ ] Relire todo.md et créer un checkpoint uniquement après validation des éléments ci-dessus.

## Latest user request follow-up
- [ ] Ajouter des boutons retour cohérents sur les nouveaux parcours et corriger les éventuels liens qui ne sont pas encore fonctionnels.
- [ ] Vérifier que les nouveaux contenus affichent bien des états de chargement, vides, erreur et réussite.
- [ ] Vérifier que les liens des bulles ouvrent la bonne fiche technique et que les relations restent synchronisées.
- [ ] Vérifier le build, les tests

## Finalisation demandée par l’utilisateur
- [ ] Finaliser l’écran de gestion des matières, chapitres, exercices et feuilles.
- [ ] Ajouter la gestion des modifications et suppressions nécessaires.
- [ ] Ajouter la gestion au menu principal et relier les filtres entre onglets.
- [ ] Vérifier les liens réels des bulles vers les fiches.
- [ ] Vérifier les boutons retour sur les parcours concernés.
- [ ] Exécuter les contrôles TypeScript, tests et build.
- [ ] Vérifier la prévisualisation bureau et mobile.
- [ ] Enregistrer le checkpoint final après validation.

## Nouvelle organisation demandée
- [x] Ajouter un onglet Matières dans la navigation principale.
- [x] Déplacer la création des fiches dans l’onglet Bibliothèque.
- [x] Déplacer la création des exercices dans l’onglet Exercices.
- [x] Retirer les doublons de création depuis l’écran générique de gestion.
- [x] Relier l’onglet Matières aux chapitres et aux contenus associés.
- [x] Tester les nouveaux parcours et créer un checkpoint après validation.

## Nouvelle demande : centralisation dans Matières
- [x] Afficher dans Matières les chapitres, fiches, exercices, feuilles et cartes mentales associés à chaque matière.
- [x] Ajouter des liens directs depuis chaque matière vers ses contenus filtrés.
- [x] Supprimer l’onglet Créer de la navigation et retirer sa route générique.
- [x] Vérifier la navigation bureau/mobile après nettoyage.
- [x] Tester puis enregistrer un checkpoint.

## Refonte visuelle de l’onglet Matières
- [x] Renforcer la hiérarchie visuelle et la section d’introduction de Matières.
- [x] Repenser les cartes de matières avec compteurs, chapitres et ressources plus lisibles.
- [x] Ajouter une mise en avant élégante de la matière sélectionnée et de ses ressources.
- [x] Polir les états vides, chargement et sélection.
- [x] Vérifier le rendu responsive bureau/mobile.
- [ ] Tester puis enregistrer un checkpoint.

## Amélioration de la création d’exercices
- [x] Ajouter un formulaire de création plus guidé dans l’onglet Exercices.
- [x] Permettre de choisir la matière et le type d’exercice directement dans le formulaire.
- [x] Ajouter un champ de correction avec rendu LaTeX et aperçu avant enregistrement.
- [x] Améliorer les états de validation, erreur, annulation et succès.
- [x] Vérifier le rendu responsive et enregistrer un checkpoint.

## Popup de création d’exercice
- [x] Transformer le créateur d’exercice en popup comme celui des fiches.
- [x] Conserver le choix matière/type, l’énoncé, la correction et l’aperçu LaTeX dans la popup.
- [x] Vérifier fermeture, annulation et responsive puis créer un checkpoint.

## Correction du sélecteur de matière
- [x] Rendre le champ Matière de la popup plus clair et cohérent avec les autres champs.
- [x] Corriger la valeur initiale et l’affichage de la sélection.
- [x] Vérifier le rendu desktop/mobile et enregistrer un checkpoint.

## Lisibilité typographique
- [x] Augmenter les tailles des titres, textes de lecture, libellés et contrôles.
- [x] Préserver la hiérarchie et éviter les débordements sur mobile.
- [x] Vérifier les écrans principaux en desktop/mobile et enregistrer un checkpoint.

## Sessions personnalisées par matière et chapitre
- [x] Ajouter le choix de matière dans les sessions de tous les onglets concernés.
- [x] Ajouter le choix de chapitre avec l’option « Sans chapitre ».
- [x] Permettre de lancer une session personnalisée depuis Bibliothèque, Matières, Exercices et Cartes mentales.
- [x] Relier les filtres de session aux contenus réellement disponibles.
- [x] Enregistrer matière, chapitre et paramètres dans le suivi.
- [x] Gérer les états vides, les contenus sans chapitre et le responsive.
- [ ] Tester puis enregistrer un checkpoint.

## Personnalisation complète des sessions
- [x] Ajouter un configurateur partagé avec matière, chapitre, sans chapitre et contenu.
- [x] Ajouter les types de ressources et formats adaptés à chaque onglet.
- [x] Ajouter le filtre de niveau de maîtrise via mastery_records.
- [ ] Ajouter les filtres vus/non vus lorsque les données de consultation seront exposées par utilisateur.
- [ ] Ajouter un système de favoris avant d’exposer un filtre favoris.
- [x] Ajouter nombre d’éléments, durée cible, ordre aléatoire ou progressif.
- [x] Ajouter modes révision, entraînement, oral et correction immédiate/différée.
- [x] Enregistrer les paramètres matière, chapitre, ressource, quantité, durée, ordre, mode, correction et maîtrise dans le suivi.
- [x] Appliquer les réglages aux fiches, exercices, oral et cartes mentales.
- [ ] Tester toutes les combinaisons principales sur desktop/mobile et créer un checkpoint.

## Sessions personnalisées contextualisées par onglet
- [x] Ajouter un bouton Session personnalisée dans chaque onglet concerné.
- [x] Ouvrir une popup élégante et cohérente avec la popup de création de fiches.
- [x] Contextualiser la popup pour Bibliothèque, Exercices, Matières et Cartes mentales.
- [x] Préremplir les paramètres selon l’onglet et la sélection courante.
- [x] Lancer la séance depuis la popup avec les réglages réellement appliqués.
- [x] Vérifier fermeture, annulation, états vides et responsive.
- [x] Tester et enregistrer un checkpoint.

## Sessions d’exercices aléatoires et libres
- [x] Ajouter un bouton clair « Lancer une session » dans l’onglet Exercices.
- [x] Permettre de choisir une ou plusieurs matières.
- [x] Permettre de choisir rapidement le nombre d’exercices.
- [x] Ajouter un parcours aléatoire par défaut sans chapitre, difficulté ni mots-clés.
- [x] Ajouter un accès explicite au mode libre.
- [x] Permettre de sélectionner directement les exercices en mode libre.
- [x] Relier les sélections au moteur de session et au suivi des résultats.
- [x] Vérifier la simplicité d’usage, les états vides et le responsive.
- [x] Exécuter les tests et enregistrer un checkpoint.

## Simplification demandée de la popup d’exercices
- [x] Retirer maîtrise, durée, correction et paramètres avancés de la popup de session d’exercices.
- [x] Conserver uniquement nombre d’exercices, matières et mode aléatoire/libre.
- [x] Utiliser automatiquement le type d’exercices de la page active.
- [x] Permettre un nombre libre d’exercices en mode libre.
- [x] Vérifier l’interface et enregistrer un checkpoint.

## Chapitre et recherche dans les sessions d’exercices
- [x] Ajouter le choix du chapitre après le choix des matières.
- [x] Interpréter un chapitre vide comme « tous les chapitres ».
- [x] Ajouter une recherche rapide en mode libre.
- [x] Rechercher par titre, matière, chapitre et énoncé.
- [x] Vérifier le filtrage et enregistrer un checkpoint.

## Ajustement popup : nombre manuel et ordre des filtres
- [x] Remplacer la liste prédéfinie du nombre d’exercices par un champ numérique manuel.
- [x] Placer le choix du chapitre immédiatement sous le choix des matières.
- [x] Conserver « Tous les chapitres » lorsque rien n’est sélectionné.
- [x] Vérifier la validation du nombre, le filtrage et le responsive puis créer un checkpoint.

## Correction des actions Exercices
- [x] Retirer le bouton de lancement de séance en doublon dans le bloc principal.
- [x] Rendre le bouton « Nouvel exercice » visible et fonctionnel dans la popup de création.
- [x] Vérifier la fermeture, l’annulation et la validation de la création.
- [x] Tester puis enregistrer un checkpoint.

## Correction du bouton supprimé par erreur
- [x] Restaurer le bouton de lancement de séance attendu dans le bloc principal.
- [x] Supprimer uniquement le bouton indésirable identifié par l’utilisateur.
- [x] Vérifier que Nouvel exercice reste fonctionnel et correctement placé.
- [x] Tester desktop/mobile et enregistrer un checkpoint.

## Nouvelle augmentation des polices
- [x] Réaugmenter les titres, textes de contenu, boutons et formulaires.
- [x] Préserver les retours à la ligne et éviter les débordements mobiles.
- [x] Vérifier desktop/mobile et enregistrer un checkpoint.

## Session personnalisée de fiches techniques
- [x] Ajouter un bouton clair de session dans Bibliothèque.
- [x] Ouvrir une popup simple pour choisir matière, chapitre et nombre de fiches.
- [x] Permettre une session aléatoire et une sélection libre des fiches.
- [x] Brancher la sélection au moteur de révision des fiches.
- [x] Enregistrer la séance et ses résultats dans le suivi.
- [x] Vérifier desktop/mobile et enregistrer un checkpoint.

## Parité session Fiches / Exercices
- [x] Utiliser le même bouton et la même popup que dans Exercices pour Bibliothèque.
- [x] Conserver uniquement le nombre, les matières, le chapitre et le mode aléatoire/libre.
- [x] Adapter le mode libre à la recherche et sélection de fiches.
- [x] Vérifier la parité visuelle et fonctionnelle sur desktop/mobile.
- [x] Tester et enregistrer un checkpoint.

## Typographie — nouvelle augmentation
- [x] Agrandir encore les textes principaux et secondaires dans l’interface.
- [x] Vérifier les dialogues, cartes, contrôles et navigation sur mobile et desktop.
- [x] Tester la compilation et sauvegarder un checkpoint.

## Éditeur graphique de cartes mentales
- [x] Permettre de créer et modifier une carte mentale dans son onglet.
- [x] Ajouter des bulles sans limite pratique depuis l’interface graphique.
- [x] Ajouter facilement une sous-bulle à n’importe quelle bulle existante.
- [x] Remplacer la saisie de coordonnées par un placement graphique et automatique.
- [x] Permettre de relier les bulles et d’associer une fiche technique.
- [x] Tester l’éditeur sur desktop et mobile puis sauvegarder un checkpoint.

## Correctif HMR preview publique
- [x] Corriger l’URL WebSocket Vite qui pointe vers localhost:5173 depuis la preview publique.
- [x] Redémarrer le serveur et vérifier la connexion HMR et la preview.
- [x] Tester la compilation et sauvegarder un checkpoint.

## Lisibilité des bulles dans l’éditeur
- [x] Agrandir et renforcer le contraste du texte des bulles.
- [x] Améliorer la taille, l’espacement et la sélection des bulles sur mobile.
- [x] Vérifier l’éditeur et sauvegarder un checkpoint.

## Lisibilité renforcée des bulles
- [x] Simplifier la présentation graphique pour éviter les bulles trop petites ou superposées.
- [x] Renforcer fortement le contraste et la lisibilité du texte des bulles.
- [x] Vérifier l’éditeur réel sur mobile et desktop puis sauvegarder un checkpoint.

## Navigation de l’éditeur de carte mentale
- [x] Empêcher que la colonne de réglages coupe ou masque le canevas.
- [x] Permettre de se déplacer dans la carte mentale dans toutes les directions.
- [x] Ajouter zoom, dézoom et recentrage accessibles.
- [x] Permettre l’ajout direct d’une bulle ou d’une sous-bulle depuis le canevas.
- [x] Vérifier desktop et mobile puis sauvegarder un checkpoint.

## Vue graphe inspirée d’Obsidian
- [x] Remplacer l’édition limitée en popup par un grand espace de graphe navigable.
- [x] Afficher les bulles comme des nœuds indépendants reliés par des arêtes visibles.
- [x] Permettre le déplacement libre, le zoom et la sélection directe comme dans une vue graphe.
- [x] Conserver l’ajout de sous-bulles, l’association de fiches et l’édition contextuelle.
- [x] Tester desktop/mobile et sauvegarder un checkpoint.

## Plan de travail infini
- [x] Supprimer les limites de largeur et hauteur du canevas de navigation.
- [x] Permettre de naviguer librement dans toutes les directions avec une surface extensible.
- [x] Adapter le zoom, le recentrage et l’ajout de bulles au plan infini.
- [x] Tester desktop/mobile et sauvegarder un checkpoint.

## Centrage fiable de la carte mentale
- [x] Centrer la carte visible sur le viewport à chaque ouverture de l’éditeur.
- [x] Faire fonctionner Recentrer avec la position réelle de la carte et du zoom.
- [x] Vérifier plusieurs tailles d’écran et sauvegarder un checkpoint.

## Graphe visible et cadrage fiable
- [x] Garantir que les nœuds de la carte sont visibles dès l’ouverture de l’éditeur.
- [x] Corriger le cadrage pour éviter la zone vide ou le graphe hors champ.
- [x] Revoir le déplacement et le recentrage pour qu’ils suivent réellement les nœuds.
- [x] Vérifier la capture réelle sur desktop et mobile puis sauvegarder un checkpoint.

## Zoom par défaut de la carte mentale
- [x] Définir 55 % comme zoom initial de l’éditeur.
- [x] Faire revenir le bouton Recentrer à 55 %.
- [x] Vérifier l’indicateur et sauvegarder un checkpoint.

## Intégrité des bulles
- [x] Empêcher la concaténation du texte entre les bulles.
- [x] Générer des identifiants uniques et des libellés indépendants à chaque ajout.
- [x] Corriger le placement des nouvelles bulles et préserver les données existantes.
- [x] Vérifier une carte existante après plusieurs ajouts et sauvegarder un checkpoint.

## Reproduction définitive de la concaténation
- [x] Reproduire le parcours exact d’ajout puis d’édition d’une bulle.
- [x] Tracer séparément la valeur affichée, la valeur d’état et la valeur sauvegardée.
- [x] Ajouter une normalisation qui empêche toute concaténation accidentelle.
- [x] Retester la carte réelle et sauvegarder la correction définitive.

## Création de carte mentale — valeurs injectées
- [x] Vérifier l’initialisation séparée du titre, de la description et de la bulle racine.
- [x] Empêcher les valeurs saisies dans un champ de contaminer d’autres champs ou nœuds.
- [x] Nettoyer les cartes de test corrompues sans toucher aux cartes valides.
- [x] Reproduire création/sauvegarde et valider la correction par tests et checkpoint.

## Vue normale de consultation des cartes mentales
- [x] Corriger le placement et le centrage des nœuds dans BubbleCanvas.
- [x] Afficher les connexions selon les relations parent-enfant réelles.
- [x] Empêcher qu’une carte à peu de nœuds soit collée dans un coin.
- [x] Vérifier la carte « Test » et les cartes existantes puis sauvegarder un checkpoint.

## Preview désynchronisée
- [x] Vérifier que la preview charge la dernière version de la vue normale.
- [x] Éliminer un éventuel cache ou état HMR obsolète.
- [x] Recharger et contrôler le rendu de la carte mentale dans la preview.
- [x] Sauvegarder l’état synchronisé après validation.

## Miniatures de cartes mentales
- [x] Recentrer les nœuds des miniatures au lieu d’utiliser les coordonnées brutes.
- [x] Tracer les liens des miniatures selon les parentId réels.
- [x] Vérifier la preview de la page Cartes mentales et sauvegarder un checkpoint.

## Placement libre des bulles
- [x] Permettre de déplacer chaque bulle indépendamment à la souris et au doigt.
- [x] Empêcher l’auto-layout de remplacer les positions personnalisées.
- [x] Espacer correctement plusieurs bulles principales et conserver leurs liens.
- [x] Tester le déplacement dans la vue normale et l’éditeur puis sauvegarder un checkpoint.

## Espacement des bulles principales
- [x] Garantir une distance minimale entre les bulles principales.
- [x] Répartir les nouvelles racines sans les superposer.
- [x] Conserver les positions déplacées manuellement et vérifier la preview.

## Édition et suppression des ressources
- [x] Rendre les cartes mentales éditables et supprimables par clic/appui.
- [x] Rendre les matières éditables et supprimables par clic/appui.
- [x] Rendre les exercices éditables et supprimables par clic/appui.
- [x] Ajouter une confirmation avant suppression et rafraîchir les onglets liés.
- [x] Tester les parcours et sauvegarder un checkpoint.

## Suppression des bulles principales
- [x] Supprimer une bulle principale avec son sous-arbre sans laisser de relations orphelines.
- [x] Gérer la suppression de la dernière bulle principale et préserver une carte valide.
- [x] Vérifier le bouton de suppression sur une carte réelle et sauvegarder un checkpoint.

## Commentaires sur les exercices
- [x] Ajouter une persistance pour les commentaires liés à un exercice.
- [x] Permettre d’ajouter, modifier et supprimer un commentaire depuis l’exercice.
- [x] Afficher les commentaires avec prise en charge du LaTeX.
- [x] Tester le parcours desktop/mobile et sauvegarder un checkpoint.

## Commentaires pendant les séances
- [x] Ajouter un champ de commentaire dans l’écran de séance d’exercices.
- [x] Sauvegarder le commentaire sur l’exercice courant sans quitter la séance.
- [x] Restaurer le commentaire lors du passage à l’exercice et de la prochaine séance.
- [x] Tester le parcours desktop/mobile et sauvegarder un checkpoint.

## Bouton commentaire en séance
- [x] Retirer le champ de commentaire permanent de l’écran de séance.
- [x] Ajouter un bouton « Commentaire » à côté du bouton « Correction ».
- [x] Ouvrir un panneau ou dialogue de saisie au clic sur le bouton.
- [x] Tester le parcours desktop/mobile et sauvegarder un checkpoint.

## Retour après séance
- [x] Naviguer automatiquement vers l’onglet Exercices après sauvegarde réussie d’une séance.
- [x] Ne déclencher le retour qu’après confirmation de l’enregistrement.
- [x] Tester le parcours de fin de séance et sauvegarder un checkpoint.

## Retour séance — correction complémentaire
- [x] Vérifier le chemin exact de la route Exercices.
- [x] Garantir la navigation après succès réel de l’enregistrement, y compris le flux preview.
- [x] Retester le bouton de fin de séance et sauvegarder un checkpoint.

## Fin de séance — ne pas relancer
- [x] Ne pas réinitialiser la séance après clic sur « Enregistrer la séance ».
- [x] Attendre la sauvegarde puis quitter définitivement vers Exercices.
- [x] Empêcher les doubles clics et vérifier le parcours final.
- [x] Tester et sauvegarder un checkpoint.

## Enregistrement séance bloqué
- [x] Faire sortir le bouton de l’état « Enregistrement… » après succès.
- [x] Réactiver le bouton et afficher une erreur récupérable en cas d’échec.
- [x] Vérifier le retour vers Exercices après une sauvegarde réellement terminée.
- [x] Tester et sauvegarder un checkpoint.

## Blocage confirmé sur écran de fin
- [x] Reproduire et identifier pourquoi « Enregistrement… » reste affiché sans navigation.
- [x] Corriger la fin de séance pour garantir une action utilisateur fonctionnelle.
- [x] Vérifier la capture et le parcours complet dans la preview.

## Blocage persistant signalé par l’utilisateur
- [x] Identifier pourquoi le bouton reste bloqué malgré la navigation immédiate.
- [x] Remplacer le flux par une action de retour indépendante et visible.
- [x] Vérifier le parcours sur la version servie dans la preview.

## Authentification locale et auto-hébergement
- [x] Remplacer Manus OAuth par des comptes locaux avec inscription, connexion et déconnexion.
- [x] Sécuriser les mots de passe et les sessions locales côté serveur.
- [x] Adapter les procédures protégées et l’interface à l’authentification locale.
- [x] Supprimer les dépendances fonctionnelles à Manus OAuth pour le fonctionnement local.
- [x] Préparer la base de données et la procédure de lancement sur PC.
- [x] Ajouter une documentation d’installation et de sauvegarde des données.
- [x] Écrire les tests de régression pour l’authentification locale.

## Profils locaux façon Netflix
- [x] Remplacer le mot de passe par une sélection de profils au démarrage.
- [x] Limiter l’installation à deux comptes locaux et empêcher un troisième profil.
- [x] Permettre la création d’un profil avec un nom uniquement.
- [x] Conserver une session locale et la séparation des données par profil.
- [x] Tester l’écran de sélection et sauvegarder un checkpoint.

## Avatars personnalisés des profils
- [x] Ajouter la persistance du choix d’avatar pour chaque profil.
- [x] Permettre le choix d’un avatar intégré ou le téléversement d’une image personnelle.
- [x] Afficher l’avatar choisi sur l’écran d’accueil et dans le shell.
- [x] Vérifier la taille et le type des images téléversées.
- [x] Tester la persistance et sauvegarder un checkpoint.

## Modification des profils
- [x] Ajouter la mutation de modification du nom et de l’avatar d’un profil existant.
- [x] Ajouter un bouton d’édition sur chaque profil de l’écran d’accueil.
- [x] Réutiliser le choix d’avatar intégré et l’image personnelle dans le formulaire d’édition.
- [x] Actualiser immédiatement le profil actif après modification.
- [x] Tester et sauvegarder un checkpoint.
