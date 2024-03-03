import * as THREE from 'three';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

export class Astronaut {
  public mixer: THREE.AnimationMixer

  fixOrbitControlOnCharacter(orbitControl: OrbitControls, position: THREE.Vector3) {
    orbitControl.target.set(position.x, position.y + 0.5, position.z);
    orbitControl.enabled = true
    orbitControl.update()
  }

  async load(scene: THREE.Scene, camera: THREE.Camera, renderer: THREE.Renderer) {

    const fbxLoader = new FBXLoader();

    fbxLoader.setPath('threeModels/fbx/astronaut/');


    const fbx = await fbxLoader.loadAsync('astronaut.fbx').catch(() => {
      throw new Error('astronaut not founded');
    });

    fbx.scale.setScalar(1)
    // fbx.scale.setScalar(1);
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); 
    scene.add(ambientLight);

    // Adiciona luz direcional
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1); 
    directionalLight.position.set(0, 2, 2); 
    directionalLight.castShadow = true;
    scene.add(directionalLight);
    // fbx.scale.setScalar(0.3)

    fbx.traverse((c) => {
      c.castShadow = true
    })

    
    fbx.position.z = 6.8
    // fbx.position.y = -.28
    // fbx.rotation.y = 3

    scene.add(fbx);
    this.mixer = new THREE.AnimationMixer(fbx)

    const orbitControl = new OrbitControls(camera, renderer.domElement)
    const { position } = fbx;

    this.fixOrbitControlOnCharacter(orbitControl, position);
    return fbx
  }
}
