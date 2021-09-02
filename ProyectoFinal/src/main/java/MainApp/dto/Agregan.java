package MainApp.dto;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="usuario_agrega_amigos")
public class Agregan {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	@Column(name="id_amigo")
	private int id_amigo;
	
	@ManyToOne
	@JoinColumn(name = "id_usuario")
	Usuario usuario;
	
	// Constructores
	public Agregan() {
		
	}

	public Agregan(int id, int id_amigo, Usuario usuario) {
		super();
		this.id = id;
		this.id_amigo = id_amigo;
		this.usuario = usuario;
	}

	// Getters setters
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getId_amigo() {
		return id_amigo;
	}

	public void setId_amigo(int id_amigo) {
		this.id_amigo = id_amigo;
	}

	public Usuario getUsuario() {
		return usuario;
	}

	public void setUsuario(Usuario usuario) {
		this.usuario = usuario;
	}
	
	// ToString

	@Override
	public String toString() {
		return "Agregan [id=" + id + ", id_amigo=" + id_amigo + ", usuario=" + usuario + "]";
	}
}
