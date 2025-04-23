package com.ParcialProgramacionMovil.ProgramacionMovilP.controller;

import com.ParcialProgramacionMovil.ProgramacionMovilP.entity.Reservation;
import com.ParcialProgramacionMovil.ProgramacionMovilP.entity.Tables;
import com.ParcialProgramacionMovil.ProgramacionMovilP.iservice.IReservationService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/reservation")
public class ReservationController extends ABaseController<Reservation, IReservationService> {

    public ReservationController(IReservationService service) {
        super(service, "Reservación");
    }

    @Override
    public String getBasePath() {
        return "/api/reservation";
    }

    @Override
    public String getBasePathWithId(Long id) {
        return "    /api/reservation/" + id;
    }

    @Override
    public String getBasePathWithId(String id) {
        return "   /api/reservation/" + id;
    }
}
