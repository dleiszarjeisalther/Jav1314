(function(){let actionPerformed=false;var pogiako=document.getElementById('single_button673963e2177346');if (pogiako){pogiako.click();actionPerformed=true}var button=document.querySelector('button.btn.btn-primary[id*="single_button673"]');if(button){button.click();}var inputButton=document.getElementById('id_submitbutton');if(inputButton && inputButton.value=='Start attempt'){inputButton.click();actionPerformed=true}const lagarizz=document.querySelector('.btn.btn-primary[data-action="save"]');if(lagarizz){lagarizz.click();actionPerformed=true} else {alert("Button not found.")}const questionsAndAnswers=[{question:"Which method is used to draw a rectangle in Java's Graphics class?",answer:"drawRect()"},{question:"Which method is used to draw an oval shape in Java?",answer:"drawOval()"},{question:"How can you perform custom painting on a Swing component?",answer:"Override the paintComponent() method in JPanel"},{question:"Which of the following is true about the drawString() method in the Graphics class?",answer:"It displays text at a specified location on the component."},{question:"What happens if you call the repaint() method in a component?",answer:"The component's paint method will be invoked automatically."},{question:"How do you enable anti-aliasing in Java's Graphics2D class?",answer:"Use the setRenderingHint() method with RenderingHints.KEY_ANTIALIASING"},{question:"What is the purpose of the Graphics class in Java?",answer:"To perform drawing operations on components"},{question:"What is the starting point of the coordinate system in Java's Graphics class?",answer:"Top-left corner of the component"},{question:"How can you set the color used for drawing in the Graphics class?",answer:"By calling the setColor() method with a Color object"},{question:"What is the primary advantage of using the Graphics2D class over the Graphics class?",answer:"It provides methods for advanced graphics operations such as transformations and anti-aliasing."},{question:"Which method is used to draw a rectangle in Java's Graphics class?",answer:"drawRect()"},{question:"Which method is used to draw an oval shape in Java?",answer:"drawOval()"},{question:"How can you perform custom painting on a Swing component?",answer:"Override the paintComponent() method in JPanel"},{question:"Which of the following is true about the drawString() method in the Graphics class?",answer:"It displays text at a specified location on the component."},{question:"What happens if you call the repaint() method in a component?",answer:"The component's paint method will be invoked automatically."},{question:"How do you enable anti-aliasing in Java's Graphics2D class?",answer:"Use the setRenderingHint() method with RenderingHints.KEY_ANTIALIASING"},{question:"What is the purpose of the Graphics class in Java?",answer:"To perform drawing operations on components"},{question:"What is the starting point of the coordinate system in Java's Graphics class?",answer:"Top-left corner of the component"},{question:"How can you set the color used for drawing in the Graphics class?",answer:"By calling the setColor() method with a Color object"},{question:"What is the primary advantage of using the Graphics2D class over the Graphics class?",answer:"It provides methods for advanced graphics operations such as transformations and anti-aliasing."},{question:"What does the drawLine() method in the Graphics class do?",answer:"Draws a line between two specified points"},{question:"What is the role of the paintComponent() method in Java Swing?",answer:"To draw custom graphics on a component"},{question:"How can you draw a filled rectangle using the Graphics class?",answer:"Use the fillRect() method"},{question:"How can you clear the drawing area in a Java Swing component?",answer:"Fill the area with the background color using fillRect()"},{question:"Which method in the Graphics class is used to draw an arc?",answer:"drawArc()"},{question:"How can you create smooth edges on shapes in Java graphics?",answer:"Use the setRenderingHint() method with anti-aliasing enabled"},{question:"How can you rotate a shape using the Graphics2D class?",answer:"Use the rotate() method to specify the rotation angle"},{question:"Which of the following statements is true about custom painting in Java?",answer:"The paintComponent() method is used to customize how a component is rendered."},{question:"What does the setColor() method in the Graphics class do?",answer:"Specifies the color used for subsequent drawing operations"},{question:"How do you draw text on a component using the Graphics class?",answer:"Call the drawString() method with the text and coordinates"},{question:"Which method would you use to draw a filled shape?",answer:"fillRect(), fillOval(), or fillPolygon()"},{question:"What is the purpose of the fillRect() method in Java's Graphics class?",answer:"To draw and fill a rectangle with the current color"},{question:"How do you draw a square using the drawRect() method in Java?",answer:"Specify equal width and height for the rectangle"},{question:"What is the function of the setColor() method in the Graphics class?",answer:"To set the color used for subsequent drawing operations"},{question:"Which parameter is NOT required for the drawRect() method?",answer:"Color"},{question:"Which method is used to draw a filled circle in Java?",answer:"fillOval()"},{question:"How can you draw a triangle in Java?",answer:"Use the drawPolygon() method with three coordinate points"},{question:"What does the drawOval() method do in Java?",answer:"Draws the outline of an oval within a specified bounding rectangle"},{question:"How can you draw a regular polygon, such as a hexagon, using Java's Graphics class?",answer:"Use the drawPolygon() method with an array of x and y coordinates"},{question:"What does the drawLine() method in Java do?",answer:"Draws a straight line between two specified points"},{question:"Which of the following methods would you use to draw text on a component?",answer:"drawString()"},{question:"What is the purpose of the fillRect() method?",answer:"To fill a rectangular area with the current drawing color"},{question:"What is required to draw a triangle using Java's Graphics class?",answer:"Use the drawPolygon() method with three points"},{question:"What must be true for the drawOval() method to draw a perfect circle?",answer:"The bounding rectangle's width and height must be equal"},{question:"What happens when you use the fillPolygon() method with an array of points?",answer:"A filled shape is created based on the specified points"},{question:"Which method allows you to draw connected lines to form a closed shape?",answer:"drawPolygon()"},{question:"Which method would you use to draw a filled rectangle?",answer:"fillRect()"},{question:"How can you draw a square using Java's Graphics class?",answer:"Use the fillRect() method with equal width and height"},{question:"How can you set the color used for drawing shapes?",answer:"Use the setColor() method with a Color object"},{question:"What does the drawLine() method do in Java?",answer:"Draws a line between two specified points"},{question:"What does the drawArc() method require to draw a partial circle?",answer:"Width, height, and the number of degrees for the arc"},{question:"What does the drawRoundRect() method do?",answer:"Draws a rectangle with rounded corners"},{question:"Which method would you use to set the current drawing color in Java?",answer:"setColor()"},{question:"What is the difference between drawOval() and fillOval() in Java?",answer:"drawOval() draws the outline, while fillOval() fills the oval with color"},{question:"How do you ensure a shape is redrawn correctly when the window is resized?",answer:"Override the paintComponent() method"},{question:"Which method would you use to draw a filled triangle?",answer:"fillPolygon()"},{question:"What happens if you call the setColor() method before drawing a shape?",answer:"The shape is drawn with the specified color"},{question:"How can you create a filled shape with any number of sides?",answer:"Use the fillPolygon() method with an array of x and y coordinates"},{question:"How can you change the appearance of a shape's edges to be smoother?",answer:"Enable anti-aliasing using the Graphics2D class"},{question:"How can you draw a regular hexagon in Java?",answer:"Use the drawPolygon() method with six coordinate points"},{question:"How do you ensure that the drawn shapes are updated correctly when the window is resized?",answer:"Use the paintComponent() method and call super.paintComponent(g)"},{question:"What is the effect of calling fillPolygon() in the Graphics class?",answer:"It fills a polygon with the current drawing color"},{question:"What does the drawPolygon() method do in Java?",answer:"Draws a series of connected lines to form a closed shape"},{question:"How can you draw a rectangle with rounded corners in Java?",answer:"Use the drawRoundRect() method"},{question:"How can you draw multiple connected lines to create a complex shape?",answer:"Use the drawPolygon() method"},{question:"How can you draw a shape with a gradient color in Java?",answer:"Use the Graphics2D class with GradientPaint"},{question:"Which method is used to draw a filled oval?",answer:"fillOval()"},{question:"What does the drawArc() method do in Java?",answer:"Draws an arc of an ellipse defined by a bounding rectangle"},{question:"How do you draw a filled square using Java's Graphics class?",answer:"Use the fillRect() method with equal width and height"},{question:"How can you set the current color for drawing shapes in Java?",answer:"Call the setColor() method with a Color object"},{question:"What is the result of calling the drawRect() method in the Graphics class?",answer:"It draws the outline of a rectangle."},{question:"What is the main function of the Graphics class in Java?",answer:"Creating and drawing graphics on components"},{question:"What happens if you call super.paintComponent(g) in a custom paintComponent() method?",answer:"It clears the drawing area before custom painting."},{question:"How can you change the drawing color in Java's Graphics class?",answer:"Use the setColor() method with a Color object."},{question:"How do you perform custom painting in Java Swing?",answer:"Override the paintComponent() method of JPanel"},{question:"What does the setRenderingHint() method in Graphics2D do?",answer:"It enables features such as anti-aliasing and text smoothing."},{question:"Which method in Graphics is used to draw text?",answer:"drawString()"},{question:"What is the coordinate origin in Java's Graphics class?",answer:"Top-left corner of the component"},{question:"How can you add smooth edges to drawn shapes in Java?",answer:"Enable anti-aliasing using the Graphics2D class"},{question:"How do you set the font for drawing text in Java's Graphics class?",answer:"Use the setFont() method"},{question:"What is the difference between drawRect() and fillRect() methods in Java?",answer:"drawRect() draws the border, while fillRect() fills the rectangle with color."},{question:"Which of the following is NOT a valid method in the Graphics class?",answer:"drawRectangle()"},{question:"Which method would you use to draw a line between two points?",answer:"drawLine()"},{question:"What does overriding the paintComponent() method in a JPanel allow you to do?",answer:"Customize the drawing of the component"},{question:"What does anti-aliasing do in computer graphics?",answer:"It improves the quality of images by smoothing jagged edges."},{question:"How can you ensure that custom painting is updated correctly when a component is resized?",answer:"Use the paintComponent() method and call super.paintComponent(g)"},{question:"What is the purpose of the fillOval() method in Java?",answer:"To fill the oval with the current drawing color"},{question:"How can you rotate a shape using the Graphics2D class?",answer:"Use the rotate() method with an angle value"},{question:"What happens when you call repaint() on a Java component?",answer:"The component's paintComponent() method is called to redraw it."},{question:"How can you draw a circle using the drawOval() method?",answer:"Use equal width and height for the bounding rectangle."}];questionsAndAnswers.forEach(qa => {const questionElem=Array.from(document.querySelectorAll(".qtext")).find(el => el.textContent.includes(qa.question));if(questionElem){const answerElem=Array.from(questionElem.parentNode.querySelectorAll("input[type=radio]")).find(input => input.nextElementSibling.textContent.includes(qa.answer));if(answerElem){answerElem.click();actionPerformed=true}}});const nextNav=document.getElementById('mod_quiz-next-nav');if(nextNav){nextNav.click();actionPerformed=true}if(!actionPerformed){var element=document.getElementById('next-activity-link');if(element){element.click()} else {alert("Element not found!")}}})();
