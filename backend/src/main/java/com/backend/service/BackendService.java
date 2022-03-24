package com.backend.service;

import com.backend.model.*;
import com.backend.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BackendService {

    @Autowired
    private GestionnaireRepository gestionnaireRepository;

    @Autowired
    private ObservateurRepository observateurRepository;

    @Autowired
    private LigueRepository ligueRepository;

    @Autowired
    private EquipeRepository equipeRepository;

    @Autowired
    private JoueurRepository joueurRepository;


    public Gestionnaire signupGestionnaire (Gestionnaire gestionnaire){
        if (!gestionnaireRepository.existsByUsername(gestionnaire.getUsername())
                && !observateurRepository.existsByUsername(gestionnaire.getUsername())) {
            gestionnaireRepository.save(gestionnaire);
            return gestionnaire;
        }
        return null;
    }

    public Observateur signupObservateur (Observateur observateur){
        if (!observateurRepository.existsByUsername(observateur.getUsername())
                && !gestionnaireRepository.existsByUsername(observateur.getUsername())) {
            observateurRepository.save(observateur);
            return observateur;
        }
        return null;
    }

    public Gestionnaire loginGestionnaire (String username, String password){
        Gestionnaire gestionnaire = gestionnaireRepository.findByUsernameAndPassword(username, password);
        return gestionnaire;
    }

    public Observateur loginObservateur (String username, String password){
        Observateur observateur = observateurRepository.findByUsernameAndPassword(username, password);
        return observateur;
    }

    public Ligue createLigue (Ligue ligue){
        ligueRepository.save(ligue);
        return ligue;
    }

    public List<Ligue> findByGestionaire (int idGestionnaire){
        Gestionnaire gestionnaire = gestionnaireRepository.findById(idGestionnaire);
        if(gestionnaire != null){
            List<Ligue> ligues = ligueRepository.findByGestionnaire(gestionnaire);
            return ligues;
        }
        return null;
    }

    public Equipe createEquipe (Equipe equipe){
        equipeRepository.save(equipe);
        return equipe;
    }

    public List<Equipe> findByLigue (int idLigue){
        Ligue ligue = ligueRepository.findById(idLigue);
        if(ligue != null){
            List<Equipe> equipes = equipeRepository.findByLigue(ligue);
            return equipes;
        }
        return null;
    }

    public Joueur createJoueur (Joueur joueur){
        joueurRepository.save(joueur);
        return joueur;
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
