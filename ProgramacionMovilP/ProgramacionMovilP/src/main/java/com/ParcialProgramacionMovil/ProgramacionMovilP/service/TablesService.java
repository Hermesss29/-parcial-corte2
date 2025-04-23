package com.ParcialProgramacionMovil.ProgramacionMovilP.service;

import com.ParcialProgramacionMovil.ProgramacionMovilP.entity.Tables;
import com.ParcialProgramacionMovil.ProgramacionMovilP.irepository.IBaseRepository;
import com.ParcialProgramacionMovil.ProgramacionMovilP.irepository.ITablesRepository;
import com.ParcialProgramacionMovil.ProgramacionMovilP.iservice.ITablesService;
import org.springframework.beans.factory.annotation.Autowired;

public class TablesService extends ABaseService <Tables> implements ITablesService {


    @Autowired
    private ITablesRepository repository;

    @Override
    protected IBaseRepository<Tables, Long> getRepository() {
        return repository;
    }



    // Implementación de métodos específicos para la entidad Tables si es necesario
}
