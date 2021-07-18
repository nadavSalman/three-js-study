import './style.css'

import * as THREE from 'three';

/**
 * To actually be able to display anything with three.js, 
 * we need three things: scene, camera and renderer, so that we can render the scene with camera.
 */

const scene = new THREE.Scene();
// arg 1 : 
//The first attribute is the field of view. 
// FOV is the extent of the scene that is seen on the display at any given moment. The value is in degrees (75).
// arg 2 :
//The second one is the aspect ratio. You almost always want to use the width of the element divided by the height.
// arg 3 :
//The next two attributes are the near and far clipping plane. What that means, is that objects further away from the camera than the value of far or closer than near won't be rendered
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry();
/**
 * In addition to the geometry, we need a material to color it. 
 * Three.js comes with several materials, but we'll stick to the MeshBasicMaterial for now. 
 */
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

function animate() {
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}
animate();