package MainApp.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import MainApp.dto.Usuario_pertenece_a_grupo;
import MainApp.service.Usuario_pertenece_a_grupoService;

@RestController
@RequestMapping("/api")
public class Usuario_pertenece_a_grupoController {

	@Autowired
	Usuario_pertenece_a_grupoService usuario_pertenece_a_grupoService;
	
	@PostMapping("/usuario_a_grupo")
	public Usuario_pertenece_a_grupo unirseGrupo(@RequestBody Usuario_pertenece_a_grupo usuario_pertenece_a_grupo) {
		return usuario_pertenece_a_grupoService.unirseGrupo(usuario_pertenece_a_grupo);
	}
	@DeleteMapping("/usuario_a_grupo/{id}")
	public void dejarGrupo(@PathVariable(name="id")Integer id) {
		usuario_pertenece_a_grupoService.dejarGrupo(id);
	}
}
