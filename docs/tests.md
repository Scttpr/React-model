# Mise en oeuvre des tests sur l'application React

## Librairies

Le module de test utilise la combinaison d'Enzyme (librairie spécifiquement développée pour les tests sous React) et Mocha.
* [Mocha](https://mochajs.org/)
* [Enzyme](https://airbnb.io/enzyme/)

## Config

* Enzyme nécessite d'être paramétré pour la dernière version de React, le fichier de config se trouve dans le dossier `src/tests/.setup.js`.
* Le script de test est paramétré pour aller chercher tous les fichiers s'appelant test.js dans l'arborescence de `src`.
* Dans package.json : `"test": "mocha --require src/tests/.setup.js src/**/test.js src/tests/*.test.js",`

## Execution

* `npm run test` == Lance tous les tests paramétrés dans l'application.

> /!\ ATTENTION, la version actuelle du test renvoie une erreur NPM en fin de script si un test ne passe pas. Cette erreur n'est pas bloquante, tous les tests sont effectués.

## Architecture d'implémentation & nomenclature

### Implémentation
* Les tests sur l'application sont dans le fichier `src/tests` et sont à enregistrer sous la forme : nomDuTest.test.js
* Les tests spécifiques aux composants sont directement implémentés dans le composant via un fichier test.js

### Nomenclature
* Pour les composants, nommé le test comme un composant React : `<MonComposant />` et expliciter au maximum les `describe` afin de faciliter la lecture du résultat.



