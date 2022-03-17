package com.backend.controller;

import com.backend.model.Gestionnaire;
import com.backend.model.Observateur;
import com.backend.repository.GestionnaireRepository;
import com.backend.repository.ObservateurRepository;
import com.backend.service.BackendService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:9600")
public class BackendController {

    @Autowired
    BackendService service;

    @Autowired
    GestionnaireRepository gestionnaireRepository;

    @Autowired
    ObservateurRepository observateurRepository;

    @PostMapping("/backend/gestionnaire")
    public Gestionnaire signupGestionnaire(@RequestBody Gestionnaire gestionnaire) {
        return service.signupGestionnaire(gestionnaire);
    }

    @PostMapping("/backend/observateur")
    public Observateur signupObservateur(@RequestBody Observateur observateur) {
        return service.signupObservateur(observateur);
    }

    @GetMapping(value = "/backend/gestionnaire/{username}/{pwd}")
    public Gestionnaire loginGestionnaire(@PathVariable("username") String username, @PathVariable("pwd") String password){
        return service.loginGestionnaire(username, password);
    }

    @GetMapping(value = "/backend/observateur/{username}/{pwd}")
    public Observateur loginObservateur(@PathVariable("username") String username, @PathVariable("pwd") String password){
        return service.loginObservateur(username, password);
    }

    @GetMapping(value = "/backend/gestionnaire/{id}")
    public Gestionnaire findGestionnaire(@PathVariable("id") int id){
        return gestionnaireRepository.findById(id);
    }

    @GetMapping(value = "/backend/observateur/{id}")
    public Observateur findObservateur(@PathVariable("id") int id){
        return observateurRepository.findById(id);
    }
}
