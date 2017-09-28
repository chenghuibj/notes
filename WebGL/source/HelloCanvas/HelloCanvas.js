function main(){

  var canvas = document.getElementById('webgl');

  var gl = getWebGLContext(canvas);

  if(!gl){
    console.log('Failed to get the rendering context for WebGL');
    return false;
  }

  gl.clearColor(1, 0, 0, 1);
  gl.clear(gl.COLOR_BUFFER_BIT);

}
