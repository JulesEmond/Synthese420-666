package com.backend.controller;

import com.backend.model.*;
import com.backend.repository.*;
import com.backend.service.LigueService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:9600")
public class LigueController {

    @Autowired
    LigueService service;

    @Autowired
    LigueRepository ligueRepository;

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

    @GetMapping(value = "/backend/ligue/{id}")
    public Ligue findLigue(@PathVariable("id") int id) {
        return ligueRepository.findById(id);
    }

    @GetMapping(value = "/backend/ligue/parent/{id}/{privacy}")
    public List<Ligue> findByGestionnaireAndPrivacy(@PathVariable("id") int id, @PathVariable("privacy") String privacy) {
        return service.findByGestionaire(id, privacy);
    }

    @GetMapping(value = "/backend/ligue/public")
    public List<Ligue> findLiguePublic(){
        return ligueRepository.findByPrivacy("public");
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
