package com.backend.model;

import lombok.Data;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Data
@SequenceGenerator(name = "equipeSeq", initialValue = 4000, allocationSize = 1000)
public class Equipe implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "equipeSeq")
    private int id;
    private String name;
    private String homeStadium;
    private String manager;
    private String coach;
    private String assistantCoach;

    @ManyToOne(cascade = CascadeType.REMOVE)
    private Ligue ligue;
}