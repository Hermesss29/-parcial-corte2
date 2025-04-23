package com.ParcialProgramacionMovil.ProgramacionMovilP.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table(name = "Cliente")
public class Customer extends ABaseEntity{

@Column(nullable = false , length = 50)
    private String name;

@Column( nullable = false , length = 50, unique = true)
    private String email;

@Column(nullable = false , length = 50)
    private String phone;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }
}
