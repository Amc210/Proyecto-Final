package MainApp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import MainApp.dao.UsuarioDAO;
import MainApp.dto.Usuario;
import MainApp.service.UsuarioService;

@RestController
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST,RequestMethod.PUT,RequestMethod.DELETE})
@RequestMapping("/api")
public class UsuarioController {
	@Autowired
	UsuarioService UsuarioService;
	
	private BCryptPasswordEncoder bCryptPasswordEncoder;
	
	public UsuarioController(BCryptPasswordEncoder bCryptPasswordEncoder) {
		this.bCryptPasswordEncoder = bCryptPasswordEncoder;
	}

	@GetMapping("/usuarios/nick/{nick}")
	public Usuario listarNick(@PathVariable(name="nick") String nick) {
	    return UsuarioService.listarNick(nick);
	}
	
	// Guardar usuarios -> Cuidado con user.setRole(String);
	
	@PostMapping("/usuarios")
	public Usuario saveUsuario(@RequestBody Usuario user) {
		user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
		return UsuarioService.guardarUsuario(user);
	}

	@GetMapping("/usuarios")
	public List<Usuario> listarUsuarios() {
		return UsuarioService.listarUsuarios();
	}
	
	@GetMapping("/amigos")
	public List<Usuario> listarAmigos() {
		return UsuarioService.listarAmigos();
	}
	
	@PostMapping("/amigos")
	public Usuario insertarAmigo(Usuario usuario) {
		return UsuarioService.insertarAmigo(usuario);
	}
	
	@DeleteMapping("/amigos/{id}")
	public void deleteAmigo(@PathVariable(name="id")Integer id) {
		UsuarioService.deleteAmigo(id);
	}
}
