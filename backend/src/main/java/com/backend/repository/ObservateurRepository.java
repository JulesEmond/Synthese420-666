package com.backend.repository;

import com.backend.model.Observateur;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ObservateurRepository extends JpaRepository<Observateur, Integer> {
    Observateur findById(int id);
    Observateur findByUsernameAndPassword(String username, String password);
    boolean existsByUsername(String username);
}
