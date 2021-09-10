package MainApp.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import MainApp.dto.Usuario_pertenece_a_grupo;
import MainApp.dao.Usuario_pertenece_a_grupoDAO;

@Service
public class Usuario_pertenece_a_grupoService implements IUsuario_pertenece_a_grupoService{
	@Autowired
	Usuario_pertenece_a_grupoDAO Usuario_pertenece_a_grupoDAO;
	@Override
	public Usuario_pertenece_a_grupo unirseGrupo(Usuario_pertenece_a_grupo Usuario_pertenece_a_grupo) {
		// TODO Auto-generated method stub
		return Usuario_pertenece_a_grupoDAO.save(Usuario_pertenece_a_grupo);
	}

	@Override
	public void dejarGrupo(Integer id) {
		// TODO Auto-generated method stub
		Usuario_pertenece_a_grupoDAO.deleteById(id);
	}

}
