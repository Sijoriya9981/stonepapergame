// function ranch(arr){
//     const randind = Math.floor(Math.random()*arr.length);
//     const item =  arr[randind];
//     return item;

function play() {
    let con = document.getElementById("container");
    con.hidden = false;
    let startbtn = document.getElementById("startbtn");
    startbtn.hidden = true;
}

const arr = ['Rock', 'Paper', 'Scissor'];
var k = -1;
var count_game = 0, count_u = 0, count_c = 0;
// }
function iot() {
    return ranch(arr);
}
function ranch(arr) {

    // get random index value
    const randomIndex = Math.floor(Math.random() * arr.length);

    // get random item
    const item = arr[randomIndex];

    return item;
}

var tem = 0;
function r() {
    let user = 1;
    k = iot();
    count_game++;
    if (count_game <= 3) {
        show(user);
    }

}
function p() {
    let user = 2;
    k = iot();
    count_game++;
    if (count_game <= 3) {
        show(user);
    }
}
function s() {
    let user = 3;
    k = iot();
    count_game++;
    if (count_game <= 3) {
        show(user);
    }
}
let box1 = document.getElementById("box1");
function box() {
    box1.style.display = "flex";
}

function show(user) {



    let u = arr[user - 1];

    document.getElementById("box1").innerHTML += "<br><br>User's choice: " + u + "<br>";
    document.getElementById("box1").innerHTML += "Computer's choice: " + k;
    if (u == "Rock") {
        if (k == arr[0]) {
            //  console.log("Draw!");
            document.getElementById("box1").innerHTML += "<br><b>Draw</b>";

        }
        else if (k == arr[1]) {
            // console.log("Computer won!");
            document.getElementById("box1").innerHTML += "<br><b>Computer won!</b><br";
            count_c++;
        }
        else {
            // console.log("User won!");
            document.getElementById("box1").innerHTML += "<br><b>User won!</b><br";
            count_u++;

        }
    }
    else if (u == "Paper") {
        if (k == arr[0]) {
            // console.log("User won!");
            document.getElementById("box1").innerHTML += "<br><b> User won!</b><br";
            count_u++;

        }
        else if (k == arr[1]) {
            // console.log("Draw!");
            document.getElementById("box1").innerHTML += "<br><b> Draw</b><br";
        }
        else {
            // console.log("Computer won!");
            document.getElementById("box1").innerHTML += "<br><b>Computer won!</b><br";
            count_c++;
        }
    }
    else {
        if (k == arr[0]) {
            // console.log("Computer won!");
            document.getElementById("box1").innerHTML += "<br><b>Computer won!</b><br";
            count_c++;
        }
        else if (k == arr[1]) {
            // console.log("User won!");
            document.getElementById("box1").innerHTML += "<br><b>User won!</b><br";
            count_u++;
        }
        else {
            // console.log("Draw!");
            document.getElementById("box1").innerHTML += "<br><b>Draw</b><br";
        }
    }
    let row = document.querySelectorAll("td");

    row[0].innerHTML = count_c;
    row[1].innerHTML = count_u;


    let cel_u = document.getElementById("cel_u");
    let r = document.getElementById("result");
    box();
    if (count_game >= 3) {
        if (count_c > count_u) {
            r.hidden = false;
            //  r.innerHTML = "<b>YOU LOSE</b>";
            //  r.style.backgroundColor="red";
            let cel_c = document.getElementById("cel_c");
            cel_c.style.display = "block";
        }
        else if (count_c < count_u) {
            r.hidden = false;
            // r.innerHTML = "<b>YOU WON</b>"
            cel_u.style.display = "block";

        }
        else {
            r.hidden = false;
            // r.innerHTML = "<b>Draw</b>"
            let cel_d = document.getElementById("cel_d");
            cel_d.style.display = "block";
            // r.style.backgroundcolor = "yellow";
        }
        let regame = document.getElementById("reset");
        regame.hidden = false;
    }

}
function load()

{
    location.reload();

}


