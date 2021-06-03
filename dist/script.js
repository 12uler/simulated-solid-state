const scene = new THREE.Scene();

//Camera
const camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 22;

//Renderer
const canvas = document.getElementById("canvas");
const renderer = new THREE.WebGLRenderer({
  canvas,
  alpha: true,
  antialias: true
});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//Lighting
const ambientLight = new THREE.AmbientLight(0xd1d1b6, 1.2);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.BasicShadowMap;
ambientLight.castShadows = true;
scene.add(ambientLight);

//Controls
const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.autoRotate = true;
controls.update();

//Textures
const red = new THREE.MeshPhongMaterial({ color: 0xd1282d }),
  black = new THREE.MeshPhongMaterial({ color: 0x000000 }),
  white = new THREE.MeshPhongMaterial({ color: 0xffffff });

//Geometries
const sphereGeo = new THREE.SphereGeometry(1, 16, 16),
  electron = new THREE.SphereGeometry(0.2, 16, 16),
  poleGeo = new THREE.CylinderGeometry(0.1, 0.1, 2.5, 32);

const electrons = {
  1: new THREE.Mesh(electron, black),
  2: new THREE.Mesh(electron, black)
};

const poles = {
  1: new THREE.Mesh(poleGeo, white),
  2: new THREE.Mesh(poleGeo, white),
  3: new THREE.Mesh(poleGeo, white),
  4: new THREE.Mesh(poleGeo, white),
  5: new THREE.Mesh(poleGeo, white),
  6: new THREE.Mesh(poleGeo, white),
  7: new THREE.Mesh(poleGeo, white),
  8: new THREE.Mesh(poleGeo, white),
  9: new THREE.Mesh(poleGeo, white),
  10: new THREE.Mesh(poleGeo, white),
  11: new THREE.Mesh(poleGeo, white),
  12: new THREE.Mesh(poleGeo, white),
  13: new THREE.Mesh(poleGeo, white),
  14: new THREE.Mesh(poleGeo, white),
  15: new THREE.Mesh(poleGeo, white),
  16: new THREE.Mesh(poleGeo, white),
  17: new THREE.Mesh(poleGeo, white),
  18: new THREE.Mesh(poleGeo, white),
  19: new THREE.Mesh(poleGeo, white),
  20: new THREE.Mesh(poleGeo, white)
};

const spheres = {
  1: new THREE.Mesh(sphereGeo, white),
  2: new THREE.Mesh(sphereGeo, red),
  3: new THREE.Mesh(sphereGeo, red),
  4: new THREE.Mesh(sphereGeo, red),
  5: new THREE.Mesh(sphereGeo, red),
  6: new THREE.Mesh(sphereGeo, red),
  7: new THREE.Mesh(sphereGeo, red),
  8: new THREE.Mesh(sphereGeo, red),
  9: new THREE.Mesh(sphereGeo, red),
  10: new THREE.Mesh(sphereGeo, red),
  11: new THREE.Mesh(sphereGeo, red),
  12: new THREE.Mesh(sphereGeo, red),
  13: new THREE.Mesh(sphereGeo, red)
};

//Positioning
spheres[1].position.x = 0;
spheres[2].position.y = 3;
spheres[3].position.x = -3;
spheres[4].position.y = -3;
spheres[5].position.x = 3;

spheres[6].position.x = -3;
spheres[6].position.z = 3;
spheres[7].position.y = 3;
spheres[7].position.z = 3;
spheres[8].position.x = 3;
spheres[8].position.z = 3;
spheres[9].position.y = -3;
spheres[9].position.z = 3;

spheres[10].position.x = 3;
spheres[10].position.z = -3;
spheres[11].position.x = -3;
spheres[11].position.z = -3;
spheres[12].position.y = -3;
spheres[12].position.z = -3;
spheres[13].position.y = 3;
spheres[13].position.z = -3;

//"white sphere" poles
poles[1].position.y = 1;
poles[2].position.x = 1;
poles[2].rotation.z = 1.57;
poles[3].position.x = -1;
poles[3].rotation.z = 1.57;
poles[4].position.y = -1;

//Forward poles
poles[5].position.x = -1.5;
poles[5].position.y = 1.5;
poles[5].position.z = 3;
poles[5].rotation.z = 2.35;
poles[6].position.x = 1.5;
poles[6].position.y = 1.5;
poles[6].position.z = 3;
poles[6].rotation.z = 0.8;
poles[7].position.x = 1.5;
poles[7].position.y = -1.5;
poles[7].position.z = 3;
poles[7].rotation.z = 2.35;
poles[8].position.x = -1.5;
poles[8].position.y = -1.5;
poles[8].position.z = 3;
poles[8].rotation.z = 0.75;

//Rear poles
poles[9].position.x = -1.5;
poles[9].position.y = 1.5;
poles[9].position.z = -3;
poles[9].rotation.z = 2.35;
poles[10].position.x = 1.5;
poles[10].position.y = 1.5;
poles[10].position.z = -3;
poles[10].rotation.z = 0.8;
poles[11].position.x = 1.5;
poles[11].position.y = -1.5;
poles[11].position.z = -3;
poles[11].rotation.z = 2.35;
poles[12].position.x = -1.5;
poles[12].position.y = -1.5;
poles[12].position.z = -3;
poles[12].rotation.z = 0.75;

//Side rail poles
poles[13].position.x = 0;
poles[13].position.y = 3;
poles[13].position.z = 1.5;
poles[13].rotation.x = 1.55;
poles[14].position.x = 0;
poles[14].position.y = -3;
poles[14].rotation.x = 1.55;
poles[14].position.z = 1.5;
poles[15].position.x = -3;
poles[15].position.y = 0;
poles[15].position.z = 1.5;
poles[15].rotation.x = 1.55;
poles[16].position.x = 3;
poles[16].position.y = 0;
poles[16].position.z = 1.5;
poles[16].rotation.x = 1.55;
poles[17].position.x = 0;
poles[17].position.y = 3;
poles[17].rotation.x = 1.55;
poles[17].position.z = -1.5;
poles[18].position.x = 0;
poles[18].position.y = -3;
poles[18].rotation.x = 1.55;
poles[18].position.z = -1.5;
poles[19].position.x = -3;
poles[19].position.y = 0;
poles[19].position.z = -1.5;
poles[19].rotation.x = 1.55;
poles[20].position.x = 3;
poles[20].position.y = 0;
poles[20].position.z = -1.5;
poles[20].rotation.x = 1.55;

//Wire Framing
const sphereWireFrame = new THREE.EdgesGeometry(sphereGeo);

//Add items to the scene
for (let i = 1; i < 14; i++) {
  spheres[i].add(new THREE.LineSegments(sphereWireFrame, black));
  scene.add(spheres[i]);
}
for (let i = 1; i < 21; i++) {
  scene.add(poles[i]);
}
spheres[1].add(electrons[1], electrons[2]);

//Animation updater
var animate = function () {
  electrons[1].position.set(0, 0, 0);
  electrons[1].rotateY(0.033);
  electrons[1].rotateX(-0.033);
  electrons[1].translateX(1);
  electrons[1].translateY(1);
  electrons[2].position.set(0, 0, 0);
  electrons[2].rotateY(0.03);
  electrons[2].rotateX(0.03);
  electrons[2].translateX(-1);
  electrons[2].translateY(1);
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
  controls.update();
};

animate();