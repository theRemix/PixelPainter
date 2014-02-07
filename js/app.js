window.ALL_COLORS = [
  '#338899',
  '#002299',
  '#773300',
  '#880099',
  '#AA88FF',
  '#CC9933',
  '#F38899',
  '#F02299',
  '#F73300',
  '#F80099',
  '#FA88FF',
  '#FC9933',
  '#F38899',
  '#F02299',
  '#F73300',
  '#F80099',
  '#FA88FF',
  '#FC9933'
];

function PixelPainter(width, height, pixel_size){
  this.width = width;
  this.height = height;
  this.pixel_size = pixel_size;

  // store this in data-selected_color instead
  // this.selected_color = "#000000";

  // Array<Array<Pixel>>
  this.grid = [];

  // these elements gets rendered
  this.element = $('<div>'); // main container
  this.element.addClass("PixelPainter");
  this.element.data("selected_color", "#000000");

  this.grid_container = $('<div>'); // contains the grid pixels
  this.grid_container.attr("id", "grid_container");

  this.toolbar_container = $('<div>');
  this.toolbar_container.attr("id", "toolbar_container");

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

    // split the colors into 4 columns of colors

    var pixels_left = ALL_COLORS.length;
    var current_container = $('<div class="color_button_row">');
    while(pixels_left > 0){
      var index = ALL_COLORS.length-pixels_left;

      // create a button
      var colorButton = new ColorButton(ALL_COLORS[index],index);
      current_container.append(colorButton.render());

      // every fourth, add it to the toolbar_container, then create a new row
      if(index % 4 === 3){
        this.toolbar_container.append(current_container);
        current_container = $('<div class="color_button_row">');
      }

      pixels_left--;
    }

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
  this.buildToolbar();

  // add the grid_container to the main app
  this.element.append(this.grid_container);

  // add the toolbar to the main app
  this.element.append(this.toolbar_container);
}

function Pixel (id, x, y, color) {
  this.id = id + "_" + x + "_" + y;
  this.x = x;
  this.y = y;
  this.color = color;

  this.element = $('<div>');
  this.element.attr("id", this.id);
  this.element.addClass(id+"_pixel"); // grid_pixel
  if(this.color !== undefined){
    this.element.css("background-color", this.color);
  }

  // change color
  this.element.click(function(e){
    var pixelPainter = $(this).parents(".PixelPainter")[0];
    $(this).css("background-color", $(pixelPainter).data("selected_color"));
  });


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

function ColorButton(color,index){
  this.color = color;

  this.element = $('<div>');
  this.element.attr("id", this.id);
  this.element.addClass("color_button"); // grid_pixel
  if(this.color !== undefined){
    this.element.css("background-color", this.color);
  }

  this.element.click(function (e) {
    var pixelPainter = $(this).parents(".PixelPainter")[0];
    $(pixelPainter).data("selected_color", $(this).css("background-color"));
  });
  
  this.render = function () {
    return this.element;
  };

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
  
  $("#container").append(pixelPainter.render());
});