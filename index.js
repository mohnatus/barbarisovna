document.getElementById('gallery')
  .addEventListener('wheel', function(event) {
    if (event.deltaMode == event.DOM_DELTA_PIXEL) {
      var modifier = 1;
      // иные режимы возможны в Firefox
    } else if (event.deltaMode == event.DOM_DELTA_LINE) {
      var modifier = parseInt(getComputedStyle(this).lineHeight);
    } else if (event.deltaMode == event.DOM_DELTA_PAGE) {
      var modifier = this.clientHeight;
    }
    if (event.deltaY != 0) {
      // замена вертикальной прокрутки горизонтальной
      this.scrollLeft += modifier * event.deltaY;
      event.preventDefault();
    }
  }, {
    passive: false
  });

let lines = document.querySelectorAll('.picture__line');

for (let i = 0; i < lines.length; i++) {
  let line = lines[i];
  let wrapper = line.querySelector('span');
  let track = wrapper.querySelector('span span');

  let move = function() {

    if (track.getBoundingClientRect().right < wrapper.getBoundingClientRect().right) {
      track.style.left = 0;
    } else {
      track.style.left = (parseInt(track.style.left) || 0) - 2 + 'px';
    }
    setTimeout(move, 50);
  }

  move();
}

const wishes = {
  // ceremonial hall
  "tiger": {
    title: true,
    text: "Тигриной смелости",
  },
  "monalisa": {
    title: true,
    text: "Здорового похуизма"
  },
  "redhorse": {
    title: true,
    text: "Неожиданных радостей",
  },

  // egypt
  "mummy": {
    title: true,
    text: "Будь активной как Нихель Пихель"
  },

  // mult
  "bojack": {
    title: true,
    text: "bojack"
  },
  "hillking": {
    title: true,
    text: "hillking"
  },

  // cinema
  "starwars2": {
    title: true,
    text: "Найти пару"
  },

  // literally
  "comics1": {
    title: true,
    text: "comics1"
  },
  "comics2": {
    title: true,
    text: "comics2"
  },
  "comics3": {
    title: true,
    text: "comics3"
  },
  "comics4": {
    title: true,
    text: "comics4"
  },
  "comics5": {
    title: true,
    text: "comics5"
  },

  // job
  "bears": {
    title: true,
    text: "bears"
  },
  "vitruvian": {
    title: true,
    text: "vitruvian"
  },
  "dali": {
    title: true,
    text: "Не расплавься на работе"
  },

  // physical
  "peaches": {
    title: true,
    text: "Ешь больше витаминов"
  },
  "venera": {
    title: true,
    text: "Не забывай одеваться"
  },
  "yoga": {
    title: true,
    text: "Будь гибче"
  },
  
  // mental
  "cat1": {
    title: true,
    text: "cat1"
  },
  "riders": {
    title: true,
    text: "riders"
  },
  "cat2": {
    title: true,
    text: "Никому не уступай"
  },
  "cat3": {
    title: true,
    text: "Плыви по течению"
  },
  "night": {
    title: true,
    text: "night"
  },
  "cat4": {
    title: true,
    text: "cat4"
  },

  // empress
  "keanu1": {
    title: true,
    text: "keanu1"
  },
  "keanu2": {
    title: false,
    text: "Ты потрясающий!"
  },
  "empress": {
    text: "empress"
  }
};

const showWish = (function() {
  const el = document.getElementById('wish');
  const title = el.querySelector('.wish__title');
  const text = el.querySelector('.wish__text');
  el.addEventListener("click", function() {
    el.style.opacity = 0;
    el.style.visibility = "hidden";
    el.style.display = "none";
  })

  return function showWish(wishName) {
    let wish = wishes[wishName];
    text.innerHTML = wish.text;
    title.style.display = wish.title ? "block" : "none";
    el.style.display = "block";
    el.style.visibility = "visible";
    el.style.opacity = 1;
  }
})();

let rotateTimer = null;

let rotateHead = function(el) {
  if (el.classList.contains('rotate')) {
    clearTimeout(rotateTimer);
    el.classList.remove('rotate');
    return;
  }
  el.classList.add('rotate');
  rotateTimer = setTimeout(function() {
    clearTimeout(rotateTimer);
    el.classList.remove('rotate');
  }, 10 * 1000)
}

let image = document.getElementById('image');

image.onclick = function() {
  image.style.display = "none";
}
const increase = function(url) {
  image.style.backgroundImage = 'url(' + url + ')';
  image.style.display = "block";
}
document.addEventListener('click', function(e) {
  let caption = e.target.closest('.increase');
  if (caption) {
    e.preventDefault();
    e.stopImmediatePropagation();
    let picture = caption.closest('.picture');
    let image = picture.querySelector('img');
    let src = image.src;
    increase(src);
  }
}, true);



const listen = function(id) {
  let audio = document.getElementById(id);
  if (audio.paused) {
    audio.currentTime = 0;
    audio.play();
  } else {
    audio.pause();
  }
}

const show = function(id) {
  let video = document.getElementById(id);
  if (video.paused) {
    video.currentTime = 0;
    video.play();
  } else {
    video.pause();
  }
}
