USE EMarket;

-- 3

DELIMITER $$
CREATE PROCEDURE sp_num_clientes_pais(IN nome_pais VARCHAR(50), OUT num_clientes INT)
BEGIN
	SELECT count(*) INTO num_clientes FROM Clientes
    WHERE Pais = nome_pais;
END $$
DELIMITER ;

CALL sp_num_clientes_pais('Portugal', @quantidade);
SELECT @quantidade;

-- exemplo com INOUT
DELIMITER $$
CREATE PROCEDURE sp_preco(INOUT valor INT, IN id INT)
BEGIN
	UPDATE DetalheFatura
    SET PrecoUnitario = PrecoUnitario + valor INTO valor
    WHERE FaturaId = id;
END $$
DELIMITER ;

CALL sp_preco(@preco);
SELECT @preco;