package MainApp.service;

import java.util.List;

import MainApp.dto.Juego;

public interface IJuegoService {

//	public List<Grupo> listarJ(String nombre);//Listar Grupos por campo nombre
//	public List<Grupo> listarJuego(String juego);//Listar Grupos por campo juego
//	public Grupo crearGrupo(Grupo grupo);
//	public void deleteGrupo(Integer id);
	public List<Juego> listarJuegos();

}
