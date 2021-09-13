package MainApp.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import MainApp.dto.Mensaje_privado;

public interface Mensaje_privadoDAO extends JpaRepository<Mensaje_privado, Integer>{

}
