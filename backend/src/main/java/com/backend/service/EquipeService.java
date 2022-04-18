package com.backend.service;

import com.backend.model.Equipe;
import com.backend.model.Joueur;
import com.backend.model.Ligue;
import com.backend.repository.EquipeRepository;
import com.backend.repository.JoueurRepository;
import com.backend.repository.LigueRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EquipeService {

    @Autowired
    JoueurService joueurService;

    @Autowired
    private LigueRepository ligueRepository;

    @Autowired
    private EquipeRepository equipeRepository;

    @Autowired
    private JoueurRepository joueurRepository;

    public List<Equipe> findByLigue (int idLigue){
        Ligue ligue = ligueRepository.findById(idLigue);
        if(ligue != null){
            List<Equipe> equipes = equipeRepository.findByLigue(ligue);
            return equipes;
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
        List<Joueur> joueurs = joueurService.findByEquipe(equipeId);
        while (joueurs.size() != 0){
            joueurRepository.deleteById(joueurs.get(0).getId());
            joueurs.remove(0);
        }
        equipeRepository.delete(equipe);
    }
}
