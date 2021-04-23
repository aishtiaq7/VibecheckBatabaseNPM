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
// var ref = db.ref("/user_data");  //Set the current directory you are working in

var ref = db.ref("vibinScores");

// var usersRef = ref.child("users");
/*
var usersRef = ref.child("something");
usersRef.set({
  something1: {
    date_of_birth: "June 23, 1912",
    full_name: "Alan Turing"
  },
  something2: {
    date_of_birth: "December 9, 1906",
    full_name: "Grace Hopper"
  }
});
*/

//UPDATE-----------
var hopperRef = usersRef.child("users/something1/");
hopperRef.update({
  "full_name": "Awshaf name"
});

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