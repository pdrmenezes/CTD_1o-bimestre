/*
DATA TYPES
*/

-- TINYINT
-- -128 a 128 // 0 a 255

-- SMALLINT
-- -32768 a 32767 // 0 a 65535

-- MEDIUMINT
-- -8388608 a 8388607 // 0 a 16777215

-- INT
-- -2147483648 a 2147483648 // 0 a 4294967295

-- BIGINT
-- -9223372036854775808 a 9223372036854775807 // 0 a 18446744073709551615

-- FLOAT
-- -3.402823466E+38 a -1.175494351E-38 // 0 // 1.175494351E-38 a 3.402823466E+38

-- DOUBLE
-- -1.7976931348623157E+308 a -2.2250738585072014E-308 // 0 // 2.2250738585072014E-308 a 1.7976931348623157E+308

-- DECIMAL (x, y)
-- x = quantidade total de dígitos, precisão (máx = 65)
-- y = quantidade de dígitos após a vírgula (máx = 30)
-- separador de casas decimais é o ponto "."

-- BOOLEAN (true || false)
-- para um melhor desempenho, recomenda-se usar tinyint ou bit e 0 pra false e 1 pra true 

/*
DATE TYPES
*/

-- DATE
-- format: YYYY-MM-DD

-- TIME
-- format: HH:MM:SS

-- DATETIME
-- format: YYYY-MM-DD HH:MM:SS

/*
TEXT TYPES
*/

-- CHAR(x)
-- x = quantidade exata de caracteres, sempre

-- VARCHAR(x)
-- x = quantidade máxima de caracteres

-- TEXT
-- dado do tipo texto sem limite de caracteres
-- exemplo: posts de blog