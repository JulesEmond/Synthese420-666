package com.backend.controller;

import com.backend.model.*;
import com.backend.repository.*;
import com.backend.service.BackendService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:9600")
public class BackendController {

    @Autowired
    BackendService service;

    @Autowired
    GestionnaireRepository gestionnaireRepository;

    @Autowired
    ObservateurRepository observateurRepository;

    @Autowired
    LigueRepository ligueRepository;

    @Autowired
    EquipeRepository equipeRepository;

    @Autowired
    JoueurRepository joueurRepository;

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

    @PostMapping("/backend/ligue")
    public Ligue createLigue(@RequestBody Ligue ligue) {
        return service.createLigue(ligue);
    }

    @PostMapping("/backend/ligue/update")
    public Ligue updateLigue(@RequestBody Ligue ligue) {
        return service.updateLigue(ligue);
    }

    @DeleteMapping(value = "/backend/ligue/delete/{id}")
    public void deleteLigue(@PathVariable("id") int id) {
        service.deleteLigue(id);
    }

    @GetMapping(value = "/backend/ligue/parent/{id}/{privacy}")
    public List<Ligue> findByGestionnaireAndPrivacy(@PathVariable("id") int id, @PathVariable("privacy") String privacy) {
        return service.findByGestionaire(id, privacy);
    }

    @GetMapping(value = "/backend/ligue/public")
    public List<Ligue> findLiguePublic(){
        return ligueRepository.findByPrivacy("public");
    }

    @PostMapping("/backend/equipe")
    public Equipe createEquipe(@RequestBody Equipe equipe) {
        return service.createEquipe(equipe);
    }

    @PostMapping("/backend/equipe/update")
    public Equipe updateEquipe(@RequestBody Equipe equipe) {
        return service.updateEquipe(equipe);
    }

    @DeleteMapping(value = "/backend/equipe/delete/{id}")
    public void deleteEquipe(@PathVariable("id") int id) {
        service.deleteEquipe(id);
    }

    @GetMapping(value = "/backend/equipe/parent/{id}")
    public List<Equipe> findByLigue(@PathVariable("id") int id){
        return service.findByLigue(id);
    }

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

    @GetMapping(value = "/backend/gestionnaire/{id}")
    public Gestionnaire findGestionnaire(@PathVariable("id") int id){
        return gestionnaireRepository.findById(id);
    }

    @GetMapping(value = "/backend/observateur/{id}")
    public Observateur findObservateur(@PathVariable("id") int id){
        return observateurRepository.findById(id);
    }

    @GetMapping(value = "/backend/ligue/{id}")
    public Ligue findLigue(@PathVariable("id") int id) {
        return ligueRepository.findById(id);
    }

    @GetMapping(value = "/backend/equipe/{id}")
    public Equipe findEquipe(@PathVariable("id") int id) {
        return equipeRepository.findById(id);
    }

    @GetMapping(value = "/backend/joueur/{id}")
    public Joueur findJoueur(@PathVariable("id") int id) {
        return joueurRepository.findById(id);
    }

    @GetMapping(value="/backend/observateur/invite/{username}/{id}")
    public Observateur inviteObservateur (@PathVariable("username") String username, @PathVariable("id") int id){
        return service.inviteLigue(username, id);
    }

    @GetMapping(value = "/backend/ligue/prive/{id}")
    public List<Ligue> findPriveByObservateur(@PathVariable("id") int id){
        return service.findLiguePrive(id);
    }
}
