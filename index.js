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
  "book": {
    title: true,
    text: "Меньше плохих книг",
  },

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
    text: "Нихель-Пихельного энтузиазма"
  },
  "egypt1": {
    title: true,
    text: "Послушной челяди"
  },
  "beetle": {
    title: true,
    text: "Меньше какашек вокруг тебя"
  },
  "egypt2": {
    title: true,
    text: "Правильно поклоняющихся почитателей"
  },
  "egypt3": {
    title: true,
    text: "Цветов и подарочков"
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
  "homer1": {
    title: false,
    text: "Жизнь - это просто куча всякой фигни, которая происходит"
  },
  "homer2": {
    title: true,
    text: "Чтобы желания всегда совпадали с возможностями"
  },

  // cinema
  "starwars1": {
    title: true,
    text: "Не брать на себя непосильные задачи"
  },
  "starwars2": {
    title: true,
    text: "Найти человека, который будет тебя дополнять"
  },
  "got": {
    title: true,
    text: "Летать на драконах и хуярить всех"
  },
  "starwars3": {
    title: true,
    text: "Быть грациозной и не навернуться с шара"
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
  "coffeemachine": {
    title: true,
    text: "Отдыхать от работы почаще"
  },
  "coffee": {
    title: true,
    text: "Много вкусняшек"
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
    text: "Красивых шмоточек"
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
  "owl": {
    title: true,
    text: "Вращать головой на 360 градусов"
  },
  "cat1": {
    title: true,
    text: "Не забывать отдыхать"
  },
  "corgi": {
    title: true,
    text: "Наслаждаться пейзажами"
  },
  "cat2": {
    title: true,
    text: "Никому не уступать"
  },
  "cat3": {
    title: true,
    text: "Избежать девятого вала"
  },
  "night": {
    title: true,
    text: "Быть выше этого всего"
  },

  // apsny 
  "apsny": {
    title: true,
    text: "Апсны"
  },
  "bottle": {
    title: false,
    text: "Кажется, этот экспонат недавно использовали..."
  },

  // empress
  "keanu1": {
    title: false,
    text: "Каждая борьба в вашей жизни в итоге превратила вас в человека, которым вы являетесь сегодня. Будьте благодарны за трудные времена, они только делают вас сильнее."
  },
  "keanu2": {
    title: false,
    text: "Искусство — это попытка найти хорошее в людях и сделать мир более сострадательным."
  },
  "empress": {
    title: true,
    text: "Быть собой"
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
  let audio = document.getElementById('beetle');

  if (el.classList.contains('rotate')) {
    clearTimeout(rotateTimer);
    el.classList.remove('rotate');
    audio.pause();
    return;
  }

  audio.play();
  el.classList.add('rotate');
  rotateTimer = setTimeout(function() {
    audio.currentTime = 0;
    audio.pause();
    clearTimeout(rotateTimer);
    el.classList.remove('rotate');
  }, 10 * 1000)
}

let image = document.getElementById('image');

image.onclick = function() {
  image.style.display = "none";
}
const increase = function(url, bg) {
  if (bg) {
    image.style.background = 'url(' + url + ') center / contain no-repeat, url(' + bg + ') center / cover no-repeat';
  } else {
    image.style.background = "";
    image.style.backgroundImage = 'url(' + url + ')';
  }

  image.style.display = "block";
}

document.addEventListener('click', function(e) {
  let target = e.target.closest('.increase');
  if (target) { 
    let image = target.dataset.image;
    if (!image) return;

    let bg = target.dataset.bg;

    increase(image, bg);
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

const show = function(id, pause) {
  let video = document.getElementById(id);
  if (video.paused) {
    if (!pause) video.currentTime = 0;
    video.play();
  } else {
    video.pause();
  }
}


let puzzleWrapper = document.querySelector('.puzzle-place');
let puzzleGround = document.querySelector('.puzzle-ground');
let puzzleCells = puzzleWrapper.querySelectorAll('.cell');
let groundCells = puzzleGround.querySelectorAll('.cell');
let finished = true;
let selectedCell = null;
let justFinished = false;

let cells = [
  11, 12, 13, 14, 15, 
  21, 22, 23, 24, 25,
  31, 32, 33, 34, 35
];

function setSelected(cell) {
  if (selectedCell) {
    selectedCell.classList.remove('selected');
  }
  if (cell) {
    selectedCell = cell;
    selectedCell.classList.add('selected');
  } else {
    selectedCell = null;
  }
}

function checkPuzzle() {
  for (let i = 0; i < puzzleCells.length; i++) {
    if (puzzleCells[i].dataset.item !== puzzleCells[i].dataset.place) {
      return;
    }
  }
  finished = true;
  justFinished = true;
  puzzleGround.classList.add('finished');
  puzzleWrapper.classList.add('finished');
  console.log('finished')
}

function onCellClick(cell) {
  if (finished) return;

  let currentItem = cell.dataset.item; 

  if (selectedCell) {
    if (currentItem) {
      setSelected(cell);
    } else {
      cell.setAttribute('data-item', selectedCell.dataset.item);
      selectedCell.setAttribute('data-item', '');
      setSelected(null);
      
      checkPuzzle();
    }
  } else {
    if (currentItem) {
      setSelected(cell);
    }
  }
}

for (let i = 0; i < groundCells.length; i++) {
  groundCells[i].addEventListener('click', function() {
    onCellClick(groundCells[i]);
  })
}

for (let i = 0; i < puzzleCells.length; i++) {
  puzzleCells[i].addEventListener('click', function() {
    onCellClick(puzzleCells[i]);
  })
}

puzzleWrapper.addEventListener('click', function() {
  if (finished) {
    if (justFinished) {
      justFinished = false;
      return;
    }
    finished = false;
    puzzleGround.classList.remove('finished');
    puzzleWrapper.classList.remove('finished');

    for (let i = 0; i < puzzleCells.length; i++) {
      puzzleCells[i].setAttribute('data-item', '')
    }
    let random = cells.concat();
    random.sort(function(a, b) {
      return Math.random() - 0.5;
    });
    for (let i = 0; i < groundCells.length; i++) {
      groundCells[i].setAttribute('data-item', random[i]);
    }
  }
});


let withVideo = document.querySelectorAll('.with-video');
for (let i = 0; i < withVideo.length; i++) {
  let el = withVideo[i];
  let label = el.querySelector('.picture__message');
  let img = el.querySelector('img');
  let video = el.querySelector('video');

  video.addEventListener('ended', function() {
    video.pause();
    img.style.display = 'block';
    video.style.display = 'none';
  })

  label.onclick = function() {
    if (video.paused) {
      img.style.display = 'none';
      video.currentTime = 0;
      video.style.display = 'block';
      video.play();
    } else {
      video.pause();
      img.style.display = 'block';
      video.style.display = 'none';
    }
  }
}

function toHall(hall) {
  let $hall = document.querySelector('[data-section="' + hall + '"]');
  if (!$hall) return;

  let left = $hall.getBoundingClientRect().left;
  document.getElementById('gallery').scrollLeft = left;
}

document.getElementById('horoscope-open').onclick = function(e) {
  e.stopImmediatePropagation();
}