const year = new Date().getFullYear();
const finish = new Date(2020, 0, 1).getTime();

if (window.galleryClosed) {
  // countdown
  let timer = setInterval(function() {

    // get today's date
    const today = new Date().getTime();

    // get the difference
    const diff = finish - today;

    if (diff <= 0) {
      clearInterval(timer);
      openGallery();
      return;
    }

    // math
    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((diff % (1000 * 60)) / 1000);

    // display
    document.getElementById("timer").innerHTML =
      "<div class=\"days\"> \
        <div class=\"numbers\">" + days + "</div>дней</div> \
      <div class=\"hours\"> \
        <div class=\"numbers\">" + hours + "</div>часов</div> \
      <div class=\"minutes\"> \
        <div class=\"numbers\">" + minutes + "</div>минут</div> \
      <div class=\"seconds\"> \
        <div class=\"numbers\">" + seconds + "</div>секунд</div> \
      </div>";

  }, 1000);
}


