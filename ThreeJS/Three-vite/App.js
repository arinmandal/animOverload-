import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(1, 1, 1)
const canvas = document.querySelector('canvas');
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(window.innerWidth, window.innerHeight);

const controls = new OrbitControls(camera, renderer.domElement);

// const boxGeometry = new THREE.BoxGeometry(2, 1, 2);
// const boxMaterial = new THREE.MeshStandardMaterial({ color: "red" });
// const box = new THREE.Mesh(boxGeometry, boxMaterial);
// scene.add(box);

// camera.position.z = 2;

// 3D Model 
const loader = new GLTFLoader();
loader.load('./porsche.glb', function (gltf) {
  gltf.scene.scale.set(0.5, 0.5, 0.5);  // scale the model down to 50% of its original size
  scene.add(gltf.scene);
})


// HDRi light from external resource

const hdrLoader = new RGBELoader();
hdrLoader.load('https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/zwartkops_pit_1k.hdr', function (texture) {

  texture.mapping = THREE.EquirectangularReflectionMapping;
  scene.environment = texture;
  // scene.background = texture;

});

// lights
const Ambientlights = new THREE.AmbientLight("black", 1);
scene.add(Ambientlights);

// Direction Light

const directionalLight = new THREE.DirectionalLight("white", 3);
directionalLight.position.set(2, 2, 2);
scene.add(directionalLight);

// const helper = new THREE.DirectionalLightHelper( directionalLight, 15 );
// scene.add( helper );
// Point Light

const pointLight = new THREE.PointLight("white", 1, 10);
pointLight.position.set(1, -1.34, 1);
scene.add(pointLight);

window.addEventListener('resize', () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
})

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}

animate();
