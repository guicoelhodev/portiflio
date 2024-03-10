import { For, createEffect, createSignal, onCleanup, onMount } from "solid-js";
import { ThreeScene } from "../../../threeJS/Scene"
import { Tb3dCubeSphere } from 'solid-icons/tb'
import { Character } from "../../../threeJS/character/Character";

export const HeaderModel = () => {

  const three = new ThreeScene();
  const character = new Character();

  const [indexDance, setIndexDance] = createSignal(0);

  onMount(async () => {

    three.build('canvasHeader')
    await character.load(three.scene)

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

  const buttonAnimation = (currBtn: number) => {
    const selectedBtn = currBtn === indexDance();

    return selectedBtn ? 'animate-none' : 'animate-pulse'
  }

  return (
    <article class='relative bg-neutral-800 rounded-lg sm:aspect-square flex items-center justify-center radius-md p-2'>
      <div id='canvasHeader'></div>

      <article class='absolute bottom-0 right-0 bg-neutral-800 p-2 rounded-tl-lg flex gap-4'>
        {
          <For each={[0, 1, 2]}>
            {(button, index) => (
              <button class={`bg-neutral-900 text-neutral-200 aspect-square p-4 rounded-lg flex items-center justify-center
${buttonAnimation(button)}`}
                onClick={() => setIndexDance(index)}>
                {button}
              </button>
            )}
          </For>
        }
      </article>

      <Tb3dCubeSphere class='absolute right-4 top-4 text-neutral-500' size={36} />
    </article>

  )
}
