package MainApp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import MainApp.dao.MensajeDAO;
import MainApp.dto.Mensaje;

@Service
public class MensajeService implements IMensajeService{
	@Autowired
	MensajeDAO MensajeDAO;
	@Override
	public List<Mensaje> listarMensajes() {
		// TODO Auto-generated method stub
		return MensajeDAO.findAll();
	}

	@Override
	public Mensaje insertarMensaje(Mensaje mensaje) {
		// TODO Auto-generated method stub
		return MensajeDAO.save(mensaje);
	}

	@Override
	public void deleteMensaje(Integer id) {
		// TODO Auto-generated method stub
		MensajeDAO.deleteById(id);
		
	}

}
