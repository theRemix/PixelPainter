function PixelPainter(width, height, pixel_size){
  this.width = width;
  this.height = height;
  this.pixel_size = pixel_size;

  // Array<Array<Pixel>>
  this.grid = [];

  // these elements gets rendered
  this.element = $('<div>'); // main container
  this.grid_container = $('<div>'); // contains the grid pixels
  this.grid_container.attr("id", "grid_container");

  this.buildGrid = function () {

    // rows
    for (var i = 0; i < this.width; i++) {
      var row_div = $('<div>');
      row_div.addClass('grid_row');
      row_div.css({
          width : (this.pixel_size*this.width)+"px",
          height : this.pixel_size+"px"
        });
      this.grid[i] = [];

      // height
      for (var k = 0; k < this.height; k++) {
        this.grid[i][k] = new Pixel("grid", i, k);
        this.grid[i][k].element.css({
          width : this.pixel_size+"px",
          height : this.pixel_size+"px"
        });
        row_div.append(this.grid[i][k].render());
      }

      this.grid_container.append(row_div);

    }

  };

  this.buildToolbar = function () {
    
  };

  // return pixel information in json
  this.toJson = function () {
    
  };

  // returns a JQuery obj
  this.render = function () {
    
    return this.element;
  };


  // initialize
  this.buildGrid();

  // add the grid to the grid_container
  this.element.append(this.grid_container);
}

function Pixel (id, x, y, color) {
  this.id = id + "_" + x + "_" + y;
  this.x = x;
  this.y = y;
  this.color = color;

  this.element = $('<div>');
  this.element.attr("id", this.id);
  this.element.addClass(id+"_pixel"); // grid_pixel

  this.changeColor = function(color){

  };

  this.clear = function(){

  };

  // returns a JQuery obj
  this.render = function(){
    return this.element;
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
  var pixelPainter = new PixelPainter(5,5,15);
  console.log(pixelPainter.grid);
  $("#container").append(pixelPainter.render());
});