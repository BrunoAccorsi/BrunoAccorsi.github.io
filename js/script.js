window.onload = function() {
  showDivFromHash();
};

window.onhashchange = function() {
  showDivFromHash();
};


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  

function showDivFromHash() {
  var hash = window.location.hash.substr(1); // Get the hash from the URL
  var divs = document.querySelectorAll('section[id]');

  if (hash == '') {
    var home = document.getElementById('home');
    home.classList.remove('hide');
    home.classList.add('show');
    return;
  }
  
  for (var i = 0; i < divs.length; i++) {
    if (divs[i].id === hash) {
      divs[i].classList.remove('hide');
      divs[i].classList.add('show');
    } else {
      divs[i].classList.remove('show');
      divs[i].classList.add('hide');
    }
  }
}