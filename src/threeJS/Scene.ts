import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

export class ThreeScene {

  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  renderer = new THREE.WebGLRenderer();
  clock = new THREE.Clock()

  light = new THREE.DirectionalLight(0xffffff, 1)
  lightUp = new THREE.DirectionalLight(0xffffff, 1)

  private addLights(){
    this.light.position.set(1, 0, 1)
    this.lightUp.position.set(0, 1, 0)
  }

  private renderScene(){
    this.renderer.setSize(320, 320);
    this.renderer.setClearColor(0x262626)
  }

  build(htmlTagId: string) {

    this.addLights()
    this.renderScene()
    const container = document.getElementById(htmlTagId)
    container.appendChild(this.renderer.domElement);

    this.camera.position.z = 2;
    new OrbitControls(this.camera, this.renderer.domElement)
  }
}
