var camera, amLight, light, scene, renderer;
var geometry, mars;
var matMars;
var txMars;

var appDiv = document.getElementById("planetaryxr");
var appWidth = appDiv.clientWidth;
var appHeight = appDiv.clientHeight;

function init() {
  window.addEventListener('resize', onWindowResize, false);
  function onWindowResize() {
    appWidth = appDiv.clientWidth;
    appHeight = appDiv.clientHeight;
    camera.aspect = appWidth / appHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( appWidth, appHeight );
  }

  // Set up main camera
  camera = new THREE.PerspectiveCamera(45, appWidth / appHeight, 0.1, 1000);
  camera.position.z = 12;

  // Initialise scene
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x101013);

  // Add lighting
  amLight = new THREE.AmbientLight(0xFFFFFF, 1.0);
  scene.add(amLight);

  // Initialise textures & materials
  let loader = new THREE.TextureLoader();
  txMars = loader.load('img/textures/mars.jpg');
  matMars = new THREE.MeshPhongMaterial({
    map: txMars
  });

  // Add Mars to scene
  rotator = new THREE.Object3D();
  geometry = new THREE.SphereGeometry(3.390, 64, 64);
  mars = new THREE.Mesh(geometry, matMars);
  rotator.position.set(0, 0, 0);
  rotator.rotation.z = -0.439823;
  rotator.add(mars);
  scene.add(rotator);

  // Render scene to div
  renderer = new THREE.WebGLRenderer({
    antialias: true
  });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(appWidth, appHeight);
  appDiv.appendChild(renderer.domElement);
}

function animate() {
  requestAnimationFrame(animate);
  mars.rotateY(0.001);
  renderer.render(scene, camera);
}

init();
animate();