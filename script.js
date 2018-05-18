var changer = document.querySelector('.mainContainer');
var starting = document.querySelector('.container1');


starting.addEventListener('click', function() {
  changer.style.display = "none";
});


var chrono = {
  secondsLeft: 0,
  timer: undefined,

  Start: function(secondsLeft) {
    //Initialisation du nombre de secondes selon la valeur passée en paramètre
    this.secondsLeft = secondsLeft;
    //Démarrage du chrono
    this.timer = setInterval(this.Tick.bind(this), 1000);
  },

  Tick: function() {
    //On actualise la valeur affichée du nombre de secondes
    document.getElementById("time").innerHTML = --this.secondsLeft;
    if (this.secondsLeft === 0)
      //Tps écoulé -> arrêt du timer
      this.Stop()
  },

  Stop: function() {
    //quand le temps est écoulé, on arrête le timer
    clearInterval(this.timer);
    //Et on appelle la fonction qui gère la fin du temps imparti et poursuit le traitement
    //Ici, pour le test, simplement une fonction alert
    alert('Vous avez perdu');
  }

};

var x = 6;
var y = 14;
var victoire = document.querySelector('.victory');
var table = document.querySelectorAll('tr');
var colone = document.querySelector('.flower');

var actuel = table[y].children[x];
actuel.classList.add('bonjour');
console.log(table[y].children[x - 1].classList.contains('test'));
window.addEventListener('keydown', function(event) {
  event.preventDefault();

  if (event.which == 37) {
    var left = table[y].children[x - 1];
    if (left.classList.contains('flower')) {
      actuel.classList.remove('bonjour');
      left.classList.add('bonjour');
      x--;
      actuel = left;
    }
    if (left.classList.contains('rip')) {
      victoire.style.display = 'inline';
    }
  }
  if (event.which == 39) {
    var right = table[y].children[x + 1];
    if (right.classList.contains('flower')) {
      actuel.classList.remove('bonjour');
      right.classList.add('bonjour');
      x++;
      actuel = right;
    }
    if (right.classList.contains('rip')) {
      victoire.style.display = 'inline';
    }
  }
  if (event.which == 38) {
    var top = table[y - 1].children[x];
    if (top.classList.contains('flower')) {
      actuel.classList.remove('bonjour');
      top.classList.add('bonjour');
      y--;
      actuel = top;
    }
  }
  if (event.which == 40) {
    var bot = table[y + 1].children[x];
    if (bot.classList.contains('flower')) {
      actuel.classList.remove('bonjour');
      bot.classList.add('bonjour');
      y++;
      actuel = bot;
    }
    if (bot.classList.contains('rip')) {
      victoire.style.display = 'inline';
    }
  }

  if (bot !== null && pageYOffset != actuel.offsetTop) {
    console.log('posé');
    window.scrollTo(0,actuel.offsetTop-400);
  }

});
/*window.pageYOffset
2816
window.scrollY
2816
document.querySelector('.bonjour').offset
undefined
var mario = document.querySelector('.bonjour')
undefined
mario.offsetTop
3600
mario.offsetTop
3600
var mario = document.querySelector('.bonjour')
undefined
mario.offsetTop
3200
document.querySelector('.bonjour').offsetTop
3200
document.querySelector('.bonjour').offsetTop
2800
window.scrollY
3067
window.scrollY = 2500
2500
window.scrollTo(2500)
VM4670:1 Uncaught TypeError: Failed to execute 'scrollTo' on 'Window': parameter 1 ('options') is not an object.
    at <anonymous>:1:8
(anonymous) @ VM4670:1
window.scrollTo({top: 2500})
undefined
window.scrollTo({top: -2500})
undefined*/
