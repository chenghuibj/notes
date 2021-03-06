var VSHADER_SOURCE =
  'attribute vec4 a_Position;\n' +
  'void main(){\n' +
  ' gl_Position = a_Position;\n' +
  ' gl_PointSize = 10.0;\n' +
  '}\n';

var FSHADER_SOURCE =
  'precision mediump float;\n' +
  'uniform vec4 u_FragColor;\n' +
  'void main(){\n' +
  ' gl_FragColor = u_FragColor;\n' +
  '}\n';

function main(){
  var canvas = document.getElementById('webgl');

  var gl = getWebGLContext(canvas);
  if(!gl){
    console.log('Failed to get the rendering context for WebGL');
    return false;
  }

  if(!initShaders(gl,VSHADER_SOURCE,FSHADER_SOURCE)){
    console.log('Failed to initialize shaders.');
    return;
  }

  gl.clearColor(0, 0, 0, 1);


  var a_Position = gl.getAttribLocation(gl.program, 'a_Position');

  var u_FragColor = gl.getUniformLocation(gl.program,'u_FragColor');

  canvas.onmousedown = function(ev){click(ev,gl,canvas,a_Position,u_FragColor);};
  gl.clear(gl.COLOR_BUFFER_BIT);

}

var g_points = [];
var g_colors = [];

function click(ev,gl,canvas,a_Position,u_FragColor){
  var x = ev.clientX;
  var y = ev.clientY;
  var rect = ev.target.getBoundingClientRect();
  x =((x- rect.left) - canvas.height/2)/(canvas.height/2);
  y = (canvas.width/2 - (y - rect.top))/(canvas.width/2);
  g_points.push(x);
  g_points.push(y);
  if(x>=0.0 && y >=0){
    g_colors.push([1.0,0.0,0.0,1.0]);
  } else if(x<0.0 && y<0.0){
    g_colors.push([0.0,1.0,0.0,1.0]);
  } else {
    g_colors.push([0.0,0.0,1.0,1.0]);
  }

  gl.clear(gl.COLOR_BUFFER_BIT);

  var len = g_points.length;
  for(var i=0;i<len;i+=2){
    var rgba = g_colors[i/2];
    gl.vertexAttrib3f(a_Position,g_points[i],g_points[i+1],0.0);
    gl.uniform4f(u_FragColor,rgba[0],rgba[1],rgba[2],rgba[3]);
    gl.drawArrays(gl.POINTS, 0, 1);
  }
}
