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

    public Ligue updateLigue (Ligue ligue){
        if (ligueRepository.existsById(ligue.getId())) {
            ligueRepository.save(ligue);
            return ligue;
        }
        return null;
    }

    public void deleteLigue(int ligueId){
        Ligue ligue = ligueRepository.findById(ligueId);
        ligue.setGestionnaire(null);
        ligueRepository.save(ligue);
        List<Equipe> equipes = findByLigue(ligueId);
        while (equipes.size() != 0){
            deleteEquipe(equipes.get(0).getId());
            equipes.remove(0);
        }
        ligueRepository.delete(ligue);
    }

    public List<Ligue> findByGestionaire (int idGestionnaire, String privacy){
        Gestionnaire gestionnaire = gestionnaireRepository.findById(idGestionnaire);
        if(gestionnaire != null){
            return ligueRepository.findByGestionnaireAndPrivacy(gestionnaire, privacy);
        }
        return null;
    }

    public Equipe createEquipe (Equipe equipe){
        equipeRepository.save(equipe);
        return equipe;
    }

    public Equipe updateEquipe (Equipe equipe){
        if (equipeRepository.existsById(equipe.getId())){
            equipeRepository.save(equipe);
            return equipe;
        }
        return null;
    }

    public void deleteEquipe(int equipeId){
        Equipe equipe = equipeRepository.findById(equipeId);
        equipe.setLigue(null);
        equipeRepository.save(equipe);
        List<Joueur> joueurs = findByEquipe(equipeId);
        while (joueurs.size() != 0){
            joueurRepository.deleteById(joueurs.get(0).getId());
            joueurs.remove(0);
        }
        equipeRepository.delete(equipe);
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
