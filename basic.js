function display() {

    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var age = document.getElementById("age").value;
    var work = document.getElementById("work").value;
    var cbg = ["yellow", "purple", "brown"];

    document.getElementById("dis1").innerHTML = firstname;
    document.getElementById("dis2").innerHTML = lastname;
    document.getElementById("dis3").innerHTML = age;
    document.getElementById("dis4").innerHTML = work;

    if (firstname.length > 5) {
        document.getElementById("dis1").style.color = "green";
    } else {
        document.getElementById("dis1").style.color = "red";
    }
    if (lastname.length > 5) {
        document.getElementById("dis2").style.color = "green";
    } else {
        document.getElementById("dis2").style.color = "red";
    }

    document.getElementById("cbg").style.backgroundColor = cbg[document.getElementById("work").selectedIndex];
}