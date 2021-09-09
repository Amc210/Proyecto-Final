package MainApp.dto;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="juegos")
public class Juego {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column (name="id_juego")
	private int id;
	@Column(name="nombre")
	private String nombre;
	@Column(name="imagen_juego")
	private String imagen;
	
	@OneToMany
	@JoinColumn(name = "id_grupo")
	private List<Grupo> grupo;
	
	// Constructores
	public Juego() {
		
	}

	public Juego(int id, String nombre, String imagen, List<Grupo> grupo) {
		super();
		this.id = id;
		this.nombre = nombre;
		this.imagen = imagen;
		this.grupo = grupo;
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

	public String getImagen() {
		return imagen;
	}

	public void setImagen(String imagen) {
		this.imagen = imagen;
	}

	@JsonIgnore
	@OneToMany(fetch = FetchType.LAZY, mappedBy = "Grupo")
	public List<Grupo> getGrupo() {
		return grupo;
	}

	public void setGrupo(List<Grupo> grupo) {
		this.grupo = grupo;
	}

	// ToString
	@Override
	public String toString() {
		return "Juego [id=" + id + ", nombre=" + nombre + ", imagen=" + imagen + "]";
	}
	
	
}
