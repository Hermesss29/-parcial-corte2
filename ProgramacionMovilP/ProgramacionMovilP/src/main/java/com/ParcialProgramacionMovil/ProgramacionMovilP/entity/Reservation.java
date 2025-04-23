package com.ParcialProgramacionMovil.ProgramacionMovilP.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table(name = "reservas")
public class Reservation extends ABaseEntity{

    @Column(nullable = false , length = 20)
    private String hour;

    @Column(nullable = false , length = 20, unique = true)
    private String date;



    public String getHour() {
        return hour;
    }

    public void setHour(String hour) {
        this.hour = hour;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }


}
