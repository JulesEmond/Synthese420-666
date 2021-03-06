package com.backend.service;

import com.backend.model.Gestionnaire;
import com.backend.model.Observateur;
import com.backend.repository.GestionnaireRepository;
import com.backend.repository.ObservateurRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private GestionnaireRepository gestionnaireRepository;

    @Autowired
    private ObservateurRepository observateurRepository;

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
}
