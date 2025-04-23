package com.ParcialProgramacionMovil.ProgramacionMovilP.service;

import com.ParcialProgramacionMovil.ProgramacionMovilP.entity.Customer;
import com.ParcialProgramacionMovil.ProgramacionMovilP.irepository.IBaseRepository;
import com.ParcialProgramacionMovil.ProgramacionMovilP.irepository.ICustomerRepository;
import com.ParcialProgramacionMovil.ProgramacionMovilP.iservice.ICustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class CustomerService extends ABaseService<Customer> implements ICustomerService {

  @Autowired
    private ICustomerRepository repository;

    @Override

    protected IBaseRepository<Customer, Long> getRepository() {
        return repository;
    }



    // Implementación de métodos específicos para la entidad Customer si es necesario
}
