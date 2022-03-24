package com.backend.service;

import com.backend.model.Gestionnaire;
import com.backend.model.Ligue;
import com.backend.model.Observateur;
import com.backend.repository.GestionnaireRepository;
import com.backend.repository.LigueRepository;
import com.backend.repository.ObservateurRepository;
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

}
