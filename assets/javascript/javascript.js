// firebase 
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

// variable grabbing info from form
const addTrain = _ => {
  event.preventDefault()
  trainAdded.push({
    trainName: document.querySelector('#trainName').value,
    destination: document.querySelector('#destination').value,
    firstArrival: document.querySelector('#firstArrival').value,
    frequency: document.querySelector('#frequency').value,
    frequency: parseInt(frequency),
  })
}

// button click to add to firebase and table
trainAdded.on('child_added', data => {
  const train = data.val()

  // math for next arrival/minutes away
  var firstArrival = `${train.firstArrival}`;
  var frequency = `${train.frequency}`;
  var arrivalConverted = moment(firstArrival, "HH:mm")
  var diffTime = moment().diff(moment(arrivalConverted), 'minutes');
  var timeRemaining = diffTime % frequency
  var minutesAway = frequency - timeRemaining
  var nextTrain = moment().add(minutesAway, "minutes")

  // append to table
  let trainElement = document.getElementById("targetTable");
  var row = trainElement.insertRow(1);
  var addTrainName = row.insertCell(0);
  var addDestination = row.insertCell(1);
  var addFrequency = row.insertCell(2);
  var addNextArrival = row.insertCell(3);
  var addMinutesAway = row.insertCell(4);
  addTrainName.innerHTML = `${train.trainName}`;
  addDestination.innerHTML = `${train.destination}`;
  addFrequency.innerHTML = `${train.frequency}`;
  addNextArrival.innerHTML = moment(nextTrain).format("h:mm a");
  addMinutesAway.innerHTML = minutesAway + ' min';


  // clear text-box
  trainName = $("#trainName").val("");
  destination = $("#destination").val("");
  firstArrival = $("#firstArrival").val("");
  frequency = $("#frequency").val("");
});