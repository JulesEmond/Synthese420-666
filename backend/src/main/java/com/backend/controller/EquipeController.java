package com.backend.controller;

import com.backend.model.Equipe;
import com.backend.repository.EquipeRepository;
import com.backend.service.EquipeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:9600")
public class EquipeController {

    @Autowired
    EquipeService service;

    @Autowired
    EquipeRepository equipeRepository;

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

    @GetMapping(value = "/backend/equipe/{id}")
    public Equipe findEquipe(@PathVariable("id") int id) {
        return equipeRepository.findById(id);
    }
}
