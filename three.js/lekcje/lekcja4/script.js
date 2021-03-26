const renderer = new THREE.WebGLRenderer({
  antialias: true,
  alpha: true,
});
const scene = new THREE.Scene();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

let geometry = new THREE.TorusGeometry(0.7, 0.2, 16, 90);

// loading
const textureLoader = new THREE.TextureLoader();
const textura = textureLoader.load('height2.jpg');


//Materialy
const material = new THREE.MeshStandardMaterial();
material.metalness = 0.5;
material.roughness = 0.2;
material.normalMap = textura;
material.color = new THREE.Color(0xffff00);

const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

const color='black';
scene.background= new THREE.Color(color);

const pointLight = new THREE.PointLight(0x00ffff, 2);
pointLight.position.x = 0;
pointLight.position.y = 0;
pointLight.position.z = 0;
scene.add(pointLight);

const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

window.addEventListener("resize", () => {
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.1,
  100
);
camera.position.set(0, 0, 2);
camera.lookAt(0, 0, 0);
scene.add(camera);

clock = new THREE.Clock();

const tick = () => {
  const elTime = clock.getElapsedTime();

  sphere.rotation.x = 0.5 * elTime;

  renderer.render(scene, camera);
  window.requestAnimationFrame(tick);
};
tick();
