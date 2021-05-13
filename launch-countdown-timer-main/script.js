window.onload = function () {
  setInterval(function loop() {
    setTimer();
  }, 1000);
};

function setTimer() {
  diff = get_time_diff();
  data = diff.split(" ");
  document.getElementById("day").innerHTML = data[0];
  document.getElementById("hour").innerHTML = data[2];
  document.getElementById("minute").innerHTML = data[4];
  document.getElementById("second").innerHTML = data[6];
}

function get_time_diff(datetime) {
  var datetime =
    typeof datetime !== "undefined" ? datetime : "2021-08-14 01:02:03.123456";

  var datetime = new Date(datetime).getTime();
  var now = new Date().getTime();

  if (isNaN(datetime)) {
    return "";
  }

  console.log(datetime + " " + now);

  if (datetime < now) {
    var milisec_diff = now - datetime;
  } else {
    var milisec_diff = datetime - now;
  }

  var days = Math.floor(milisec_diff / 1000 / 60 / (60 * 24));

  var date_diff = new Date(milisec_diff);

  return (
    days +
    " Days " +
    date_diff.getHours() +
    " Hours " +
    date_diff.getMinutes() +
    " Minutes " +
    date_diff.getSeconds() +
    " Seconds"
  );
}
