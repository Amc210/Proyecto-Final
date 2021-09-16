package MainApp.service;

import java.util.List;
import java.util.Optional;

import MainApp.dto.Grupo;

public interface IGrupoService {

	public List<Grupo> listarNombre(String nombre);//Listar Grupos por campo nombre
	public List<Grupo> listarJuego(String juego);//Listar Grupos por campo juego
	public Grupo crearGrupo(Grupo grupo);
	public void deleteGrupo(Integer id);
	public List<Grupo> listarGrupos();
	public Optional<Grupo> listarGrupo(Integer id);
}
