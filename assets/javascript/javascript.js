var config = {
    apiKey: "AIzaSyCIPGU-3mtslUDA9BgA6HQxkQu4iUDqrY0",
    authDomain: "train-scheduler-db560.firebaseapp.com",
    databaseURL: "https://train-scheduler-db560.firebaseio.com",
    projectId: "train-scheduler-db560",
    storageBucket: "train-scheduler-db560.appspot.com",
    messagingSenderId: "651788241815"
};
firebase.initializeApp(config);

var database = firebase.database()
var trainAdded = database.ref('trains')

const addTrain = _ => {
    event.preventDefault()
    trainAdded.push({
        trainName: document.querySelector('#trainName').value,
        destination: document.querySelector('#destination').value,
        frequency: document.querySelector('#frequency').value,
    })
}

trainAdded.on('child_added', data => {
    const train = data.val()
    let trainElement = document.push('table')
    trainElement.innerHTML = `
      <div class="card">
      <div class="card-header">
      </div>
      <br>
      <div class="card-block">
        <h4 class="card-title">&nbsp; ${train.trainName}</h4>
        <p class="card-text">&nbsp; ${train.destination}</p>
        <p class="card-text">&nbsp; ${train.frequency}</p>
        <p class="card-text">&nbsp; ${train.nextArrival}</p>
        <p class="card-text">&nbsp; ${train.minutesAway}</p>
        <br>
      </div>
    </div>
    <br>`
    document.querySelector('#trainList').appendChild(trainElement)
})





function generate_table() {
    // get the reference for the body
    var body = document.getElementsByTagName("body")[0];
   
    // creates a <table> element and a <tbody> element
    var tbl = document.createElement("table");
    var tblBody = document.createElement("tbody");
   
    // creating all cells
    for (var i = 0; i < 2; i++) {
      // creates a table row
      var row = document.createElement("tr");
   
      for (var j = 0; j < 2; j++) {
        // Create a <td> element and a text node, make the text
        // node the contents of the <td>, and put the <td> at
        // the end of the table row
        var cell = document.createElement("td");
        var cellText = document.createTextNode("cell in row "+i+", column "+j);
        cell.appendChild(cellText);
        row.appendChild(cell);
      }
   
      // add the row to the end of the table body
      tblBody.appendChild(row);
    }
   
    // put the <tbody> in the <table>
    tbl.appendChild(tblBody);a
    // appends <table> into <body>
    body.appendChild(tbl);
    // sets the border attribute of tbl to 2;
    tbl.setAttribute("border", "2");
  }