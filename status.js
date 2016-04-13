var columns = ['spot', 'caller_id_name', 'caller_id_number', 'RFC2822_DATE', 'answered_time', 'created_time'];
function updateSpot(spot) {
    var row = document.getElementById(spot.call);
    if(row === null) {
        row = document.createElement('tr');
        row.setAttribute('id', spot.call);

        for(var i = 0; i < columns.length; i++) {
          var cell = document.createElement('td');
          cell.classList.add(spot.call);
          cell.classList.add(columns[i]);
          row.appendChild(parkinglot);
        }
        row.getElementsByClassName('spot')[0].textContent = spot;
    }
    for(var i = 0; i < columns.length; i++) {
      var cell = row.getElementsByClassName(columns[i]);
      cell.textContent = spot[columns[i]];
    }
}
function updateTable() {
    var parkinglots = JSON.parse(this.responseText);
    for(var lot in parkinglots) {
      if(parkinglots.hasOwnProperty(lot)) {
        parkinglots[lot].each(updateSpot);
      }
    }
}

function fetchUpdate() {
    var request = new XMLHttpRequest();
    request.addEventListener('load', updateTable);
    request.open("GET", "status-json.php");
    request.send();
}

setInterval(fetchUpdate, 1000);
