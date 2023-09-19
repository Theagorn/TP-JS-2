const firebaseConfig = {
    apiKey: "AIzaSyDBAwPb1tq2wlQ0te4xjlzMaxVoS08oqfw",
    authDomain: "js-firebase-53c41.firebaseapp.com",
    databaseURL: "https://js-firebase-53c41-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "js-firebase-53c41",
    storageBucket: "js-firebase-53c41.appspot.com",
    messagingSenderId: "188548105870",
    appId: "1:188548105870:web:fd501f95891b0cea73ebdf"
};

firebase.initializeApp(firebaseConfig);
//On va créer une référence à notre BDD
const dbRef = firebase.database().ref();
// On va également faire une ref directement dans le noeud / """"table""""" users
const usersRef = dbRef.child("users");
const addUserBtnUI = document.getElementById("add-user-btn");
addUserBtnUI.addEventListener("click", addUserBtnClicked);
const formUserUI = document.getElementById("add-user-form");
formUserUI.addEventListener("submit", (event) => event.preventDefault());
const formUserEditUI = document.getElementById("edit-user-module");
formUserEditUI.addEventListener("submit", (event) => event.preventDefault());
const userListUI = document.getElementById("user-list");
const userDetailUI = document.getElementById("user-detail");
readUserData();

function addUserBtnClicked() {
    let addUserInputsUI = document.getElementsByClassName('user-input');
    const newUser = {};
    for (let i=0; i<addUserInputsUI.length; i++) {
        let key = addUserInputsUI[i].getAttribute('data-key');
        let value = addUserInputsUI[i].value;
        newUser[key] = value;
    }
    usersRef.push(newUser);
    console.log("Nouvel utilisateur enregistré");
    console.log(`Nom: ${newUser.name}, âge: ${newUser.age}`);
    let formulaire = document.getElementById('add-user-form');
    formulaire[0].value = "";
    formulaire[1].value = "";
    formulaire[2].value = "";
};

function readUserData() {
    usersRef.on("value", (snap) => {
        userListUI.innerHTML = "";
        snap.forEach((childSnap) => {
            let key = childSnap.key;
            let value = childSnap.val();
            let $li = document.createElement("li");
            let editIconUI=document.createElement('button');
            editIconUI.innerText = 'Update'
            editIconUI.setAttribute('class','btn btn-outline-primary mx-3');
            let deleteIconUI=document.createElement('button');
            deleteIconUI.innerText = 'Delete'
            deleteIconUI.setAttribute('class','btn btn-outline-danger mx-3');
            deleteIconUI.setAttribute("userid", key);
            deleteIconUI.addEventListener("click", deleteButtonClicked);
        })
    })
};

function userClicked(event) {
    userRef.on("value", snap => {
        snap.forEach(childSnap => {
            let userKey = childSnap.key;
            let userData = childSnap.val();

            let $p = document.createElement("p");
            $p.innerHTML = "Clé utilisateur : " + userKey + "<br>" + "Données utilisateur : " + JSON.stringify(userData);
          
            userDetailUI.appendChild($p);
        });
    });
};

function editButtonClicked(event) {
};

function saveUserBtnClicked() {
};

function deleteButtonClicked(event) {
}