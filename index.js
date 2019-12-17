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
    title: false,
    text: "В этом мире есть два пути: легкий путь и правильный путь.<br>Ты плывешь в Нью-Йорк либо огибая мыс Горн, как мужик, либо через Панамский канал, как демократ злоебучий."
  },
  "hillking": {
    title: false,
    text: "Как странно, в девяти метрах от меня страдает человек, но это не мешает мне наслаждаться бассейном. Наверное, я просто взрослею."
  },

  // cinema
  "starwars2": {
    title: true,
    text: ""
  },
  "starwars2": {
    title: true,
    text: "Найти человека, который будет тебя дополнять"
  },

  // literally
  "comics1": {
    title: true,
    text: "Человека, который всё впитает"
  },
  "comics2": {
    title: true,
    text: "Почаще уничтожать и наблюдать уничтожение маскировки"
  },
  "comics3": {
    title: true,
    text: "Реже находиться во Вдалиотводске"
  },
  "comics4": {
    title: true,
    text: "Не страдать от недостатка теплоты"
  },
  "comics5": {
    title: true,
    text: "Быть благоразумной"
  },

  // job
  "coffee": {
    title: true,
    text: "Побольше хорошего"
  },
  "bears": {
    title: true,
    text: "Адекватных коллег"
  },
  "vitruvian": {
    title: true,
    text: "Дополнительную пару рук и ног"
  },
  "dali": {
    title: true,
    text: "Не расплавиться на работе"
  },

  // physical
  "peaches": {
    title: true,
    text: "Больше витаминов"
  },
  "venera": {
    title: true,
    text: "Не забывай одеваться"
  },
  "yoga": {
    title: true,
    text: "Быть гибче и держать баланс"
  },
  "riders": {
    title: true,
    text: "Производить на других хорошее впечатление"
  },
  
  // mental
  "cat1": {
    title: true,
    text: "cat1"
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


let listenTimer = null;

const listen = function(id, stop) {
  let audio = document.getElementById(id);
  if (audio.paused) {
    audio.currentTime = 0;
    audio.play();

    if (stop && stop > 0) {
      listenTimer = setTimeout(function() {
        clearTimeout(listenTimer);
        audio.pause();
      }, stop * 1000);
    }
  } else {
    clearTimeout(listenTimer);
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
