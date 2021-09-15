package MainApp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import MainApp.dao.JuegoDAO;
import MainApp.dto.Juego;

@Service
public class JuegoService implements IJuegoService{


	@Autowired
	JuegoDAO JuegoDAO;

	@Override
	public List<Juego> listarJuegos() {
		// TODO Auto-generated method stub
		return JuegoDAO.findAll();
	}
	


}
