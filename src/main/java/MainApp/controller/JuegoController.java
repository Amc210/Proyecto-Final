package MainApp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import MainApp.dto.Juego;
import MainApp.service.JuegoService;

@RestController
@RequestMapping("/api")

public class JuegoController {
	
	@Autowired
	JuegoService juegoService;
	
	@GetMapping("/juegos")
	public List<Juego> listarJuegos(){
		return juegoService.listarJuegos();
	}

}
