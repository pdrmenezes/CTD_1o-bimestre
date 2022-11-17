-- pra precisara as permissões que serão concedidas
USE EMarket; 

-- mostrar todos os usuários existentes no MySQL (5 por padrão)
SELECT user FROM mysql.user;

-- pra criar usuário a sintaxe é 'CREATE USER username@server IDENTIFIED BY 'password';'
CREATE USER pedro@localhost
IDENTIFIED BY '1234';

-- pra verificar as permissões que o usuário tem 'SHOW GRANTS FOR username@server
SHOW GRANTS FOR pedro@localhost;

-- por padrão o usuário só pode visualizar dados, então concedemos novas permissões com 'GRANT 'operação permitida', 'operacao permitida 2' ON dbname.tblname TO username@server'
GRANT SELECT ON EMarket.*
TO pedro@localhost;

-- removendo permissões é exatamente igual à concessão, trocando o GRANT por REVOKE: 'REVOKE 'operação permitida', 'operacao permitida 2' ON EMarket.* FROM username@server'
REVOKE SELECT ON EMarket.*
FROM pedro@localhost;

-- removendo usuários completamente 'DROP USER username@server'
DROP USER pedro@localhost;