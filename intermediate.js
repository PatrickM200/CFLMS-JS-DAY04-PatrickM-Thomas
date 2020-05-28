var nightstay = prompt ("How many nights do you want to stay?");


class hotel {
	hotelName="";
	numberOfNights="";
	address="";
	image="";
	available="";
constructor(hotelName, address, image){
		this.hotelName=hotelName;
		this.numberOfNights=Math.round(Math.random()*10);
		this.address=address;
		this.image=image;

	if (nightstay >this.numberOfNights) {
			this.available="<br><br><br>No rooms available!";
	}
		else {
			this.available="<br><br><br><button>Reserve now!</button>";
		}
	}
}
var hotel1 = new hotel ("Hilton", "Holzweg 1", "img/hotel1.jpg");
var hotel2 = new hotel ("4Seasons", "Lattenzaunweg 3", "img/hotel2.jpg");
var hotel3 = new hotel ("CheesecakeFactory", "Irgendwoandersgasse 666", "img/hotel3.jpg");

document.getElementById("dis4").innerHTML = hotel1.hotelName+"<br>"+hotel1.address+hotel1.available;
document.getElementById("dis4").style.backgroundImage = "url("+hotel1.image+")";
console.log(hotel1.numberOfNights);

document.getElementById("dis1").innerHTML = hotel2.hotelName+"<br>"+hotel2.address+hotel2.available;
document.getElementById("dis1").style.backgroundImage = "url("+hotel2.image+")";
console.log(hotel2.numberOfNights);

document.getElementById("dis2").innerHTML = hotel3.hotelName+"<br>"+hotel3.address+hotel3.available;
document.getElementById("dis2").style.backgroundImage = "url("+hotel3.image+")";
console.log(hotel3.numberOfNights);

