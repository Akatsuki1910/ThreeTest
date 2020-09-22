import * as THREE from 'three';
import {
  OrbitControls
} from "three/examples/jsm/controls/OrbitControls";

const width = window.innerWidth;
const height = window.innerHeight;
const rendererThree = new THREE.WebGLRenderer({
  canvas: document.querySelector("#ThreeCanvas"),
  antialias: true,
});
rendererThree.setPixelRatio(window.devicePixelRatio);
rendererThree.setSize(width, height);

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(45, width / height, 1, 10000);
camera.position.set(0, 25, 50);
camera.lookAt(new THREE.Vector3(0, 0, 0));

const directionalLight = new THREE.DirectionalLight(
  0xffffff
);
directionalLight.position.set(1, 1, 1);
scene.add(directionalLight);

const axesHelper = new THREE.AxesHelper(10000);
scene.add(axesHelper);
const gridHelper = new THREE.GridHelper( 1000, 1000);
scene.add( gridHelper );
const controls = new OrbitControls(camera, rendererThree.domElement);
controls.update();

/*
this
*/
var geometry = new THREE.Geometry();
 
	// 八面体の頂点セット
	geometry.vertices.push(new THREE.Vector3(0, 0, 1));
	geometry.vertices.push(new THREE.Vector3(1, 0, 0));
	geometry.vertices.push(new THREE.Vector3(0, -1, 0));
	geometry.vertices.push(new THREE.Vector3(-1, 0, 0));
	geometry.vertices.push(new THREE.Vector3(0, 1, 0));
	geometry.vertices.push(new THREE.Vector3(0, 0, -1));
 
	// 八面体の面セット
	geometry.faces.push(new THREE.Face3( 0, 2, 1));
	geometry.faces.push(new THREE.Face3( 0, 3, 2));
	geometry.faces.push(new THREE.Face3( 0, 4, 3));
	geometry.faces.push(new THREE.Face3( 0, 1, 4));
	geometry.faces.push(new THREE.Face3( 5, 1, 2));
	geometry.faces.push(new THREE.Face3( 5, 2, 3));
	geometry.faces.push(new THREE.Face3( 5, 3, 4));
	geometry.faces.push(new THREE.Face3( 5, 4, 1));
 
	// 法線ベクトルの自動計算
	geometry.computeFaceNormals();
	geometry.computeVertexNormals();

	// ワイヤーフレームのメッシュ作成
	var wire = new THREE.MeshBasicMaterial({color: 0xffffff, wireframe: true});
	var wireMesh = new THREE.Mesh(geometry, wire);
	scene.add(wireMesh);


function animate() {
  requestAnimationFrame(animate);
  controls.update();
  rendererThree.render(scene, camera);
}
animate();