import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export class ThreeScene {

  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  renderer = new THREE.WebGLRenderer();
  clock = new THREE.Clock()
  controls = new OrbitControls(this.camera, this.renderer.domElement);

  light = new THREE.DirectionalLight(0xffffff, 1)
  lightUp = new THREE.DirectionalLight(0xffffff, 1)

  private addLights(){
    this.lightUp.position.set(1, 1, 1)
  }

  private renderScene(){
    this.renderer.setSize(360, 360);
    this.renderer.setPixelRatio(1)
    this.renderer.setClearColor(0x262626)
  }

  build(htmlTagId: string) {

    this.addLights()
    this.renderScene()
    
    const container = document.getElementById(htmlTagId)
    container.appendChild(this.renderer.domElement);

    this.camera.position.set( 0, 200, 400 );

    // this.camera.
    this.controls.update();

  }
}
