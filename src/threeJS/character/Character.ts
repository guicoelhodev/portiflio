import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'

export class Character {
  mixer: THREE.AnimationMixer
  characterAnimations: THREE.Group[];
  
  fixControlOnAstronaut(controls: OrbitControls, position: THREE.Vector3){
     controls.target.set(position.x, position.y, position.z);
     controls.update()
  }

  async load(scene: THREE.Scene) {

    const fbxLoader = new FBXLoader();

    fbxLoader.setPath('threeModels/fbx/fallGuys/');


    const fbx = await fbxLoader.loadAsync('fallguy.fbx').catch(() => {
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

    fbx.position.setY(-160);
    fbx.rotateX(-0.3)
    fbx.scale.setScalar(1.3)

    return fbx
  };
  
  async loadAllAnimations(){
    const animLoader = new FBXLoader();
    animLoader.setPath('threeModels/fbx/fallGuys');

    const relativePaths = [
      'dancing_silly.fbx',
      'dancing_swing.fbx',
      'dancing_upwork.fbx',
    ];

    
    for await (let anim of relativePaths) {
      let animFbx = await animLoader.loadAsync(anim)

      let nameWithoutExtension = anim.split('.')[0]
      animFbx = { ...animFbx, name: nameWithoutExtension } as THREE.Group

      this.characterAnimations.push(animFbx)
    }
  }
}
