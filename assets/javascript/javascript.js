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
  let trainElement = document.getElementById("targetTable");
  var row = trainElement.insertRow(1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);
  cell1.innerHTML = `${train.trainName}`;
  cell2.innerHTML = `${train.destination}`;
  cell3.innerHTML = `${train.frequency}`;
  cell4.innerHTML = `${train.nextArrival}`;
  cell5.innerHTML = `${train.minutesAway}`;
  //  document.querySelector('#trainList').appendChild(trainElement)
  })
    // let trainElement = document.createElement('div')
    // trainElement.innerHTML = `
    //   <div class="card">
    //   <div class="card-header">
    //   </div>
    //   <br>
    //   <div class="card-block">
        // <h4 class="card-title">&nbsp; Train Name: ${train.trainName}</h4>
    //     <p class="card-text">&nbsp; Destination: ${train.destination}</p>
    //     <p class="card-text">&nbsp; Frequency: ${train.frequency}</p>
    //     <p class="card-text">&nbsp; Next Arrival: ${train.nextArrival}</p>
    //     <p class="card-text">&nbsp; Minutes Away: ${train.minutesAway}</p>
    //     <br>
    //   </div>
    // </div>
    // <br>`
    // document.querySelector('#trainList').appendChild(trainElement)