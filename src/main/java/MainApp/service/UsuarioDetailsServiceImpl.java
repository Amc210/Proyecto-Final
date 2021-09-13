package MainApp.service;

import static java.util.Collections.emptyList;

import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import MainApp.dao.UsuarioDAO;
import MainApp.dto.Usuario;

@Service
public class UsuarioDetailsServiceImpl implements UserDetailsService {

	private UsuarioDAO iUsuarioDAO;

	public UsuarioDetailsServiceImpl(UsuarioDAO iUsuarioDAO) {
		this.iUsuarioDAO = iUsuarioDAO;
	}

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		Usuario usuario = iUsuarioDAO.findByNick(username);
		if (usuario == null) {
			throw new UsernameNotFoundException(username);
		}
		return new User(usuario.getNick(), usuario.getPassword(), emptyList());
	}
	
}
