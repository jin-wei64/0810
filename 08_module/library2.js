export class animal{
    shound = function(){
        alert("ppp")
    }
}
export class dog extends animal{
    
    shound = function(){
        alert("wwww")
    }
}

export let a = function(obj){
    obj.shound();
}