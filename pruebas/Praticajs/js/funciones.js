
var n = document.getElementsByName('numero');
var resp = document.getElementById('respuesta'); 
let check = document.getElementsByName('operacion');
let color = document.getElementsByName('color');
let tam = document.getElementsByName('tam');


function leer(){

    let num1 = Number(n[0].value);
    let num2 = Number(n[1].value);
    
    let msg = "La respuesta es: "+ operacion(num1,num2); 
    resp.textContent=msg;
    
     
}

function operacion(n1,n2){

    for(let i = 0; i<check.length;i++){

        if(check[i].checked){
            if(check[i].value==1 )
            return n1+n2;
        else 
            return n1-n2;
        }
        
    }
}


function fontOption(){

    for(let i = 0; i<color.length; i++){
        if(color[i].checked){
            if(color[i].value==1 )
                return true;
        else 
           return false;
        }

    }



}
