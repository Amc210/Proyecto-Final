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
@Table(name="mensajes_privados")
public class Mensaje_privado {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column (name="id_mensaje_privado")
	private int id;
	@Column(name="contenido")
	private String contenido;
	@Column(name="timestamp")
	private Date timestamp;
	
	@ManyToOne
	@JoinColumn(name = "id_emisor")
	Usuario usuario_emisor;
	@ManyToOne
	@JoinColumn(name = "id_receptor")
	Usuario usuario_receptor;

	// Constructores
	public Mensaje_privado() {
		
	}

	public Mensaje_privado(int id, String contenido, Date timestamp, Usuario usuario_emisor, Usuario usuario_receptor) {
		super();
		this.id = id;
		this.contenido = contenido;
		this.timestamp = timestamp;
		this.usuario_emisor = usuario_emisor;
		this.usuario_receptor = usuario_receptor;
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

	public Usuario getUsuario_emisor() {
		return usuario_emisor;
	}

	public void setUsuario_emisor(Usuario usuario_emisor) {
		this.usuario_emisor = usuario_emisor;
	}

	public Usuario getUsuario_receptor() {
		return usuario_receptor;
	}

	public void setUsuario_receptor(Usuario usuario_receptor) {
		this.usuario_receptor = usuario_receptor;
	}

	// ToString
	@Override
	public String toString() {
		return "Mensaje_privado [id=" + id + ", contenido=" + contenido + ", timestamp=" + timestamp
				+ ", usuario_emisor=" + usuario_emisor + ", usuario_receptor=" + usuario_receptor + "]";
	}
	
	
}
