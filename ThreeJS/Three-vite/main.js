import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// Box Geometry
// const geometry = new THREE.BoxGeometry(1, 1, 1);
// const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
// const cube = new THREE.Mesh(geometry, material);
// scene.add(cube);

// sphere
const geometry = new THREE.SphereGeometry( 1, 10, 10 ); 
const material = new THREE.MeshBasicMaterial( { color: 'crimson', wireframe: true } ); 
const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);
camera.position.z = 5;

const canvas = document.querySelector('canvas');
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(window.innerWidth, window.innerHeight);

window.addEventListener('resize', () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
})
// orbit controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
// controls.autoRotate = true;
function animate() {
  window.requestAnimationFrame(animate)
  sphere.rotation.x += 0.01;
  sphere.rotation.y += 0.01;
  controls.update();
  renderer.render(scene, camera);

}
animate()