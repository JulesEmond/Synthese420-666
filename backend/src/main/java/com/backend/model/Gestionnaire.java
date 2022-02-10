package com.backend.model;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Data
@SequenceGenerator(name = "gestionSeq", initialValue = 1000, allocationSize = 1000)
public class Gestionnaire implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "gestionSeq")
    private int id;
    private String username;
    private String password;
    private String email;
    private String phoneNumber;
    private String firstname;
    private String lastname;
}
