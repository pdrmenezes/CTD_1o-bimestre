CREATE DATABASE spotify;

USE spotify;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    nomeusuario VARCHAR(45),
    data_nac DATE,
    sexo VARCHAR(1),
    email VARCHAR(150),
    senha VARCHAR(45)
);

CREATE TABLE artista (
	id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    nome VARCHAR(45),
    sobrenome VARCHAR(100)
    );
    
CREATE TABLE genero (
	id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    genero VARCHAR(45)
);

CREATE TABLE playlist (
	id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    id_usuario INT NOT NULL,
    FOREIGN KEY (id_usuario) REFERENCES usuario(id),
    titulo VARCHAR(45),
    qtdcancoes INT,
    datacriacao DATETIME
);

CREATE TABLE album (
	id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    titulo VARCHAR(45),
    id_artista INT NOT NULL,
    FOREIGN KEY (id_artista) REFERENCES artista(id)
);

CREATE TABLE cancoes (
	id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    titulo VARCHAR(45),
    duracao TIMESTAMP,
    qtdreproducao INT,
    qtdlikes INT, 
    id_album INT,
    FOREIGN KEY (id_album) REFERENCES album(id)
);

CREATE TABLE playlist_cancao (
	id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    id_cancao INT,
    FOREIGN KEY (id_cancao) REFERENCES cancoes(id),
    id_playlist INT,
    FOREIGN KEY (id_playlist) REFERENCES playlist(id)
);

CREATE TABLE genero_cancao (
	id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    id_cancao INT,
    FOREIGN KEY (id_cancao) REFERENCES cancoes(id),
    id_genero INT,
    FOREIGN KEY (id_genero) REFERENCES genero(id)
);

INSERT INTO usuario (
	nomeusuario,
    data_nac,
    sexo,
    email,
    senha
)	VALUES (
	"pedromenezes",
    "1993-03-30",
    "y",
    "pedrecife@bol.com.br",
    "batmannaocomepicles"
	),
    (
	"laurappn",
    "1993-03-16",
    "z",
    "lauralinda@bol.com.br",
    "laulalaulalaula"
    ),
    (
    "suzzana",
    "1991-01-01",
    "w",
    "suzzinha@zuzzeine.com.br",
    "ohmygosh"
    );


    