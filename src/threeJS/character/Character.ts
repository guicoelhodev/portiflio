import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'

export class Character {
  mixer: THREE.AnimationMixer
  characterFbx: THREE.Group<THREE.Object3DEventMap>

  private characterAnimations: THREE.Group<THREE.Object3DEventMap>[];

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
    directionalLight.position.set(5, 2, 2);
    directionalLight.castShadow = true;

    scene.add(directionalLight);


    fbx.traverse((c) => {
      c.castShadow = true
    })

    await this.loadAllAnimations().catch(() => console.error('Failed to load animations'))
    const fbxAnimation = this.setCharacterAnimation(1, scene)
    
    fbxAnimation.position.setY(-180)
    fbxAnimation.scale.setScalar(2.3);

    this.characterFbx = fbxAnimation
  };

  private async loadAllAnimations() {
    const animLoader = new FBXLoader();
    animLoader.setPath('threeModels/fbx/fallGuys/');

    const relativePaths = [
      'dancing_silly.fbx',
      'dancing_swing.fbx',
      'dancing_upwork.fbx',
    ];

    const asyncLoadsFbx = relativePaths.map(path => animLoader.loadAsync(path));

    this.characterAnimations = await Promise.all(asyncLoadsFbx)
  }

  setCharacterAnimation(index: number, scene: THREE.Scene) {
    const fbxAnimation = this.characterAnimations[index];

    if (!fbxAnimation) throw new Error('Fbx animation not found');

    this.mixer = new THREE.AnimationMixer(fbxAnimation);
    const action = this.mixer.clipAction(fbxAnimation.animations[0]);

    action.play()
    scene.add(fbxAnimation)

    return fbxAnimation
  }
}
