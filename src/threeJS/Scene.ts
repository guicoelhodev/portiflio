import * as THREE from 'three'

export class ThreeScene {

  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  renderer = new THREE.WebGLRenderer();

  build(htmlTagId: string) {
    this.renderer.setSize(320, 320);
    this.renderer.setClearColor(0x262626)

    const container = document.getElementById(htmlTagId)
    container.appendChild(this.renderer.domElement);

    this.camera.position.z = 2;

  }
}
