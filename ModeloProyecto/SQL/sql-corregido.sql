/* SQL corregido a fecha 1 sept*/
/* Quizá mejor cambiar el nombre a USUARIOS (plural)?*/

create database LFG;
use LFG;

create table juegos (id_juego int primary key auto_increment, nombre varchar(100), imagen_juego varchar(255));
create table grupos (id_grupo int primary key auto_increment, nombre varchar(40), creador varchar(40), id_juego int, foreign key (id_juego) REFERENCES juegos (id_juego));

create table usuario (id_usuario int primary key auto_increment, nick varchar(20), nombre varchar(40), tipo int, email varchar(50), id_amigo int, 
foreign key (id_amigo) REFERENCES usuario(id_usuario));

create table mensaje_privado (id_mensaje_privado int primary key auto_increment, contenido varchar(255), timestamp timestamp, id_emisor int, id_receptor int, key (id_emisor), key (id_receptor), foreign key (id_emisor) REFERENCES usuario(id_usuario), foreign key (id_receptor) REFERENCES usuario(id_usuario));

create table mensaje (id_mensaje int primary key auto_increment, contenido varchar(255), timestamp timestamp, id_grupo int, key (id_grupo), foreign key (id_grupo) REFERENCES grupos(id_grupo));

create table usuario_agrega_amigos (id_usuario_agrega_amigos int primary key auto_increment, id_usuario int, id_amigo int, foreign key (id_usuario) REFERENCES usuario (id_usuario), foreign key (id_amigo) REFERENCES usuario(id_usuario));

create table usuario_pertenece_a_grupo (id_usuario_grupo int primary key auto_increment, id_grupo int, id_usuario int, foreign key (id_grupo) REFERENCES grupos (id_grupo), foreign key (id_usuario) REFERENCES usuario (id_usuario));
