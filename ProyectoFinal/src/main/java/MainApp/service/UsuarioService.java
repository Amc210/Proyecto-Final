package MainApp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import MainApp.dao.UsuarioDAO;
import MainApp.dto.Usuario;

@Service
public class UsuarioService implements IUsuarioService {
	@Autowired
	UsuarioDAO UsuarioDAO;
	
	@Override
	public List<Usuario> listarUsuarios() {
		return UsuarioDAO.findAll();
	}

	@Override
	public List<Usuario> listarAmigos() {
		// TODO Auto-generated method stub
		return UsuarioDAO.findAll();
	}

	@Override
	public Usuario insertarAmigo(Usuario usuario) {
		// TODO Auto-generated method stub
		return UsuarioDAO.save(usuario);
	}

	@Override
	public void deleteAmigo(Integer id) {
		// TODO Auto-generated method stub
		UsuarioDAO.deleteById(id);
	}
}
