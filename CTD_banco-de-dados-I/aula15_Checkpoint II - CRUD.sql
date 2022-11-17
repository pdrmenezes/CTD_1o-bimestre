-- o banco de dados 'plants' foi pensado para ser um repositório ou enciclopédia de plantas, facilitando o acesso à informação e ao cuidado de plantas em ambiente doméstico. Ele visa:
-- • tornar acessível o conhecimento sobre a nossa flora
-- • estimular o contato com a natureza
-- • encorajar o uso de plantas medicinais como forma complementar de tratamentos
-- • promover o uso consciente de recursos naturais ao reforçar a importância do cultivo de plantas locais

-- Por conceito, cada usuário cria uma conta, um perfil privado e pode adicionar diversas plantas 'favoritas' ao seu repositório para rápida consulta. Cada planta conterá um plantel de informações e poderá estar conectada com artigos esporádicos a respeito de seu uso, história ou curiosidades.

-- CREATE DATABASE: criando o banco de dados 'app_plants' e escolhendo ativá-lo para realizar as operações

CREATE DATABASE app_plants;
USE app_plants;

-- CREATE TABLE: criando as tabelas 'ExternalAccounts', 'Users', 'UserProfile', 'Plants', 'FunFacts', a tabela intermediária 'Users_Plants' e suas colunas com respectivos valores esperados e chaves estrangeiras

CREATE TABLE ExternalAccounts (
	user_ext_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    google_account VARCHAR(50),
    facebook_account VARCHAR(50),
    apple_account VARCHAR(50)
);

CREATE TABLE Users (
	user_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(50),
    `password` VARCHAR(50) NOT NULL,
    user_type VARCHAR(50) NOT NULL,
    user_ext_id INT,
    FOREIGN KEY(user_ext_id) REFERENCES ExternalAccounts(user_ext_id)
);

CREATE TABLE UserProfile (
	userProfile_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    date_of_birth DATE NOT NULL,
    country VARCHAR(50) NOT NULL,
    user_id INT,
    FOREIGN KEY(user_id) REFERENCES Users(user_id)
);

CREATE TABLE Plants (
	plant_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    pop_name VARCHAR(100) NOT NULL,
    scient_name VARCHAR (100),
    family VARCHAR(100) NOT NULL,
    plant_morphology VARCHAR (2000) NOT NULL,
    medicinal_properties VARCHAR(1000) NOT NULL,
    origin VARCHAR(200) NOT NULL,
    watering VARCHAR(100) NOT NULL,
    wood_price VARCHAR (50)
);

CREATE TABLE FunFacts (
	funFact_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(150) NOT NULL,
    published DATETIME NOT NULL,
    content TEXT NOT NULL,
    category VARCHAR(45) NOT NULL,
    plant_id INT,
    FOREIGN KEY(plant_id) REFERENCES Plants(plant_id)
);

CREATE TABLE Users_Plants (
	users_plants_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    FOREIGN KEY(user_id) REFERENCES Users(user_id),
    plant_id INT NOT NULL,
    FOREIGN KEY(plant_id) REFERENCES Plants(plant_id)
);

-- ALTER: alterando o tipo de dado da coluna 'wood_price' na tabela 'Plants' de VARCHAR para INT

ALTER TABLE Plants
MODIFY wood_price INT; 

-- ALTER: excluindo a coluna 'wood_price' da tabela 'Plants' por não fazer sentido no banco de dados desejado

ALTER TABLE Plants
DROP wood_price; 

-- ALTER: adicionando a coluna 'light_time' na tabela 'Plants'

ALTER TABLE Plants
ADD light_time VARCHAR(100) NOT NULL;

-- INSERT: inserindo duas plantas e todas as respectivas colunas à tabela 'Plants'

INSERT INTO Plants (pop_name, scient_name, family, plant_morphology, medicinal_properties, origin, watering, light_time)
VALUES ('Orquídia-grapete', 'Spathoglottis unguiculata', 'Orchidaceae', '40cm. Flores de 3cm. Nativa de vários países no sudeste asiático e sudoeste do Oceano Pacífico, a Spathoglottis unguiculata é famosa por seu perfume, que lembra o cheiro de uva, daí seus nomes populares.', 'Aromatizante', 'Malásia, Nova Guiné, Filipinas e Indonésia', 'diária', 'médio'), ('Jabuticabeira', 'Plinia cauliflora', 'Myrtaceae', 'Trata-se de uma árvore de porte médio, podendo chegar até 9 metros de altura, dependendo da espécie. Mas, para plantar as sementes e vê-la dar frutos, é preciso ter paciência. Algumas delas podem levar entre 10 e 15 anos para frutificar! A jabuticabeira pode ser cultivada em pomares, quintais, e até mesmo em vasos, como planta ornamental.', 'Anti-oxidante', 'Brasil - Mata atlântica', '2x/dia', 'médio');

-- INSERT: inserindo dois artigos e todas as respectivas colunas à tabela 'FunFacts'

INSERT INTO FunFacts(title, published, content, category, plant_id)
VALUES ('Orquídeas são difíceis de criar?', '2021-09-17 17:00:00', 'A Orquídea-grapete faz grandes touceiras em encostas rochosas e clareiras de florestas, lugares onde há alta umidade e incidência direta dos raios de sol durante quase o ano todo. Os numerosos botões surgem numa haste que pode alcançar 1 metro de altura, e se abrem em sequência, uns cinco ou seis ao mesmo tempo, ao longo do ano todo, com mais frequência na primavera e no verão.', 'jokes', '1'), ('Artigo rascunho', '2020-02-12 17:00:00', 'texto teste', 'history', '2');

-- UPDATE: atualizando o 'light_time' dos itens com ids '1' e '2' para 'pleno'

UPDATE Plants
SET light_time = 'pleno'
WHERE plant_id = 1 OR plant_id = 2;

-- UPDATE: atualizando o 'title' do artigo com id '1' para 'Orquídeas o ano todo' e a 'category' para 'history'

UPDATE FunFacts
SET 
title = 'Orquídeas o ano todo',
category = 'history'
WHERE funFact_id = 1;

-- SELECT: selecionando todos os itens da tabela 'Plants' e exibindo as colunas 'pop_name', 'scient_name' e 'watering'

SELECT pop_name, scient_name, watering FROM Plants;

-- SELECT: selecionando todos os itens da tabela 'Plants', exibindo a colunas 'pop_name' e exibindo todos os artigos que existem na tabela 'FunFacts' conectados a um item na tabela 'Plants' e exibindo as colunas 'title' e 'content'

SELECT Plants.pop_name, FunFacts.title, FunFacts.content
FROM Plants
INNER JOIN FunFacts
ON Plants.plant_id = FunFacts.plant_id;

-- DELETE: excluindo o artigo de id '2' na tabela 'FunFacts'

DELETE FROM FunFacts WHERE funFact_id = 2;