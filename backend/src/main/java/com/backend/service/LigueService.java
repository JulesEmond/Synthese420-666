package com.backend.service;

import com.backend.model.*;
import com.backend.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class LigueService {

    @Autowired
    private GestionnaireRepository gestionnaireRepository;

    @Autowired
    private ObservateurRepository observateurRepository;

    @Autowired
    private LigueRepository ligueRepository;

    @Autowired
    private ObserveLigueRepository observeLigueRepository;

    @Autowired
    EquipeService equipeService;

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
        List<Equipe> equipes = equipeService.findByLigue(ligueId);
        while (equipes.size() != 0){
            equipeService.deleteEquipe(equipes.get(0).getId());
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

    public Observateur inviteLigue (String username, int ligueId){
        Observateur observateur = observateurRepository.findByUsername(username);
        Ligue ligue = ligueRepository.findById(ligueId);
        if(observateur != null && ligue != null){
            ObserveLigue invitation = new ObserveLigue();
            invitation.setObservateur(observateur);
            invitation.setLigue(ligue);
            if (!observeLigueRepository.existsByObservateurAndLigue(observateur, ligue)){
                observeLigueRepository.save(invitation);
                return observateur;
            }
        }
        return null;
    }

    public List<Ligue> findLiguePrive (int id){
        Observateur observateur = observateurRepository.findById(id);
        if (observateur != null){
            List<ObserveLigue> observeLigues = observeLigueRepository.findByObservateur(observateur);
            List<Ligue> ligues = new ArrayList<>();
            for (ObserveLigue observeLigue : observeLigues) {
                Ligue ligue = observeLigue.getLigue();
                if (!ligues.contains(ligue) && ligue.getPrivacy().equals("private")) {
                    ligues.add(observeLigue.getLigue());
                }
            }
            return ligues;
        }
        return null;
    }
}
