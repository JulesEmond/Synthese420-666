package com.backend.service;

import com.backend.model.Equipe;
import com.backend.model.Joueur;
import com.backend.repository.EquipeRepository;
import com.backend.repository.JoueurRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class JoueurService {

    @Autowired
    JoueurRepository joueurRepository;

    @Autowired
    EquipeRepository equipeRepository;

    public Joueur createJoueur (Joueur joueur){
        joueurRepository.save(joueur);
        return joueur;
    }

    public Joueur updateJoueur (Joueur joueur){
        if (joueurRepository.existsById(joueur.getId())){
            joueurRepository.save(joueur);
            return joueur;
        }
        return null;
    }

    public List<Joueur> findByEquipe (int idEquipe){
        Equipe equipe = equipeRepository.findById(idEquipe);
        if(equipe != null){
            List<Joueur> joueurs = joueurRepository.findByEquipe(equipe);
            return joueurs;
        }
        return null;
    }
}
