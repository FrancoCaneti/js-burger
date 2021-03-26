// Bottone calcolo prezzo

var bot = document.getElementById('button');
console.log(bot);
var nomeBurger = document.getElementById('name');
console.log(nomeBurger); 
var ingredienti = document.getElementsByClassName('ingredient-checkbox')
console.log(ingredienti);



//click sul bottone

bot.addEventListener('click', function(){
    console.log('click!!!!!!!!');
    var name = nomeBurger.value.trim();
    console.log(name);
    
    //Nome burger obbligatori

    if(name.lenght === 0) {
        alert('Il tuo panino non ha un nome :(');//non esce l'alert

    } else {
        //console.log('calcolo prezzo...');

        //aggiunta costo ingredienti

        var price = 50; 


    }
     
});