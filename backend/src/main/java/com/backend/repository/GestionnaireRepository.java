package com.backend.repository;

import com.backend.model.Gestionnaire;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GestionnaireRepository extends JpaRepository<Gestionnaire, Integer> {
    Gestionnaire findByUsernameAndPassword(String username, String password);
    boolean existsByUsername(String username);
}
