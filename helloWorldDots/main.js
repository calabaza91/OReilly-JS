(function() {
	'use strict'

//Install paper.js
	paper.install(window);
//Attach paper to canvas
	paper.setup(document.getElementById('mainCanvas'));

//Draw a green circle anywhere user clicks mouse

	var tool = new Tool();

	var c = Shape.Circle(200,200,80);
	c.fillColor = 'black';
	var text = new PointText(200,200);
	text.justification ='center';
	text.fillColor = 'white';
	text.fontSize = 20;
	text.content= 'hello world';


	tool.onMouseDown = function(event){
		var c = Shape.Circle(event.point.x, event.point.y, 20);
		c.fillColor = "green";
	};

	paper.view.draw();
}())
