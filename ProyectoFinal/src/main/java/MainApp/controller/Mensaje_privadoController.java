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

import MainApp.dto.Mensaje_privado;
import MainApp.service.Mensaje_privadoService;


@RestController
@RequestMapping("/api")
public class Mensaje_privadoController {

	@Autowired
	Mensaje_privadoService mensaje_privadoService;
	
	@GetMapping("/mensajes_privados")
	public List<Mensaje_privado> listarMensajes() {
		// TODO Auto-generated method stub
		return mensaje_privadoService.listarMensaje_privados();
	}
	

	@PostMapping("/mensajes_privados")
	public Mensaje_privado insertarMensaje(@RequestBody Mensaje_privado mensaje_privado) {
		return mensaje_privadoService.insertarMensaje_privado(mensaje_privado);
	}
	
	@DeleteMapping("/mensajes_privados/{id}")
	public void deleteMensaje(@PathVariable(name="id")Integer id) {
		mensaje_privadoService.deleteMensaje_privado(id);
	}
}