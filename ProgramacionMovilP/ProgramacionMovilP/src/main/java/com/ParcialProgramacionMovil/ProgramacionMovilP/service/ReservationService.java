package com.ParcialProgramacionMovil.ProgramacionMovilP.service;


import com.ParcialProgramacionMovil.ProgramacionMovilP.entity.Reservation;
import com.ParcialProgramacionMovil.ProgramacionMovilP.irepository.IBaseRepository;
import com.ParcialProgramacionMovil.ProgramacionMovilP.irepository.IReservationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.ParcialProgramacionMovil.ProgramacionMovilP.iservice.IReservationService;

@Service
public class ReservationService extends ABaseService<Reservation> implements IReservationService {

    @Autowired
    private IReservationRepository repository;

    @Override
    protected IBaseRepository<Reservation, Long> getRepository() {
        return repository;
    }



}