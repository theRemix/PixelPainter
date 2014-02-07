function PixelPainter(width, height, pixel_size){
  this.width = width;
  this.height = height;
  this.pixel_size = pixel_size;

  // Array<Array<Pixel>>
  this.grid = [];

  this.buildGrid = function () {
    
  };

  this.buildToolbar = function () {
    
  };

  // return pixel information in json
  this.toJson = function () {
    
  };

  // returns a JQuery obj
  this.render = function () {
    
  };


}

function Pixel (id, x, y, color) {
  this.id = id;
  this.x = x;
  this.y = y;
  this.color = color;

  this.changeColor = function(color){

  };

  this.clear = function(){

  };

  // returns a JQuery obj
  this.render = function(){

  };
}


function Toolbar(){

  // Array<Array<ColorButton>>
  this.palette = [];

  this.clear_button = new ClearButton();

  this.reset_button = new ResetButton();

   // returns a JQuery obj
  this.render = function(){

  };

}

function Button(){

  // idk yet
  this.click = null;

}

function ColorButton(){

}
ColorButton.prototype = new Button();

function ClearButton(){

}
ClearButton.prototype = new Button();

function ResetButton(){

}
ResetButton.prototype = new Button();





$(document).ready(function () {
  
});