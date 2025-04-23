package com.ParcialProgramacionMovil.ProgramacionMovilP.controller;

import com.ParcialProgramacionMovil.ProgramacionMovilP.entity.Tables;
import com.ParcialProgramacionMovil.ProgramacionMovilP.iservice.ITablesService;

public class TablesController extends  ABaseController <Tables, ITablesService> {

    public TablesController(ITablesService service) {
        super(service, "Mesas");
    }

    @Override
    public String getBasePath() {
        return "";
    }

    @Override
    public String getBasePathWithId(Long id) {
        return "";
    }

    @Override
    public String getBasePathWithId(String id) {
        return "";
    }

    // Implementación de métodos específicos para la entidad Tables si es necesario
}
