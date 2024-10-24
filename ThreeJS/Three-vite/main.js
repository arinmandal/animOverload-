import * as THREE from 'three';
import { GUI } from 'lil-gui';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// Box Geometry
// const geometry = new THREE.BoxGeometry(1, 1, 1);
// const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
// const cube = new THREE.Mesh(geometry, material);
// scene.add(cube);

// sphere
// const geometry = new THREE.SphereGeometry( 1, 10, 10 );
// const material = new THREE.MeshBasicMaterial( { color: 'crimson', wireframe: true } );
// const sphere = new THREE.Mesh(geometry, material);
// scene.add(sphere);
// camera.position.z = 5;

// lights
const Ambientlights = new THREE.AmbientLight("White", 1);
scene.add(Ambientlights);

// Direction Light

const directionalLight = new THREE.DirectionalLight("red", 3);
directionalLight.position.set(2, 2, 2);
scene.add(directionalLight);

const helper = new THREE.DirectionalLightHelper( directionalLight, 15 );
scene.add( helper );
// Point Light

const pointLight = new THREE.PointLight("yellow", 1, 10);
pointLight.position.set(1, -1.34, 1);
scene.add(pointLight);

const sphereSize = 1;
const pointLightHelper = new THREE.PointLightHelper( pointLight, sphereSize );
scene.add(pointLightHelper);



// Texture
let loader = new THREE.TextureLoader();
let color = loader.load("./paperbox/color.jpg");
let roughness = loader.load("./paperbox/roughness.jpg");
let normal = loader.load("./paperbox/normal.jpg");
let height = loader.load("./paperbox/height.jpg");

// how to add texture to scene
const geometry = new THREE.BoxGeometry(2, 1, 2);
const material = new THREE.MeshStandardMaterial({ map: color, roughness: roughness, metalness: 0.2, normalMap: normal });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);
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


// GUI Setup
const gui = new GUI();
// Material Settings
// Material Settings
const materialFolder = gui.addFolder('Material Settings');
materialFolder.add(material, 'metalness', 0, 1, 0.01);
materialFolder.add(material, 'roughness', 0, 1, 0.01);

// Mesh Settings
const meshFolder = gui.addFolder('Mesh Settings');
meshFolder.add(cube.scale, 'x', 0.1, 5, 0.1).name('Scale X');
meshFolder.add(cube.scale, 'y', 0.1, 5, 0.1).name('Scale Y');
meshFolder.add(cube.scale, 'z', 0.1, 5, 0.1).name('Scale Z');
function animate() {
  window.requestAnimationFrame(animate)
  // cube.rotation.x += 0.01;
  // cube.rotation.y += 0.01;
  controls.update();
  renderer.render(scene, camera);

}
animate()