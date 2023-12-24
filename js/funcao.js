var nro= "Não começou";
var chances = 3;
var nuarv = 99;
var gg = " "


function sorteio()
{
   nro= Math.floor(Math.random()*4)+1;
  
}
if(nuarv == 99){
   alert("CLICK EM JOGAR PARA COMEÇAR!!!!");

}

function atirar(tiro)
{  

   

   if(nro != "Não começou"){

   if (tiro==nro){
      document.getElementById("arv"+tiro).src="img/alien-removebg-preview.png";
       alert("Você ganhou");
         gg = "ganhou";
          chances = 0;
          nro= "Não começou";
            return;
   }


   else if(tiro != nro){

    chances--
       document.getElementById("arv"+tiro).src="img/x vermelho.png";

          console.log(tiro)

   if(chances <= 0){

       alert("Você perdeu");
    nro= "Não começou";
   return;
      }
   }
   
 

     }
   }


