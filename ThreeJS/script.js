// create scene
let scene = new THREE.Scene();
// create camera
let camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, .1, 100);
camera.position.z = 5;
// adding camera to scene
scene.add(camera);

// create geometry
let geometry = new THREE.BoxGeometry(1, 1, 1);
// create material
let material = new THREE.MeshBasicMaterial({ color: "yellow" });
// create mesh
let mesh = new THREE.Mesh(geometry, material);

// ! Transformations
//*  position
// mesh.position.y = -1;
// mesh.position.x = 1;
// mesh.position.z = 0.6;
// * Rotation
// mesh.rotation.y = Math.PI / 4;
// mesh.rotation.x = Math.PI / 4;
//* scale
// mesh.scale.z = 2.5;
// add mesh to scene



scene.add(mesh);
// get canvas

let canvas = document.querySelector('#draw')

// create renderer

let renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.render(scene, camera);

let clock = new THREE.Clock();
function animate() {
  window.requestAnimationFrame(animate);
  renderer.render(scene, camera);
  // mesh.rotation.x += 0.01;
  // mesh.rotation.y += 0.01;
  mesh.rotation.y = clock.getElapsedTime() * 1; 
  mesh.rotation.x = clock.getElapsedTime() * 1; 
}

animate();