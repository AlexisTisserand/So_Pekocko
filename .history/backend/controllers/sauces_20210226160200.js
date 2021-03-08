//Prendre la logique métier appliquée à chaque route et l'appliquer ici

const Sauce = require('../models/Sauce')

exports.createSauce = (req, res, next) => {
  const sauce = new Sauce({
    ...req.body
  })
  sauce
    .save()
    .then(() => res.status(201).json({ message: 'Sauce enregistrée !' }))
    .catch(error => res.status(400).json({ error }))
};

exports.modifySauce = (req, res, next) => {
  Sauce.updateOne({_id: req.params.id})
    .then(() => res.status(200).json({message: "Objet modifié !"}))
    .catch(error => res.status(400).json({error}))
};