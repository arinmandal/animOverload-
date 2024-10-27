import '/style.css'
import * as THREE from 'three';
// import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { RGBELoader } from 'three/addons/loaders/RGBELoader.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { RGBShiftShader } from 'three/addons/shaders/RGBShiftShader.js';
import gsap from 'gsap';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 3.5;
const canvas = document.getElementById('draw');
const renderer = new THREE.WebGLRenderer({
  canvas, antialias: true,
  alpha: true,
});

renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(window.innerWidth, window.innerHeight);


let model;
// Load the HDRI environment map
const rgbeLoader = new RGBELoader();
rgbeLoader.load(
  'https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/pond_bridge_night_1k.hdr', // Replace with your HDRI path
  (texture) => {
    texture.mapping = THREE.EquirectangularReflectionMapping;
    scene.environment = texture;

    // Optional: Set the background color of the scene
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1; // Adjust exposure as needed
    // scene.background = texture;

    // Load the 3D model
    const loader = new GLTFLoader();
    loader.load('./DamagedHelmet.gltf', (gltf) => {
      model = gltf.scene;
      scene.add(model);
    })
  },
);

// Post-processing setup
const composer = new EffectComposer(renderer);
const renderPass = new RenderPass(scene, camera);
composer.addPass(renderPass);

// Add RGBShiftShader pass
const rgbShiftPass = new ShaderPass(RGBShiftShader);
rgbShiftPass.uniforms['amount'].value = 0.0030; // Adjust the shift amount
composer.addPass(rgbShiftPass);


// const controls = new OrbitControls(camera, renderer.domElement);

window.addEventListener('resize', () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  composer.setSize(window.innerWidth, window.innerHeight);
})

window.addEventListener('mousemove', (e) => {
  if (model) {
    const x = (e.clientX / window.innerWidth) * 2 - 1;
    const y = -(e.clientY / window.innerHeight) * 2 + 1;
    // model.rotation.y = x * 0.5;
    // model.rotation.x = y * 0.5;
    gsap.to(model.rotation, {
      x: y * 0.5,
      y: x * 0.5,
      ease: 'power2.Out',
      duration: 0.5,
    })
  }
})

function animate() {
  window.requestAnimationFrame(animate);
  // controls.update();
  renderer.render(scene, camera);
  composer.render();
}
animate();