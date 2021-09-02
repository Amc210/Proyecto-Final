package MainApp.dto;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="usuario_pertenece_a_grupo")
public class Usuario_pertenece_a_grupo {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@ManyToOne
	@JoinColumn(name = "grupo")
	Grupo grupo;
	
	@ManyToOne
	@JoinColumn(name = "usuario")
	Usuario usuario;
	
	// Constructores
	public Usuario_pertenece_a_grupo() {
		
	}

	public Usuario_pertenece_a_grupo(int id, Grupo grupo, Usuario usuario) {
		super();
		this.id = id;
		this.grupo = grupo;
		this.usuario = usuario;
	}

	// Getters setters
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Grupo getGrupo() {
		return grupo;
	}

	public void setGrupo(Grupo grupo) {
		this.grupo = grupo;
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
		return "Usuario_pertenece_a_grupo [id=" + id + ", grupo=" + grupo + ", usuario=" + usuario + "]";
	}
	
}
