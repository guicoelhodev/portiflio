import { For, createEffect, createSignal, onCleanup, onMount } from "solid-js";
import { ThreeScene } from "../../../threeJS/Scene"

import { Bs1CircleFill } from 'solid-icons/bs'
import { Bs2CircleFill } from 'solid-icons/bs'
import { Bs3CircleFill } from 'solid-icons/bs'
import { Character } from "../../../threeJS/character/Character";

export const HeaderModel = () => {

  const three = new ThreeScene();
  const character = new Character();

  const [ indexDance, setIndexDance ] = createSignal(0);

  onMount(async () => {

    three.build('canvasHeader')
    await character.load(three.scene )

    const animate = () => {
      requestAnimationFrame(animate);

      three.controls.update();

      three.renderer.render(three.scene, three.camera);

      if (character.mixer) {
        character.mixer.update(three.clock.getDelta())
      }

    };
    animate();

    onCleanup(() => {
      document.removeChild(document.getElementById('canvasHeader'))
    })
  });

  createEffect(() => {
    character.setCharacterAnimation(indexDance(), three.scene)
  })

  return (
    <article class='relative bg-neutral-800 rounded-lg aspect-squbre flex items-center justify-center'>
      <div id='canvasHeader'></div>

      <article class='absolute bottom-0 right-0 bg-neutral-900 p-4 rounded-tl-lg flex gap-4'>
        {
          <For each={[0,1,2]}>
            {(button, index) => (
              <button class='bg-white text-neutral-900 aspect-square h-8' onClick={() => setIndexDance(index)}>
                {button}
              </button>
            )}
          </For>
        }
      </article>
    </article>

  )
}
