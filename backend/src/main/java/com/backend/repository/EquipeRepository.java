package com.backend.repository;

import com.backend.model.Equipe;
import com.backend.model.Ligue;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EquipeRepository extends JpaRepository<Equipe, Integer> {
    Equipe findById(int id);
    List<Equipe> findByLigue(Ligue ligue);

    Equipe deleteById (int id);
}