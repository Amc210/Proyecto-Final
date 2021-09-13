package MainApp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import MainApp.dto.Grupo;
import MainApp.service.GrupoService;

@RestController
@RequestMapping("/api")
public class GrupoController {

	@Autowired
	GrupoService grupoService;
	
	@GetMapping("/grupos/nombre/{nombre}")
	public List<Grupo> listarNombre(@PathVariable(name="nombre") String nombre) {
	    return grupoService.listarNombre(nombre);
	}
	@GetMapping("/grupos/juego/{juego}")
	public List<Grupo> listarJuego(@PathVariable(name="juego") String juego) {
	    return grupoService.listarNombre(juego);
	}
	@PostMapping("/grupos")
	public Grupo crearGrupo(@RequestBody Grupo grupo) {
		return grupoService.crearGrupo(grupo);
	}
	@DeleteMapping("/grupos/{id}")
	public void deleteGrupo(@PathVariable(name="id")Integer id) {
		grupoService.deleteGrupo(id);
	}
}
