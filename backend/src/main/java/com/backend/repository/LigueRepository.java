package com.backend.repository;

import com.backend.model.Gestionnaire;
import com.backend.model.Ligue;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LigueRepository extends JpaRepository<Ligue, Integer> {
    Ligue findById(int id);
    List<Ligue> findByGestionnaire(Gestionnaire gestionnaire);
    List<Ligue> findBySport(String sport);
    Ligue deleteById (int id);
}
