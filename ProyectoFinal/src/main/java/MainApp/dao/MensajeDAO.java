package MainApp.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import MainApp.dto.Mensaje;

public interface MensajeDAO extends JpaRepository<Mensaje, Integer>{

}
