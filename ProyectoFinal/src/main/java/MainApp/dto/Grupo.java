package MainApp.dto;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="grupos")
public class Grupo {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@Column(name="nombre")
	private String nombre;
	@Column(name="creador")
	private String creador;
	
	@ManyToOne
	@JoinColumn(name = "juego")
	Juego juego;
	
	@OneToMany
	@JoinColumn(name = "mensaje")
	private List<Mensaje> mensaje;
	
	@OneToMany
	@JoinColumn(name="id")
	private List<Usuario_pertenece_a_grupo> usuario_pertenece_a_grupo;
	
	
	
	// Constructores
	public Grupo() {
		
	}

	public Grupo(int id, String nombre, String creador, Juego juego, List<Mensaje> mensaje, List<Usuario_pertenece_a_grupo> usuario_pertenece_a_grupo) {
		super();
		this.id = id;
		this.nombre = nombre;
		this.creador = creador;
		this.juego = juego;
		this.mensaje = mensaje;
		this.usuario_pertenece_a_grupo = usuario_pertenece_a_grupo;
	}

	// Getters setters
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getCreador() {
		return creador;
	}

	public void setCreador(String creador) {
		this.creador = creador;
	}

	public Juego getJuego() {
		return juego;
	}

	public void setJuego(Juego juego) {
		this.juego = juego;
	}
	@JsonIgnore
	@OneToMany(fetch = FetchType.LAZY, mappedBy = "Mensaje")
	public List<Mensaje> getMensaje() {
		return mensaje;
	}

	public void setMensaje(List<Mensaje> mensaje) {
		this.mensaje = mensaje;
	}

	@JsonIgnore
	@OneToMany(fetch = FetchType.LAZY, mappedBy = "Usuario_pertenece_a_grupo")
	public List<Usuario_pertenece_a_grupo> getUsuario_pertenece_a_grupo() {
		return usuario_pertenece_a_grupo;
	}

	public void setUsuario_pertenece_a_grupo(List<Usuario_pertenece_a_grupo> usuario_pertenece_a_grupo) {
		this.usuario_pertenece_a_grupo = usuario_pertenece_a_grupo;
	}

	// ToString
	@Override
	public String toString() {
		return "Grupo [id=" + id + ", nombre=" + nombre + ", creador=" + creador + ", juego=" + juego + "]";
	}
	
	
}
