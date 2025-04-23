package com.ParcialProgramacionMovil.ProgramacionMovilP.controller;

import com.ParcialProgramacionMovil.ProgramacionMovilP.entity.Customer;
import com.ParcialProgramacionMovil.ProgramacionMovilP.iservice.ICustomerService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api/cliente")
public class CustomerController extends ABaseController <Customer, ICustomerService> {

    public CustomerController(ICustomerService service) {
        super(service, "Cliente");
    }

    @Override
    public String getBasePath() {
        return "/api/cliente";
    }

    @Override
    public String getBasePathWithId(Long id) {
        return "/api/cliente/" + id;
    }

    @Override
    public String getBasePathWithId(String id) {
        return "/api/cliente/" + id;
    }
}
