function Card(point, suit){
  this.point = point;
  this.suit = suit;
}

Card.prototype.show = function() {
  console.log(this.point);
  console.log(this.suit);
};

Card.prototype.getImageUrl = function() {
  var url;
  if(this.point > 1 && this.point <= 10){
    url = "images/" + this.point + "_of_" + this.suit + ".png";
    console.log(url);
    // return "images/" + this.point + "_of_" + this.suit + ".png";
  }
  else if(this.point > 10){
    if(this.point === 11){
      url = "images/jack_of_" + this.suit + ".png";
      console.log(url);
      // return "images/jack_of_" + this.suit + ".png";
    }
    else if(this.point === 12){
      url = "images/queen_of_" + this.suit + ".png";
      console.log(url);
      // return "images/queen_of_" + this.suit + ".png";
    }
    else if(this.point === 13){
      url = "images/king_of_" + this.suit + ".png";
      console.log(url);
      // return "images/king_of_" + this.suit + ".png";
    }
  }
  else if(this.point === 1) {
    url = "images/ace_of_" + this.suit + ".png";
  }
  return url;

  // console.log("images/" + this.point + "_of_" + this.suit + ".png");
};

var myCard = new Card(2, 'diamonds');
var anotherCard = new Card(10, 'diamonds');

myCard.show();
myCard.getImageUrl();
