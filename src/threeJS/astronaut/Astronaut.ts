import * as THREE from 'three';

export class Astronaut {
  
  private geometry = new THREE.BoxGeometry(1, 1, 1);
  private material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })

  private cube = new THREE.Mesh(this.geometry, this.material);
  
  addOnScene(scene: THREE.Scene ){
    scene.add(this.cube)
  }
}
