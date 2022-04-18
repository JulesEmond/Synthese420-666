package com.backend.controller;

import com.backend.model.Joueur;
import com.backend.repository.JoueurRepository;
import com.backend.service.JoueurService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:9600")
public class JoueurController {

    @Autowired
    JoueurService service;

    @Autowired
    JoueurRepository joueurRepository;

    @PostMapping("/backend/joueur")
    public Joueur createjoueur(@RequestBody Joueur joueur) {
        return service.createJoueur(joueur);
    }

    @PostMapping("/backend/joueur/update")
    public Joueur updatejoueur(@RequestBody Joueur joueur) {
        return service.updateJoueur(joueur);
    }

    @DeleteMapping("/backend/joueur/delete/{id}")
    public Joueur deletejoueur(@PathVariable("id") int id) {
        return joueurRepository.deleteById(id);
    }

    @GetMapping(value = "/backend/joueur/parent/{id}")
    public List<Joueur> findByEquipe(@PathVariable("id") int id){
        return service.findByEquipe(id);
    }

    @GetMapping(value = "/backend/joueur/{id}")
    public Joueur findJoueur(@PathVariable("id") int id) {
        return joueurRepository.findById(id);
    }

}
