# Pixel Painter

(side note, get SoulBlazer)  

classes  

### PixelPainter (main class)  
- new(width, height, pixel_size)
- grid
- buildGrid()
- buildToolbar()
- toJson()
- render() // returns a JQuery obj

### Pixel
- new(id, x, y, ?color)
- id
- x
- y
- color
- changeColor(color)
- clear()
- render() // returns a JQuery obj

### Toolbar
- palette (gird of color buttons)
- clear_button
- reset_button
- render() // returns a JQuery obj

### Button
- click() ?

### ColorButton < Button

### ClearButton < Button

### ResetButton < Button