package MainApp.dao;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import MainApp.dto.Grupo;

public interface GrupoDAO extends JpaRepository<Grupo, Integer> {
	public List<Grupo> findByNombre(String nombre);
	public List<Grupo> findByJuego(String juego);
}
