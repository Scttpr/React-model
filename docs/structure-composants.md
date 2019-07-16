# Describe component architecture

## Globals

| Name | Role | Parent | Children | Comments
| -- | -- | -- | -- | -- |
| `<RootComponent />` | Comprend le store, le router, le persist, etc. | --- | `<Routes />` | A paramétrer en fonction de l'utilisation ou non du persist, etc. |
| `<Routes />` | Organise le routing de l'app | `<RootComponent />` | Les composants "Pages" | Routing à définir dans un fichier spécifique |

## Redundants

| Name | Role | Parent | Children | Comments
| -- | -- | -- | -- | -- |
| `<Header />` | Affiche le header principal | `<Route />` | variable selon la route | Probablement deux contenus de headers, l'un connecté, l'autre non |
| `<Nav />` | Menu une fois connecté | Variable | Des liens vers `/set-treatment`, `/my-calendar`, `/update-profile` | Potentiellement ajouter une logique de sélection de profil si proches enregistrés |
| `<Footer />` | Affiche le footer principal | `<Route />` | variable selon la route | A voir si ça ne charge pas trop la page si on part sur du 100vh |


## Pages

| Name | Role | Parent | Children | Route | Comments
| -- | -- | -- | -- | -- | -- |
| `<LandingPage />` | Vue à l'arrivée sur le site | `<Routes />` | `<Footer />` | `/` | Voir si on crée un composant Main pour dynamiser le contenu principal de la page |


## Modals

* `<Connect />` == Créer un compte ou se connecter
* `<DataPolicy />` == Affiche la politique liée aux données

## Architecture

```
|-- RootComponent
    |
    |-- Header
    |-- Routes
    |-- Footer // A voir
        |
        |   // NOT CONNECTED
        |-- LandingPage
        |    |
        |    |-- Search
        |    |-- Connect
        |
        |-- SignIn
        |    |
        |    |-- Form
        |
        |-- SignUp
        |    |
        |    |-- Form
        |    |-- DataPolicy
        |    |-- ConfirmSignUp
```


