const canvas=document.querySelector('#lienzo')
const ctx=canvas.getContext('2d')

//CIELO(CUADRO)

//relleno de cuadrado
//ctx.fillRect(cx,cy,ancho,alto)
 
ctx.fillStyle='rgba(126,219,230,1)'
ctx.fillRect(0,0,500,500)

//borde de cuadrado 
//ctx.rect(cx,cy,ancho,alto)
ctx.lineWidth=9; 
ctx.strokeStyle="rgba(56,97,102,1)"
ctx.rect(0,0,500,500)
ctx.stroke()

//MONTAÑAS(LINEAS)

//comienzo a dibujar 
 ctx.beginPath()
 ctx.moveTo(0,200)

//coordenadas 
ctx.lineTo(100,100)
ctx.lineTo(100,100)
ctx.lineTo(300,300)
ctx.lineTo(300,300)
ctx.lineTo(400,200)
ctx.lineTo(400,200)
ctx.lineTo(500,300)
ctx.lineTo(500,300)
ctx.lineTo(500,500)
ctx.lineTo(500,500)
ctx.lineTo(0,500)
ctx.lineTo(0,500)
ctx.lineTo(0,200)




//estilo y linea
ctx.lineWidth=5
ctx.strokeStyle='rgba(230,199,161,1)'
ctx.stroke()

//estilo y relleno

ctx.fillStyle='rgba(102,83,65,1)'
ctx.fill()


//CIRCULOS(SOL)

//empezamos el trazo 
ctx.beginPath()
ctx.arc(400,100,27,0,2*Math.PI)

//rellenamos el circulo 
ctx.fillStyle="rgba(237,227,38,1)"
ctx.fill()

//borde al circulo 
ctx.lineWidth=8;
ctx.strokeStyle="yellow"
ctx.stroke()

//CUADRADO TRONCO DE ARBOL 
ctx.fillStyle='#40261A'
ctx.fillRect(90,400,20,100)

//CURVAS CUADRATICAS 

//empezando el trazo 
ctx.beginPath();
ctx.moveTo(50,400);
//dibujando la curva 
ctx.quadraticCurveTo(100,200,150,400)

//borde de linea 
ctx.lineWidth=7; 
ctx.strokeStyle='green'
ctx.stroke()

//relleno de curva 
ctx.fillStyle='green'
ctx.fill()


//cuadrado tronco arbol bezier
ctx.fillStyle='#40261A'
ctx.fillRect(290,400,20,100)

//CURVAS DE BEZIER -----------------------

ctx.beginPath()
ctx.moveTo(200,400)

ctx.bezierCurveTo(250,300,350,300,400,400)

//borde de la curva 
ctx.lineWidth=7;
ctx.strokeStyle='green'
ctx.stroke()

//rellenamos la curva 
ctx.fillStyle='green'
ctx.fill()

//ELLIPSES 
ctx.beginPath()
ctx.ellipse(370,478,40,20,Math.PI/1,0,2*Math.PI)
ctx.strokeStyle='darkgray'
ctx.stroke()
ctx.fillStyle='gray'
ctx.fill()


ctx.beginPath()
ctx.ellipse(420,458,40,20,Math.PI/2,0,2*Math.PI)
ctx.strokeStyle='darkgray'
ctx.stroke()
ctx.fillStyle='gray'
ctx.fill()

ctx.beginPath()
ctx.ellipse(460,468,40,20,Math.PI/4,0,2*Math.PI)
// ctx.strokeStyle='darkgray'
// ctx.stroke()

let gradient=ctx.createRadialGradient(450,450,20,450,450,60)
//  let gradient=ctx.createLinearGradient(420,420,480,480)
 gradient.addColorStop(0,'gray');
 gradient.addColorStop(1,"black");
 ctx.fillStyle=gradient

// ctx.fillStyle='gray'
ctx.fill()


