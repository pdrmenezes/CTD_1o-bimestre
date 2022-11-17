USE consultorio;

INSERT INTO pacientes(nome, sobrenome)
VALUES ('pedro', 'menezes'), ('machado', 'de assis'), ('lélia', 'gonzalez');

SELECT * FROM pacientes;

INSERT INTO medicos (nome, sobrenome)
VALUES ('doutor', 'frankenstein'), ('doutora', 'ratched');

SELECT * FROM medicos;

UPDATE pacientes
SET nome = 'joaquim maria machado'
WHERE id = 2 and id = 3;

DELETE FROM pacientes
WHERE id = 1;

SELECT * FROM medicos
LIMIT 30
OFFSET 20;