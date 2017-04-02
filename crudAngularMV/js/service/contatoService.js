angular.module('contato')

    .service('contatoService', contatoService);

contatoService.$inject = ['$http'];

function contatoService($http) {

    var service = {
        findAll: findAll,
        findOne: findOne,
        deleteOne: deleteOne,
        saveOrUpdate: saveOrUpdate
    }

    return service;

    function findAll() {
         console.log("Entrou no método = contatoService.findAll ");

         //var response = 

         console.log("Entrou no método = contatoService.findAll ");
        return  $http.get("http://localhost/express-api/contatos",{
            data: ''
        });
         
        
    }

    function findOne(id) {
        console.log("Entrou no método = contatoService.findOne (" + id +")");
        return $http.get("http://localhost/express-api/contato/" + id);
    }

    function deleteOne() {

        return $http.delete("http://localhost/express-api/contato/" + id);
    }

    //TODO Terminar de refatorar
    function saveOrUpdate(contato) {        
            if (contato.id > 0) {
                console.log("Entrou no método = contatoService.save() put ");
                return $http.put("http://localhost/express-api/contato", contato);

            } else {
                console.log("Entrou no método = contatoService.save() post ");
                return $http.post("http://localhost/express-api/contato", contato);
            }

        }

};
