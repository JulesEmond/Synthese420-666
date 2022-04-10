package com.backend.repository;

import com.backend.model.Ligue;
import com.backend.model.Observateur;
import com.backend.model.ObserveLigue;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ObserveLigueRepository extends JpaRepository<ObserveLigue, Integer> {
    List<ObserveLigue> findByObservateur(Observateur observateur);
    boolean existsByObservateurAndLigue(Observateur observateur, Ligue ligue);
}
