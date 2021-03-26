//console.log(THREE);
const renderer = new THREE.WebGLRenderer();
const scene = new THREE.Scene();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  1,
  500
);
camera.position.set(0, 0, 100);
camera.lookAt(0, 0, 0);

const LineMaterial = new THREE.LineBasicMaterial({ color: 0x00ffff });
const points = [];
points.push(new THREE.Vector3(-10, 0, 0));
points.push(new THREE.Vector3(0, 10, 0));
points.push(new THREE.Vector3(10, 0, 0));
points.push(new THREE.Vector3(-10, 0, 0));
// for(let i=0;i<10;i++){
//     points.push( new THREE.Vector3(5*i,-10,0));
//}

const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
const line = new THREE.Line(lineGeometry, LineMaterial);
scene.add(line);

const light1 = new THREE.PointLight({ color: 0xffffff });
scene.add(light1);
light1.position.x = 50;
light1.position.y = -30;
light1.position.z = 10;
const light2 = new THREE.PointLight({ color: 0xffffff });
light2.position.set(-50, 50, 20);
scene.add(light2);
// const near = 70;
// const far= 110;
// const color='black';
// scene.fog = new THREE.Fog(color, near, far);
// scene.background= new THREE.Color(color);
const colorWhite = new THREE.Color("rgb(255, 255, 255)");

const objectGeometry = new THREE.OctahedronGeometry(20, 0);
const objectMaterial = new THREE.MeshPhongMaterial({
  color: colorWhite,
  shininess: 90,
});
const object = new THREE.Mesh(objectGeometry, objectMaterial);
object.position.x = 0;
object.position.y = -10;
object.position.z = 0;

const objectGeometry2 = new THREE.TorusGeometry(10, 3, 16, 100);
const object2 = new THREE.Mesh(objectGeometry2, objectMaterial);
object2.position.x = 50;
object2.position.y = 0;
object2.position.z = 0;

const objectGeometry3 = new THREE.TorusGeometry(10, 3, 16, 100);
const object3 = new THREE.Mesh(objectGeometry3, objectMaterial);
object3.position.x = -50;
object3.position.y = 0;
object3.position.z = 0;

let controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.addEventListener("change", renderer);
const animate = () => {
  requestAnimationFrame(animate);
  object.rotation.x += -0.01;
  object.rotation.y += -0.01;
  object.rotation.z += -0.015;

  object2.rotation.x += -0.01;
  object2.rotation.y += -0.01;
  object2.rotation.z += -0.015;

  object3.rotation.x += -0.01;
  object3.rotation.y += -0.01;
  object3.rotation.z += -0.015;

  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.render(scene, camera);
};

scene.add(object);
scene.add(object2);
scene.add(object3);
renderer.render(scene, camera);
animate();
