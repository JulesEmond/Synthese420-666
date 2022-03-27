package com.backend.repository;

import com.backend.model.Equipe;
import com.backend.model.Joueur;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface JoueurRepository extends JpaRepository<Joueur, Integer> {
    Joueur findById(int id);
    List<Joueur> findByEquipe(Equipe equipe);
    Joueur deleteById (int id);
}
