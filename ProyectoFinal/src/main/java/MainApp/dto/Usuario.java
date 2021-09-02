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
@Table(name="usuario")
public class Usuario {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	@Column(name="nick")
	private String nick;
	@Column(name="nombre")
	private String nombre;
	@Column(name="tipo")
	private int tipo;
	@Column(name="email")
	private String email;
	
	@OneToMany
	@JoinColumn(name="id")
	private List<Usuario_pertenece_a_grupo> usuario_pertenece_a_grupo;
	
	@OneToMany
	@JoinColumn(name = "usuario_agrega_amigos")
	private List<Agregan> agregan;
	
	@OneToMany
	@JoinColumn(name = "mensaje_privado")
	private List<Mensaje_privado> mensaje_privado;
	
	
	// Construcotres
	public Usuario() {
		
	}
	
	public Usuario(int id, String nick, String nombre, int tipo, String email,
			List<Usuario_pertenece_a_grupo> usuario_pertenece_a_grupo, List<Agregan> agregan,
			List<Mensaje_privado> mensaje_privado) {
		super();
		this.id = id;
		this.nick = nick;
		this.nombre = nombre;
		this.tipo = tipo;
		this.email = email;
		this.usuario_pertenece_a_grupo = usuario_pertenece_a_grupo;
		this.agregan = agregan;
		this.mensaje_privado = mensaje_privado;
	}
	
	// Getters setters
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getNick() {
		return nick;
	}

	public void setNick(String nick) {
		this.nick = nick;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public int getTipo() {
		return tipo;
	}

	public void setTipo(int tipo) {
		this.tipo = tipo;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	@JsonIgnore
	@OneToMany(fetch = FetchType.LAZY, mappedBy = "Usuario_pertenece_a_grupo")
	public List<Usuario_pertenece_a_grupo> getUsuario_pertenece_a_grupo() {
		return usuario_pertenece_a_grupo;
	}

	public void setUsuario_pertenece_a_grupo(List<Usuario_pertenece_a_grupo> usuario_pertenece_a_grupo) {
		this.usuario_pertenece_a_grupo = usuario_pertenece_a_grupo;
	}
	@JsonIgnore
	@OneToMany(fetch = FetchType.LAZY, mappedBy = "Agregan")
	public List<Agregan> getAgregan() {
		return agregan;
	}

	public void setAgregan(List<Agregan> agregan) {
		this.agregan = agregan;
	}
	@JsonIgnore
	@OneToMany(fetch = FetchType.LAZY, mappedBy = "Mensaje_privado")
	public List<Mensaje_privado> getMensaje_privado() {
		return mensaje_privado;
	}

	public void setMensaje_privado(List<Mensaje_privado> mensaje_privado) {
		this.mensaje_privado = mensaje_privado;
	}
	
	// ToString
	@Override
	public String toString() {
		return "Usuario [id=" + id + ", nick=" + nick + ", nombre=" + nombre + ", tipo=" + tipo + ", email=" + email
				+ ", usuario_pertenece_a_grupo=" + usuario_pertenece_a_grupo + ", agregan=" + agregan
				+ ", mensaje_privado=" + mensaje_privado + "]";
	}
}
