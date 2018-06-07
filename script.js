var changer = document.querySelector('.mainContainer');
var opening = document.querySelector('.yolo');
var starting = document.querySelector('.container1');
var pi = document.querySelector('.section');
var finish = document.querySelectorAll('.finish');
var audio = document.querySelector('.audio');
var answers = ["reponse1", "reponse2", "reponse3", "reponse4", "reponse5", "reponse6"];
var wesh = [];


var stockage = [];

opening.addEventListener('click', function() {
  opening.style.display = "none";
  changer.style.display = "block";
});
starting.addEventListener('click', function() {
  changer.style.display = "none";
  audio.play();
});

function construction(i) {
  var section = document.querySelector('.section');
  var content = "<div class='container'>";
  content += "<div class='question'>";
  content += "<p class='textinanswer'>";
  content += data.GoodPlace[i].question;
  content += "</p>";
  content += "</div>";
  content += "<div class='containerAwswer'>";
  content += "<ul class='ul'>";
  content += "<li class='awswer'>";
  content += "<p class='textinanswer'data-key=1>";
  content += data.GoodPlace[i].reponse1;
  content += "</p>";
  content += "</li>"
  content += "<li class='awswer'>";
  content += "<p class='textinanswer'data-key=2>";
  content += data.GoodPlace[i].reponse2;
  content += "</p>";
  content += "</li>";
  content += "<li class='awswer'>";
  content += "<p class='textinanswer'data-key=3>";
  content += data.GoodPlace[i].reponse3;
  content += "</p>";
  content += "</li>"
  content += "</ul>"
  content += "<ul class='ul'>";
  content += "<li class='awswer'>";
  content += "<p class='textinanswer'data-key=4>";
  content += data.GoodPlace[i].reponse4;
  content += "</p>";
  content += "</li>";
  content += "<li class='awswer'>";
  content += "<p class='textinanswer'data-key=5>";
  content += data.GoodPlace[i].reponse5;
  content += "</p>";
  content += "</li>";
  content += "<li class='awswer'>";
  content += "<p class='textinanswer'data-key=6>";
  content += data.GoodPlace[i].reponse6;
  content += "</p>";
  content += "</li>";
  content += "</ul>";
  content += "</div>";
  content += "</div>";
  section.innerHTML = content;
  return section
}

var wesh = '';

function recupRep() {
  var global;
  var section = document.querySelector('.section');
  var reponseGarde = document.querySelectorAll('.textinanswer');
  for (var i = 0; i < reponseGarde.length; i++) {
    reponseGarde[i].addEventListener('click', function(element) {
      wesh = "reponse" + this.getAttribute('data-key');
      console.log("1 :", wesh)
      stockage.push(wesh);
      pi.innerHTML = ' ';
    });
  }
  return wesh
}

function finish() {

}



var x = 11;
var y = 0;
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
    if (left.classList.contains('point')) {
      console.log(left.dataset.couleur);
      for (var i = 0; i < data.GoodPlace.length - 1; i++) {
        if (left.dataset.couleur === data.GoodPlace[i].color) {
          construction(i);
          recupRep();
        }
      }
      delete left.dataset.couleur;
      left.classList.remove('point');
      left.classList.add('flower');

      if (left.classList.contains('flo')) {
        console.log('yolo');
      }
    }
    //  var lol = recupRep();
    console.log(wesh);
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
    if (right.classList.contains('point')) {
      console.log(right.dataset.couleur);
      for (var i = 0; i < data.GoodPlace.length - 1; i++) {
        if (right.dataset.couleur === data.GoodPlace[i].color) {
          construction(i);
          recupRep();
        }
      }
      delete right.dataset.couleur;
      right.classList.remove('point');
      right.classList.add('flower');
    }
    if (right.classList.contains('flo')) {
      console.log('yolo');
    }
    console.log(wesh);
  }
  if (event.which == 38) {
    var top = table[y - 1].children[x];
    if (top.classList.contains('flower')) {
      actuel.classList.remove('bonjour');
      top.classList.add('bonjour');
      y--;
      actuel = top;
    }
    if (top.classList.contains('point')) {
      console.log(top.dataset.couleur);
      for (var i = 0; i < data.GoodPlace.length - 1; i++) {
        if (top.dataset.couleur === data.GoodPlace[i].color) {
          construction(i);
          recupRep();
        }
      }
      delete top.dataset.couleur;
      top.classList.remove('point');
      top.classList.add('flower');

    }
    if (top.classList.contains('flo')) {
      console.log('yolo');
    }
    console.log(wesh);
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
    if (bot.classList.contains('point')) {
      console.log(bot.dataset.couleur);
      for (var i = 0; i < data.GoodPlace.length - 1; i++) {
        if (bot.dataset.couleur === data.GoodPlace[i].color) {
          construction(i);
          recupRep();
        }
      }
      delete bot.dataset.couleur;
      bot.classList.remove('point');
      bot.classList.add('flower');
    }
    if (bot.classList.contains('flo')) {
      var max;
      var tmp = 0;
      for (let i = 0; i < 6; i++) {
        var count = stockage.filter(word => word === answers[i]);

        if (count.length > tmp) {
          tmp = count.length;
          max = i;
          if (max === 0) {
            console.log('mon projet est finiiiiiiiiiiiiiiiiiiii');
            changer.innerHTML = ' ';
            changer.style.display = "block";
            changer.classList.remove("mainContainer");
            changer.classList.add("carte1");
            audio.pause();
          }
          if (max === 1) {
            console.log('mon projet est finiiiiiiiiiiiiiiiiiiii');
            changer.innerHTML = ' ';
            changer.style.display = "block";
            changer.classList.remove("mainContainer");
            changer.classList.add("carte2");
            audio.pause();
          }

          if (max === 2) {
            console.log('mon projet est finiiiiiiiiiiiiiiiiiiii');
            changer.innerHTML = ' ';
            changer.style.display = "block";
            changer.classList.remove("mainContainer");
            changer.classList.add("carte3");
            audio.pause();
          }
          if (max === 3) {
            console.log('mon projet est finiiiiiiiiiiiiiiiiiiii');
            changer.innerHTML = ' ';
            changer.style.display = "block";
            changer.classList.remove("mainContainer");
            changer.classList.add("carte4");
            audio.pause();
          }
          if (max === 4) {
            console.log('mon projet est finiiiiiiiiiiiiiiiiiiii');
            changer.innerHTML = ' ';
            changer.style.display = "block";
            changer.classList.remove("mainContainer");
            changer.classList.add("carte5");
            audio.pause();
          }
          if (max === 5) {
            console.log('mon projet est finiiiiiiiiiiiiiiiiiiii');
            changer.innerHTML = ' ';
            changer.style.display = "block";
            changer.classList.remove("mainContainer");
            changer.classList.add("carte6");
            audio.pause();
          }
        }
      }
    }
    console.log(wesh);
  }

  if (bot !== null && pageYOffset != actuel.offsetTop) {
    console.log('posé');
    window.scrollTo(0, actuel.offsetTop - 400);
  }
  if (stockage.length === 7) {
    console.log('bonjoour jai fini');
    for (var i = 0; i < finish.length; i++) {
      finish[i].classList.remove("black")
      finish[i].classList.add("flower")
      finish[3].classList.remove("flo")
      finish[3].classList.add("flo")
    }
  }
});
