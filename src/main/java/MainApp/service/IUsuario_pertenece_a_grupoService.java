package MainApp.service;

import MainApp.dto.Usuario_pertenece_a_grupo;

public interface IUsuario_pertenece_a_grupoService {

	public Usuario_pertenece_a_grupo unirseGrupo(Usuario_pertenece_a_grupo mensaje);
	public void dejarGrupo(Integer id);
}
