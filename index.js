var firebase = require('firebase');

var firebaseConfig = {
    apiKey: "AIzaSyBJ8-p0-jZUEKFx5eKnpHgYOxBQ4dwcvr4",
    authDomain: "vibecheck-discord-bot.firebaseapp.com",
    databaseURL: "https://vibecheck-discord-bot-default-rtdb.firebaseio.com",
    projectId: "vibecheck-discord-bot",
    storageBucket: "vibecheck-discord-bot.appspot.com",
    messagingSenderId: "946523489068",
    appId: "1:946523489068:web:bf6dc1cab8fafbd9922289",
    measurementId: "G-5Y9H17PS13"
};
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//*************************************** */

var db = firebase.database();








/* **********************************************************
                            Write
    **********************************************************
*/ 
var vibinEntry = {
    "viberId": "425904090208534528",
    "person": {
        "name": "kukur",
        "score": 0,
        "id": "425904090208534528"
    },
    "vibinScore": 0,
    "timeOfEntry": "2021-04-19T16:59:23.077Z"
}

//registerVibinScores('vibinScores/allEntries', 996, vibinEntry);

/*
    Writes 'dataToWrite' json object to your 'reference' under 'childId' node. 

    Pattern example: 
    vibinScores{ // <---- reference
            allEntries{
                //VIBIN-ID 237{ <---- childID
                    ...
                    ..obj   <---- dataToWrite
                }
            }
    }
*/
function registerVibinScores( reference, childId, dataToWrite){

    //convertes reference to string if not string
    if((typeof reference) != 'string'){
        reference = reference.toString();
    }

    var ref = db.ref(reference); //vibinScores
    usersRef = ref.child(childId);
    usersRef.set(
        dataToWrite
    );

}


/* **********************************************************
                            READ
    **********************************************************
*/ 
/*
    Reads data asynchronously with the 'path' argument specified. 
    RETURNING A PROMISE.
    
    Ex path can be: /vibinScores/allEntries/112/
*/
function readData (path){
    var ref = db.ref(path); 

    return ref.once("value", function(snapshot) {
        // console.log('\n-----fetched data:\n');
        // console.log(snapshot.val());
        console.log('\tReading: '+path);
        return snapshot.val();
    }, function (errorObject) {
        console.log("The read failed: " + errorObject.code);
    })
    .then( snap =>{
            return snap.val();
        })
}
var promise = readData('vibinScores/allEntries');
promise.then( dataReceived => {
    console.log('\n-----promise call returned:\n');
    console.log(dataReceived);
    return dataReceived;
    })
    // .then( data =>{
    //     for (let [key, value] of Object.entries(data)) {
    //         console.log(`key: value`);
    //         console.log(key);
    //         console.log(value);

    //     }
    // })

/* **********************************************************
                            UPDATE
    **********************************************************
*/ 
var newObject = {
    "viberId": "--------------",
    "person": {
        "name": "|||||GALI HERE|||||||",
        "score": 0,
        "id": "1111111111111"
    },
    "vibinScore": 0,
    "timeOfEntry": "2021-04-19T16:59:23.077Z"
}

var path = 'vibinScores/allEntries/112';
updateNode(path,newObject );

function updateNode(path, newObject){

    console.log(`updating path: ${path}`)
    firebase.database().ref(path).set(
        newObject
    );
}

readData(path);







console.log('ready to mingle');