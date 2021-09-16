/* SQL corregido a fecha 16 sept*/

create database LFG;
use LFG;

create table juegos (id_juego int primary key auto_increment not null, nombre varchar(100) not null, imagen_juego varchar(255) not null);
create table grupos (id_grupo int primary key auto_increment not null, nombre varchar(40) not null, creador varchar(40) not null, tipo int not null, descripcion varchar(255) not null, id_juego int not null, foreign key (id_juego) REFERENCES juegos (id_juego) on delete cascade on update cascade);

create table usuarios (id_usuario int primary key auto_increment not null, nick varchar(20) not null, nombre varchar(40) not null, email varchar(50) not null);

create table mensajes_privados (id_mensaje_privado int primary key auto_increment not null, contenido varchar(255) not null, timestamp timestamp not null, id_emisor int not null, id_receptor int not null, foreign key (id_emisor) REFERENCES usuarios(id_usuario) on delete cascade on update cascade, foreign key (id_receptor) REFERENCES usuarios(id_usuario) on delete cascade on update cascade);

create table mensajes (id_mensaje int primary key auto_increment not null, contenido varchar(255) not null, timestamp timestamp not null, id_grupo int not null, foreign key (id_grupo) REFERENCES grupos(id_grupo) on delete cascade on update cascade);

create table usuarios_agregan_amigos (id_usuario_agrega_amigos int primary key auto_increment not null, id_usuario int not null, id_amigo int not null, foreign key (id_usuario) REFERENCES usuarios (id_usuario), foreign key (id_amigo) REFERENCES usuarios(id_usuario) on delete cascade on update cascade);

create table usuarios_pertenecen_a_grupos (id_usuario_grupo int primary key auto_increment not null, id_grupo int not null, id_usuario int not null, foreign key (id_grupo) REFERENCES grupos (id_grupo), foreign key (id_usuario) REFERENCES usuarios(id_usuario) on delete cascade on update cascade);
