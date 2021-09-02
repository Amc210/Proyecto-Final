package MainApp.dto;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;


@Entity
@Table(name="mensajes")
public class Mensaje {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@Column(name="contenido")
	private String contenido;
	@Column(name="timestamp")
	private Date timestamp;
	
	@ManyToOne
	@JoinColumn(name = "grupo")
	Grupo grupo;
	
	// Contructores
	public Mensaje() {
		
	}

	public Mensaje(int id, String contenido, Date timestamp, Grupo grupo) {
		super();
		this.id = id;
		this.contenido = contenido;
		this.timestamp = timestamp;
		this.grupo = grupo;
	}

	// Getters setters
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getContenido() {
		return contenido;
	}

	public void setContenido(String contenido) {
		this.contenido = contenido;
	}

	public Date getTimestamp() {
		return timestamp;
	}

	public void setTimestamp(Date timestamp) {
		this.timestamp = timestamp;
	}

	public Grupo getGrupo() {
		return grupo;
	}

	public void setGrupo(Grupo grupo) {
		this.grupo = grupo;
	}

	// ToString
	@Override
	public String toString() {
		return "Mensaje [id=" + id + ", contenido=" + contenido + ", timestamp=" + timestamp + ", grupo=" + grupo + "]";
	}
	
	
}