      // works out the X, Y position of the click inside the canvas from the X, Y position on the page
      function getPosition(mouseEvent, sigCanvas) {
         var x, y;
         if (mouseEvent.pageX != undefined && mouseEvent.pageY != undefined) {
            x = mouseEvent.pageX;
            y = mouseEvent.pageY;
         } else {
            x = mouseEvent.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
            y = mouseEvent.clientY + document.body.scrollTop + document.documentElement.scrollTop;
         }
 
         return { X: x - sigCanvas.offsetLeft, Y: y - sigCanvas.offsetTop };
      }

	  function actualText(_x,_y)
	  {
	  		var sigCanvas = document.getElementById("canvasSignature");
			var context = sigCanvas.getContext("2d");		

			context.textAlign = "center";	
		
			context.font = "bold 18px Arial";
			context.fillStyle = pencolour;
					
			var lines = fragmentText(inputtext, 212 - parseInt(18,0));
			lines.forEach(function(line, i) 
			{
				context.fillText(line, _x, ((i + 0 ) * parseInt(18,0))+_y);
			});	
			
	  }
	  
	  
	  
	        function drawLine(mouseEvent, sigCanvas, context) {
 
         var position = getPosition(mouseEvent, sigCanvas);
 
         context.lineTo(position.X, position.Y);
		 context.strokeStyle = pencolour;
         context.stroke();
      }
 

      function finishDrawing(mouseEvent, sigCanvas, context) {
         // draw the line to the finishing coordinates
         drawLine(mouseEvent, sigCanvas, context);
 
         context.closePath();
 
         // unbind any events which could draw
         $(sigCanvas).unbind("mousemove")
                     .unbind("mouseup")
                     .unbind("mouseout");
      }


	  var pensize = 1;
	  function SetPenSize(s)
	  {
	    var divid = pensize + "pix";
		var div = document.getElementById(divid);
		div.style.background = 'lightgray';
		div.style.color = 'black';
		pensize = s;
		
	    divid = pensize + "pix";
		div = document.getElementById(divid);
		div.style.background = 'green';
		div.style.color = 'white';
	  
	  }
	  
	  var pencolour = 'black';
	  function SetColour(c)
	  {
	    var divid = pencolour + "pen";
		var div = document.getElementById(divid);
		div.style.background = 'lightgray';
		div.style.color = 'black';
		pencolour = c;
		
	    divid = pencolour + "pen";
		div = document.getElementById(divid);
		div.style.background = c;
		if(c=='white')
			div.style.color = 'black';
		else
			div.style.color = 'white';

		
		
		
	  }
	  
	  function haveLoaded()
	  {
		SetColour('black');
		SetPenSize(2);	
	  }
	  
	  function ClearDisplay()
	  {
		var sigCanvas = document.getElementById("canvasSignature");
		var context = sigCanvas.getContext("2d");
		context.strokeStyle = pencolour;
		 
		 // fill rect with bg...
		context.fillStyle = pencolour;
		context.fillRect(0,0,212,104);
	  }
	  
	  function UploadImage()
	  {
         var sigCanvas = document.getElementById("canvasSignature");


         var formdata = document.getElementById("imagedata");


		var file = toDataURL(sigCanvas);

		 formdata.value = (file);

	  }

	  
	  function toDataURL(canvas) {		

		var buffer = new Uint8Array(this.toArrayBuffer(canvas));

		
		return  buffer;
	}

	
	

