import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'

export class Character {
  mixer: THREE.AnimationMixer
  characterFbx: THREE.Group<THREE.Object3DEventMap>

  private currentAction: THREE.AnimationAction
  private characterAnimations: THREE.Group<THREE.Object3DEventMap>[];

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

    const fbxAnimation = this.characterAnimations?.[index];

    if (!fbxAnimation) {
      console.error('Fbx animation not found');
      return null;
    }

    fbxAnimation.position.setY(-140)
    fbxAnimation.scale.set(3.5, 2, 3);

    if (!this.mixer) {
      this.mixer = new THREE.AnimationMixer(fbxAnimation);
    }

    const newAction = this.mixer.clipAction(fbxAnimation.animations[0]);

    if (this.currentAction && this.currentAction !== newAction) {
      this.currentAction.fadeOut(0.5)
    }

    if (this.currentAction) {

      newAction.reset()
      newAction.fadeIn(0.5) // switch between animations smoothly
    } else {
      scene.add(fbxAnimation)
    }

    newAction.play()

    this.currentAction = newAction


    return fbxAnimation
  }

  async load(scene: THREE.Scene ) {

    const fbxLoader = new FBXLoader();

    fbxLoader.setPath('threeModels/fbx/fallGuys/');


    const fbx = await fbxLoader.loadAsync('fallguy.fbx').catch(() => {
      throw new Error('astronaut not founded');
    });

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    // Add directional light 
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 2, 2);
    directionalLight.castShadow = true;

    scene.add(directionalLight);


    fbx.traverse((c) => {
      c.castShadow = true
    })

    await this.loadAllAnimations().catch(() => console.error('Failed to load animations'))
    const fbxAnimation = this.setCharacterAnimation(0, scene);
    this.characterFbx = fbxAnimation

  };
}
