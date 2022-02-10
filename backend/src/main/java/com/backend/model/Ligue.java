package com.backend.model;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Data
@SequenceGenerator(name = "ligueSeq", initialValue = 3000, allocationSize = 1000)
public class Ligue implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "ligueSeq")
    private int id;
    private String name;
    private String address;
    private String description;
    private String sport;

    @ManyToOne
    private Gestionnaire gestionnaire;
}