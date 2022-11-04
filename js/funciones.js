// Valor del ticket 
const valorTicket=200;

// Porcentajes de descuento según la categoría
let descEstudiante= 0.8;  // descuento del 80% para Estudiantes
let descTrainne= 0.5; // descuento del 50% para Trainee
let descJunior= 0.15; // descuento del 15% para Junior


// Elementos en variables
let  nombre       =document.getElementById("nombre");
let  apellido     =document.getElementById("apellido");
let  email        =document.getElementById("correo");
let  cant_Tickets =document.getElementById("cantidad");
let  categoria    =document.getElementById("opcion");

let msgError = document.getElementsByClassName("error");




// Desarrollo de Función total a pagar
//con todas las validaciones correspondientes


function total_a_pagar()
{ 
    quitarClaseError();

      
    //VALIDACION DE NOMBRE
    
    if(nombre.value.trim()==="")
    {
     msgError[0].innerHTML= 'Ingrese su nombre'
        nombre.classList.add("is-invalid");
        nombre.focus();
        return ;
    } else{
     msgError[0].innerHTML= ''
        }


    // Para determinar si el nombre es válido o no
    const nombreValido = nombre => 
        {
            return /^[a-zA-Z]+[a-zA-Z]+$/.test(nombre);
        }

    if(!nombreValido(nombre.value))
    {
     msgError[0].innerHTML="El nombre no debe contener números u otros caracteres";
        nombre.classList.add("is-invalid");
        nombre.focus();
        return ;
    }   else{
         msgError[0].innerHTML='';
        }





    //VALIDACION DE APELLIDO
    
    if(apellido.value==="")
    {
     msgError[1].innerHTML= 'Ingrese su apellido'
        apellido.classList.add("is-invalid");
        apellido.focus();
        return ;
    } else{
         msgError[1].innerHTML= ''
        }


    // Para determinar si el apellido es válido o no
    const apellidoValido = apellido => 
    {
        return /^[a-zA-Z]+[a-zA-Z" "]+$/.test(apellido);
    }

    if(!apellidoValido(apellido.value))
    {
     msgError[1].innerHTML="El apellido no debe contener números u otros caracteres";
        apellido.classList.add("is-invalid");
        apellido.focus();
        return ;
    }   else{
         msgError[1].innerHTML='';
        }





    //VALIDACION DE MAIL
    if(email.value==="")
    {
     msgError[2].innerHTML= 'Escriba su mail';
        email.classList.add("is-invalid");
        email.focus();
        return ;
    } else{
     msgError[2].innerHTML= '';
        }

    // Para determinar si el correo electrónico es válido o no
    const emailValido = email => 
    {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    if(!emailValido(email.value))
    {
     msgError[2].innerHTML= 'Debe ingresarlo en éste formato.  usuario@mail.com';
        email.classList.add("is-invalid");
        email.focus();
        return ;
    }else{
     msgError[2].innerHTML= '';
        }





    //VALIDACION DE CANTIDAD DE TICKETS
    if( (cant_Tickets.value<=0) || (isNaN(cant_Tickets.value)))
    {
     msgError[3].innerHTML= "Coloque la cantidad de tickets que desea comprar";
        cant_Tickets.classList.add("is-invalid");
        cant_Tickets.focus();
        return ;
    }else{
     msgError[3].innerHTML="";
        }

    



    //VALIDACION DE CATEGORIA
    if(categoria.value==="")
    {
     msgError[4].innerHTML="Elija una opción";
        categoria.classList.add("is-invalid");
        categoria.focus();
        return ;
    }else{
     msgError[4].innerHTML="";
    }


//Teniendo en cuenta la cantidad de tickets, SE OBTIENE el valor total a pagar.
     //multiplico total * entradas
 
     let totalValorTickets=(cant_Tickets.value)*valorTicket;
 
     let cat_seleccionada=categoria.options[categoria.selectedIndex].value;
 
     switch (parseInt(cat_seleccionada)) {
         case 1:
             totalValorTickets=totalValorTickets;
             break;
         case 2:
             totalValorTickets=totalValorTickets-(descEstudiante*totalValorTickets);
             break;
             
         case 3:
             totalValorTickets=totalValorTickets-(descTrainne*totalValorTickets);
             break;
 
         case 4:
             totalValorTickets=totalValorTickets-(descJunior*totalValorTickets);
             break;        
     }
     totalPago.innerHTML=totalValorTickets;

} 




//Desarrollo de Función reset total a pagar.
function reset_total_a_pagar()
{
    quitarClaseError();
    totalPago.innerHTML="";
}



//Desarrollo de Función quitar clase error
function quitarClaseError()
{
    let x=document.querySelectorAll(".form-control,.form-select");
    let i;
    for(i=0;i<x.length;i++)
    {
        x[i].classList.remove("is-invalid");
    }
}


//Boton resumen.
let x=document.getElementById("btnResumen");
x.addEventListener("click",total_a_pagar);
//Boton borrar.
btnReset.addEventListener("click",reset_total_a_pagar);