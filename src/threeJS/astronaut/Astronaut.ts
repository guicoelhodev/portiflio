import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'

export class Astronaut {
  public mixer: THREE.AnimationMixer

  async load(scene: THREE.Scene, camera: THREE.Camera, renderer: THREE.Renderer) {

    const fbxLoader = new FBXLoader();

    fbxLoader.setPath('threeModels/fbx/astronaut/');


    const fbx = await fbxLoader.loadAsync('astronaut.fbx').catch(() => {
      throw new Error('astronaut not founded');
    });

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    // Adiciona luz direcional
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(0, 2, 2);
    directionalLight.castShadow = true;

    scene.add(directionalLight);

  
    fbx.traverse((c) => {
      c.castShadow = true
    })

    scene.add(fbx);

    this.mixer = new THREE.AnimationMixer(fbx)

    fbx.position.setY(-280);
    fbx.rotateX(-0.3)
    fbx.scale.setScalar(2)

    return fbx
  };

  fixControlOnAstronaut(controls: OrbitControls, position: THREE.Vector3){
     controls.target.set(position.x, position.y + 300, position.z - 1);
     controls.update()
  }
}
