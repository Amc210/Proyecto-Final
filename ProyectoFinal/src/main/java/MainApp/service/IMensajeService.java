package MainApp.service;

import java.util.List;

import MainApp.dto.Mensaje;

public interface IMensajeService {

	public List<Mensaje> listarMensajes();
	public Mensaje insertarMensaje(Mensaje mensaje);
	public void deleteMensaje(Integer id);
}
