angular.module('contato').factory('contatoFactory', ["$http",  function ($http) {
                    return {
                        findAll: function (success, fail) {
                            $http.get("http://localhost/express-api/contatos").then(success, fail);
                        },
                        findOne: function (id, success, fail) {
                            $http.get("http://localhost/express-api/contato/" + id).then(success, fail);
                        },
                        deleteOne: function (id, success, fail) {
                            $http.delete("http://localhost/express-api/contato/" + id).then(success, fail);
                        },
                        save: function (contato, success, fail) {
                            if (contato.id > 0) {
                                $http.put("http://localhost/express-api/contato", contato).then(success, fail);
                            } else {
                                $http.post("http://localhost/express-api/contato", contato).then(success, fail);
                            }
                        },
                        calcAge: function (item) {
                            if (item.dtNascimento) {
                                var now = new Date();
                                var birth = new Date(item.dtNascimento);
                                if ((now.getMonth() == birth.getMonth() && now.getDate() < birth.getDate()) || (now.getMonth() < birth.getMonth())) {
                                    return now.getFullYear() - birth.getFullYear() - 1;
                                } else {
                                    return now.getFullYear() - birth.getFullYear();
                                }
                            } else {
                                return "N/A";
                            }
                        }
                    };
                }]);