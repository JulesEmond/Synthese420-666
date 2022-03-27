package com.backend.model;


import lombok.Data;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Data
@SequenceGenerator(name = "joueurSeq", initialValue = 5000, allocationSize = 1000)
public class Joueur implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "joueurSeq")
    private int id;
    private String firstName;
    private String lastName;
    private int age;

    @ManyToOne(cascade = CascadeType.REMOVE)
    private Equipe equipe;
}
