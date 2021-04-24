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


/*
Write   => set, update, push
Update 
Read

*/






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
// - /vibinScores/allEntries/112/
var promise = readData('vibinScores');
promise.then( dataReceived => {
    console.log(dataReceived);
    })


function readData (path){
    var ref = db.ref(path); 

    return ref.once("value", function(snapshot) {
            console.log(snapshot.val());
            return snapshot.val();
        }, function (errorObject) {
            console.log("The read failed: " + errorObject.code);
        })
        .then( snap =>{
            console.log('\n\n\n')
            return snap.val();
        })
}


console.log('ready to mingle');