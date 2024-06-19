const express = require('express');
 const app = express();
 const port = 3000;

 // Middleware pour utiliser JSON dans les requêtes
 app.use(express.json());

  // Endpoint pour ajouter une tâche
  app.post('/', (req, res) => {
    const {prenom,annee} = req.body;
    if(!prenom)
        {
            return res.status(400).json({ error: 'Veuillez entrer votre prenom' });
        }
        if(!annee)  
            {
               return res.status(400).json({error:'Veuillez entrer votre année de naissance'});
            }

    const age = 2024-annee;
    if(age >= 18)
    {
        return res.status(200).json({succes:`Salut ${prenom}, vous avez ${age} ans et vous etes majeur `});
    }
    else
    {
        return res.status(200).json({succes:`Salut ${prenom}, vous avez ${age} ans et vous etes mineur `});
    }        
    });

    

    // Démarrer le serveur
    app.listen(port, () => {
    console.log(`Serveur démarré sur le port ${port}`);
    });

