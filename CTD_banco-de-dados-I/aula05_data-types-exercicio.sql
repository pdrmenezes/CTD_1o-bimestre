/*
Defina os tipos de dados para os atributos das entidades
*/

-- USUARIOS
nome VARCHAR(50)
sobrenome VARCHAR(50)
email VARCHAR(50)
senha CHAR(10)
categoria VARCHAR(20)

-- CURSO
nome VARCHAR(50)
data_inicio DATE
data_fim DATE

-- MATERIAS
titulo VARCHAR(50)
descricao TEXT
imagem VARCHAR(200)
data_inicio DATE
data_fim DATE
capacidade_maxima INT