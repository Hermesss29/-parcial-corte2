package com.ParcialProgramacionMovil.ProgramacionMovilP.irepository;

import com.ParcialProgramacionMovil.ProgramacionMovilP.entity.Reservation;

public interface IReservationRepository extends IBaseRepository<Reservation, Long> {
    // Custom query methods can be defined here if needed
    // For example:
    // List<Reservation> findByDate(Date date);
}
