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

import MainApp.dto.Mensaje;
import MainApp.service.MensajeService;

@RestController
@RequestMapping("/api")
public class MensajeController {

	@Autowired
	MensajeService mensajeService;
	
	@GetMapping("/mensajes")
	public List<Mensaje> listarMensajes() {
		// TODO Auto-generated method stub
		return mensajeService.listarMensajes();
	}
	

	@PostMapping("/mensajes")
	public Mensaje insertarMensaje(@RequestBody Mensaje mensaje) {
		return mensajeService.insertarMensaje(mensaje);
	}
	
	@DeleteMapping("/mensajes/{id}")
	public void deleteMensaje(@PathVariable(name="id")Integer id) {
		mensajeService.deleteMensaje(id);
	}
}
