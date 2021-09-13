package MainApp.dao;


import org.springframework.data.jpa.repository.JpaRepository;

import MainApp.dto.Usuario;

public interface UsuarioDAO  extends JpaRepository<Usuario, Integer>{
	public Usuario findByNick(String nick);
}
