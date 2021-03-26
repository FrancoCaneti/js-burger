// Bottone calcolo prezzo

var bot = document.getElementById('button');
console.log(bot);
var nomeBurger = document.getElementById('name');
console.log(nomeBurger); 
var ingredienti = document.getElementsByClassName('ingredient-checkbox');
console.log(ingredienti);
var prezzoDisplay = document.getElementById('price');



//click sul bottone

bot.addEventListener('click', function(){
    console.log('click!!!!!!!!');
    var nome = nomeBurger.value.trim();
    console.log(nome);
    
    //Nome burger obbligatori

    if(nome.length === 0) {
        alert('Il tuo panino non ha un nome :(');//non esce l'alert //risolto

    } else {
        //console.log('calcolo prezzo...');

        //aggiunta costo ingredienti su prezzo base

        var price = 50; 
  
        for ( var i = 0; i < ingredienti.length; i++){ 
            var ingredientilist = ingredienti[i];
            //console.log(ingredientilist.checked);


            if(ingredientilist.checked === true){
                console.log(ingredientilist.value);


        //aggiunta valore prezzo
             price += parseInt(ingredientilist.value);
            }
        }

        console.log(price);
        //prezzo a schermo
       prezzoDisplay.innerHTML = price.toFixed(2);
    }
     
});