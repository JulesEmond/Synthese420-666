package com.backend.model;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Data
@SequenceGenerator(name = "observateurSeq", initialValue = 2000, allocationSize = 1000)
public class Observateur implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "observateurSeq")
    private int id;
    private String username;
    private String password;
    private String email;
    private String firstname;
    private String lastname;
}
