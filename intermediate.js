class hotel {
	hotelName="";
	numberOfNights="";
	address="";
	image="";
constructor(hotelName, address, image){
		this.hotelName=hotelName;
		this.numberOfNights=Math.round(Math.random()*10);
		this.address=address;
		this.image=image;
	}
}

var hotel1 = new hotel ("Hilton", "Holzweg 1", "img/hotel1.jpg")

var hotel2 = new hotel ("4Seasons", "Lattenzaunweg 3", "img/hotel2.jpg")

var hotel3 = new hotel ("CheesecakeFactory", "Irgendwoandersgasse 666", "img/hotel3.jpg")

document.getElementById("dis4").innerHTML = hotel1.hotelName+"<br>"+hotel1.address
document.getElementById("dis4").style.backgroundImage = hotel1.image