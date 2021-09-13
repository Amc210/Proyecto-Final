package MainApp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import MainApp.dto.Grupo;
import MainApp.dao.GrupoDAO;

@Service
public class GrupoService implements IGrupoService{

	@Autowired
	GrupoDAO GrupoDAO;
	
	@Override
	public List<Grupo> listarNombre(String nombre) {
		// TODO Auto-generated method stub
		return GrupoDAO.findByNombre(nombre);
	}

	@Override
	public List<Grupo> listarJuego(String juego) {
		// TODO Auto-generated method stub
		return GrupoDAO.findByJuego(juego);
	}

	@Override
	public Grupo crearGrupo(Grupo grupo) {
		// TODO Auto-generated method stub
		return GrupoDAO.save(grupo);
	}

	@Override
	public void deleteGrupo(Integer id) {
		// TODO Auto-generated method stub
		GrupoDAO.deleteById(id);
	}

}
