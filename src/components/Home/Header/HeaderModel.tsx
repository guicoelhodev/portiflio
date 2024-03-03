import { For, onCleanup, onMount } from "solid-js";
import { ThreeScene } from "../../../threeJS/Scene"
import { Astronaut } from "../../../threeJS/astronaut/Astronaut";

import { Bs1CircleFill } from 'solid-icons/bs'
import { Bs2CircleFill } from 'solid-icons/bs'
import { Bs3CircleFill } from 'solid-icons/bs'

export const HeaderModel = () => {

  const three = new ThreeScene();
  const astronaut = new Astronaut();

  onMount(async () => {

    three.build('canvasHeader')

    const astronautFbx = await astronaut.load(three.scene, three.camera, three.renderer)

    const animate = () => {
      requestAnimationFrame(animate);

      astronaut.fixControlOnAstronaut(three.controls, astronautFbx.position)
      three.controls.update();
      
      three.renderer.render(three.scene, three.camera);

      if (astronaut.mixer) {
        astronaut.mixer.update(three.clock.getDelta())
      }

    };
    animate();

    onCleanup(() => {
      document.removeChild(document.getElementById('canvasHeader'))
    })
  });

  const dancingButtons = [
    {
      icon: Bs1CircleFill,
      onClick: () => {}
    },
    {
      icon: Bs2CircleFill,
      onClick: () => {}
    },
    {
      icon: Bs3CircleFill,
      onClick: () => {}
    },
  ];

  return (
    <article class='relative bg-neutral-800 rounded-lg aspect-squbre flex items-center justify-center p-8'>
      <div id='canvasHeader'></div>

      <article class='absolute bottom-0 right-0 bg-neutral-900 p-4 rounded-tl-lg flex gap-4'>
        {
          <For each={dancingButtons}>
            {(button) => (
              <button>
                <button.icon size={30}/>
              </button>
            )}
          </For>
        }
      </article>
    </article>

  )
}
