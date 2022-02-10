package com.backend.model;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Data
@SequenceGenerator(name = "observeLigueSeq", initialValue = 6000, allocationSize = 3000)
public class ObserveLigue implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "observeLigueSeq")
    private int id;

    @ManyToOne
    private Observateur observateur;

    @ManyToOne
    private Ligue ligue;
}
