window.onload = function onLoad() {
  var line = new ProgressBar.Line('#progress', {
    color: '#ffde57',
    trailColor: '#646464'
  });

  function progress() {
    var now = new Date();
    // 2010-07-03
    var start = new Date(Date.UTC(2010, 6, 3));
    // 2020-01-01 00:00:00
    var end = new Date(Date.UTC(2020, 0, 1, 0, 0, 0));
    console.log(end)
    var done = (now-start) / (end-start);
    document.getElementById("percent").innerHTML = done*100 + "%";
    return done;
  }

  line.animate(progress());  // Number from 0.0 to 1.0

  setInterval(update, 1000);

  function update() {
    line.set(progress());
  }

};
