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
    console.log('move')
    
    if (track.getBoundingClientRect().right < wrapper.getBoundingClientRect().right) {
      track.style.left = 0;
    } else {
      track.style.left = (parseInt(track.style.left) || 0) - 2 + 'px';
    }
    setTimeout(move, 100);
  }

  move();
}

const wishes = {
  "monalisa": {
    title: true,
    text: "Будь загадочной как Мона Лиза"
  },
  "tiger": {
    title: true,
    text: "tiger",
  },
  "redhorse": {
    title: true,
    text: "redhorse",
  },
  "mummy": {
    title: true,
    text: "Будь активной как Нихель Пихель"
  },
  "beetle": {
    title: true,
    text: "beetle"
  },
  "fluidcat": {
    title: true,
    text: "fluidcat"
  },
  "bojack": {
    title: true,
    text: "bojack"
  },
  "hillking": {
    title: true,
    text: "hillking"
  },
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
  "ball": {
    title: true,
    text: "Держи баланс"
  },
  "owl": {
    title: true,
    text: "owl"
  },
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

