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

/*
"VibinScores": [
        {
            "viberId": "425904090208534528",
            "person": {
                "name": "robi",
                "score": 0,
                "id": "425904090208534528"
            },
            "vibinScore": 0,
            "timeOfEntry": "2021-04-19T16:59:23.077Z"
        }
    ],
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


/*
    Write
*/


registerVibinScores('vibinScores', 999, vibinEntry);


/*
    Writes 'dataToWrite' json object to your 'reference' under 'childId' node. 

*/
function registerVibinScores( reference, childId, dataToWrite){

    //convertes arguments to string if not string
    console.log(typeof reference);
    if((typeof reference) != 'string'){
        reference = reference.toString();
    }
    // if((typeof childId) != 'string'){
    //     childId = childId.toString();
    // }

    var ref = db.ref(reference); //vibinScores

    var usersRef = ref.child(childId);  //vibinScores/6969

    usersRef = ref.push();
    usersRef.set({
        childId:dataToWrite
    });

}

//UPDATE-----------
// var hopperRef = usersRef.child("something1");
// hopperRef.update({
//   "full_name": "JAAAASON"
// });


//
// firebase.database().ref.set('vibinScores/').set({
//     NEWWWSTUFF: "June 23, 1912",
//     FUCKNEW: "Alan Turing"
//   });





// var logs = ReadData('newSet/');
// console.log();

function ReadData (id){
    var result;
    var ref = firebase.database().ref(`${id}`);
        ref.on("value", snapshot =>{
            result= snapshot.val();
        }, err =>{
            throw new error('Error Reading file');
        });

    return result;

}


console.log('ready to mingle');