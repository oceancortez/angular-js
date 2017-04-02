# sofea
Arquitetura de Sofware Orientada a Front-end

Baixar o NodeJSPortable, descompactar em algum diretório.

Dentro da pasta \NodeJSPortable, fazer o git clone do projeto sofea

Dentro da pasta /sofea  é onde serão criados os clients de rest.

É necessário instalar o apache na máquina, pode ser o (xamp)


#Configuracao de proxy reverso
LoadModule rewrite_module modules/mod_rewrite.so

LoadModule proxy_module modules/mod_proxy.so

LoadModule proxy_http_module modules/mod_proxy_http.so




# CORS reverse proxy

Location "/express-api"

ProxyPass "http://localhost:9000/api"

ProxyPassReverse "http://localhost:9000/api"

/Location


DocumentRoot "C:/xampp/htdocs"
Directory "C:/xampp/htdocs"


Instrução para a configuração do server express.

No diretório que deseja criar o servidor:

* 1. Execute: npm init
* 1. Execute: npm install express -S 
* 1. Execute: npm install body-parser --save
* 1. Copiar arquivo server.js para o diretório.
* 1. Execute: node server.js 

Configurar apache para proxyreverso.

Usar os htmls no servidor apache.
