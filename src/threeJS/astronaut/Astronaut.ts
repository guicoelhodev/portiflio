import * as THREE from 'three';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'

export class Astronaut {
  public mixer: THREE.AnimationMixer

  async load(scene: THREE.Scene){

    const fbxLoader = new FBXLoader();

    fbxLoader.setPath('threeModels/fbx/astronaut/');

    const fbx = await fbxLoader.loadAsync('astronaut.fbx');

    fbx.scale.setScalar(1);

    fbx.scale.setScalar(0.3)
    fbx.traverse((c) => {
      c.castShadow = true
    })

    // fbx.position.y = -3.4
    // fbx.rotation.y = 3

    scene.add(fbx);
    this.mixer = new THREE.AnimationMixer(fbx)
    
    return fbx
  }
}
