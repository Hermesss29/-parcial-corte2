package com.ParcialProgramacionMovil.ProgramacionMovilP.irepository;

import com.ParcialProgramacionMovil.ProgramacionMovilP.entity.Customer;

public interface ICustomerRepository extends IBaseRepository<Customer, Long> {
    // Aquí puedes agregar métodos específicos para la entidad Customer si es necesario
    // Por ejemplo, puedes agregar métodos de búsqueda personalizados o consultas específicas
    // utilizando la sintaxis de Spring Data JPA.
}
