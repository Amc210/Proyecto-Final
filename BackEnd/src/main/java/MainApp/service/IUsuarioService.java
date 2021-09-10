package MainApp.service;

import java.util.List;

import MainApp.dto.Usuario;

public interface IUsuarioService {

	public List<Usuario> listarUsuarios();
	public List<Usuario> listarAmigos();
	public Usuario insertarAmigo(Usuario usuario);
	public void deleteAmigo(Integer id);
}
