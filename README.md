sofea-bower

Criando uma aplicação pelo gerenciador de dependencia Bower, AngularJs SOFEA (MV*whatever), consumindo serviço REST do NodeJs

@Lembrando que a index.html deve ficar no root do projeto

#Comando para iniciar C:\xampp\htdocs\github\sofea-bower>bower init

? name sofea-bower

? description API com gerenciador bower com Angular

? main file

? keywords angularjs

? authors oceancortez

? license MIT

? homepage https://github.com/oceancortez/sofea-bower

? set currently installed components as dependencies? Yes

? add commonly ignored files to ignore list? Yes

? would you like to mark this package as private which prevents it from being

? would you like to mark this package as private which prevents it from being

cidentally published to the registry? Yes

{

name: 'sofea-bower',

homepage: 'https://github.com/oceancortez/sofea-bower',

authors: [

'oceancortez'
],

description: 'API com gerenciador bower com Angular',

main: '',

keywords: [

'angularjs'
],

license: 'MIT',

private: true,

ignore: [

'**/.*',

'node_modules',

'bower_components',

'test',

'tests'
]

}

? Looks good? Yes

#Commands -- update no bower npm -i -g bower

-- search any package

 bower search angularjs

-- install and save any package


 bower install angular#1.6.2 --save

bower install angular-mocks#1.6.2

-- desisntalando uma dependencia

 bower uninstall xxxx

-- forçando o bower a installar ultima versao de alguma dependencia com confilito


bower install -g --force-latest

-- Save one dependency


bower install angular-loading-bar --save