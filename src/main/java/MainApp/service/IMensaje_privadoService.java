package MainApp.service;

import java.util.List;

import MainApp.dto.Mensaje_privado;

public interface IMensaje_privadoService {

	public List<Mensaje_privado> listarMensaje_privados();
	public Mensaje_privado insertarMensaje_privado(Mensaje_privado Mensaje_privado);
	public void deleteMensaje_privado(Integer id);
}
