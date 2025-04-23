package com.ParcialProgramacionMovil.ProgramacionMovilP.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table(name = "mesas")
public class Tables extends ABaseEntity{
    @Column(nullable = false , length = 20)
    private String id;

    @Column(nullable = false)
    private boolean state;

}
