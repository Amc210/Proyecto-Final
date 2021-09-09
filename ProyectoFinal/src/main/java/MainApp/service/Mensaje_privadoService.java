package MainApp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import MainApp.dao.Mensaje_privadoDAO;
import MainApp.dto.Mensaje_privado;

@Service
public class Mensaje_privadoService implements IMensaje_privadoService{
	@Autowired
	Mensaje_privadoDAO Mensaje_privadoDAO;
	@Override
	public List<Mensaje_privado> listarMensaje_privados() {
		// TODO Auto-generated method stub
		return Mensaje_privadoDAO.findAll();
	}

	@Override
	public Mensaje_privado insertarMensaje_privado(Mensaje_privado Mensaje_privado) {
		// TODO Auto-generated method stub
		return Mensaje_privadoDAO.save(Mensaje_privado);
	}

	@Override
	public void deleteMensaje_privado(Integer id) {
		// TODO Auto-generated method stub
		Mensaje_privadoDAO.deleteById(id);
		
	}

}
