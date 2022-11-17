-- CONCAT: concatena colunas diferentes: SELECT CONCAT(first_name, ' ', last_name) AS 'nome completo' FROM actors

-- COALESCE: substitui o valor padrão se a busca retornar algum resultado nulo: SELECT nome, coalesce(empresa, "Não informada") FROM Alunos ;

-- DATEDIFF: A diferença int entre startdate e enddate expressa no limite definido por datepart. Por exemplo, SELECT DATEDIFF(day, '2036-03-01', '2036-02-28'); retorna-2. Esse caso significa que, se começarmos com startdate '2036-03-01' e, em seguida, contarmos -2 dias, chegaremos ao enddate '2036-02-28'.

-- TIMEDIFF: A diferença entre dois tempos de mesmo padrão: SELECT TIMEDIFF("13:10:11", "13:10:10");

-- EXTRACT: extrai uma parte específica e determinada de uma data: SELECT EXTRACT(MONTH FROM "2017-06-15");

-- REPLACE: substitui todas as ocorrências de uma substring (parte de texto) de uma string, com o parâmetro/texto definido: SELECT REPLACE(coluna, "SQL Tutorial", "SQL", "HTML");

-- DATE_FORMAT: formata uma data de acordo com o parâmetro definido: SELECT DATE_FORMAT("2017-06-15", "%W %M %e %Y");

-- DATE_ADD: adiciona um intervalo de tempo à data selecionada e retorna o valor final: SELECT DATE_ADD("2017-06-15", INTERVAL 10 DAY);

-- DATE_SUB: subtrai o intervalo de tempo determinado: SELECT DATE_SUB("2017-06-15", INTERVAL 10 DAY);

-- CASE: passa pelos valores e retorna valores específicos quando a condição é cumprida:
SELECT OrderID, Quantity,
CASE
    WHEN Quantity > 30 THEN "The quantity is greater than 30"
    WHEN Quantity = 30 THEN "The quantity is 30"
    ELSE "The quantity is under 30"
END
FROM OrderDetails;