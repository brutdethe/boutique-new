# Boutique de thé

Petite boutique simple pour vendre des objets ou des produits.
Nous l'utilisons pour le thé et des objets de thé mais rien n'empêche de l'utiliser pour d'autres sujets. 

## À propos de l'organisation

### Les fonctionnalités

Backlog du produit : https://github.com/pntbr/boutique/projects/1

### L'équipe

- [Stéphane Langlois](https://github.com/pntbr) (scopyleft/échappée belle/Brut de Thé) - développement
- [Jé le Potier](https://www.theiere-tasse.com) - PO 
- [Erick Gardin](https://entre-quote.com/) - intégration CSS
- [Maïtané Lenoir](https://www.maiwann.net/) - Design
- [Antoine Vernois](https://blog.crafting-labs.fr/) - "Supervision"

## À propos de la technique

- framework JavaScript : https://sapper.svelte.dev - https://svelte.dev
- framework css : https://picturepan2.github.io/spectre/
- optimisation des photos : https://sharp.pixelplumbing.com
  
- hébergement : [heroku](https://id.heroku.com/login)

### Organisation GitHub

Le site est développé sur la branche : [_dev_](../../tree/dev)  
La branche principale est : [_main_](../../tree/main)

### Pour lancer le site en local

`$ npm run dev -- --open`

### Pour déployer 

Le déploiement est automatisé à partir de la branche [_prod_](../../tree/prod) vers *Heroku*

### Stripe

#### Pour stocker les clés

On utilise [dotenv](https://github.com/motdotla/dotenv) pour récupérer les variables stockées dans un fichier *.env*  
C'est dans ce ficher que l'on place la [clé stripe](https://dashboard.stripe.com/test/apikeys) :
`stripe_secret=sk_test_66HYYSHXXXXXXXXXXXXXXXXXXX`

Pour *heroku* la clé est stockée dans les *settings*

## Licence

[CC1.0](LICENSE)