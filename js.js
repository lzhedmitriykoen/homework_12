/*task 1*/

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
    alert(getRandomInt(10000000));
}

/*task 2*/
function passwords(a,b) {
    var a = prompt('enter password','Enter password 1');
    var b = prompt('confirm password', 'Enter password 2');

    if (a===b){
        alert('Good passwords');
    } else{
        alert("Bad passwords");
    }
}

/*task 3*/


