angular.module('module-services',[])
.service('userService', function(){
   this.getUser = function {
      return {"nome","teste"}
   }
});

	