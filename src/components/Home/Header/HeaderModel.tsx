import { onCleanup, onMount } from "solid-js";
import { ThreeScene } from "../../../threeJS/Scene"
import { Astronaut } from "../../../threeJS/astronaut/Astronaut";
import * as THREE from 'three'

export const HeaderModel = () => {
  
  const threeScene = new ThreeScene();
  onMount(() => {
    threeScene.build('canvasHeader')


    // onCleanup(() => {
    //   document.removeChild(document.getElementById('canvasHeader'))
    // })
  });

  return (
    <article class='h-[420px] bg-neutral-800 rounded-lg aspect-square flex items-center justify-center'>
      <div id='canvasHeader'></div>
    </article>

  )
}
