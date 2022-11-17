CREATE DATABASE DHTube;

USE DHTube;

CREATE TABLE pais(
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100)
);
    
CREATE TABLE avatar(
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(45),
    url_imagem VARCHAR(100)
);

CREATE TABLE usuario(
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(45),
    email VARCHAR(45),
    senha VARCHAR(45),
    data_nascimento DATETIME,
    cep VARCHAR(45),
    pais_id INT,
    FOREIGN KEY(pais_id) REFERENCES pais(id),
    avatar_id INT,
    FOREIGN KEY(avatar_id) REFERENCES avatar(id)
);

CREATE TABLE playlist(
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(45),
    data_criacao DATETIME,
    cep VARCHAR(45),
    privado SMALLINT,
    usuario_id INT,
    FOREIGN KEY(usuario_id) REFERENCES usuario(id)
);

CREATE TABLE canal(
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    descricao TEXT,
    data_criacao DATETIME,
    usuario_id INT,
    FOREIGN KEY(usuario_id) REFERENCES usuario(id)
);

CREATE TABLE video(
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
titulo VARCHAR(100),
descricao TEXT,
tamanho DOUBLE,
nome_arquivo VARCHAR(100),
duracao DOUBLE,
imagem VARCHAR(100),
qtd_reproducoes INT,
qtd_likes INT,
qtd_dislikes INT,
privado SMALLINT,
data_publicacao DATETIME,
id_usuario INT,
FOREIGN KEY(id_usuario) REFERENCES usuario(id)
);

CREATE TABLE playlist_video(
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    video_id INT,
    FOREIGN KEY (video_id) REFERENCES video(id),
    playlist_id INT,
    FOREIGN KEY (playlist_id) REFERENCES playlist(id)
);