package MainApp.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import MainApp.dto.Juego;

public interface JuegoDAO  extends JpaRepository<Juego, Integer> {

}
