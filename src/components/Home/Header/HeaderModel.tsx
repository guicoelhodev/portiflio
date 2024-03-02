import { onMount } from "solid-js";
import { ThreeScene } from "../../../threeJS/Scene"
import { Astronaut } from "../../../threeJS/astronaut/Astronaut";

export const HeaderModel = () => {
  
  const three = new ThreeScene();
  const astronaut = new Astronaut();
  onMount(() => {

    
    three.build('canvasHeader')
    

    const { cube } = astronaut.addOnScene(three.scene)


    const animate = () => {
      requestAnimationFrame(animate);

      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      three.renderer.render(three.scene, three.camera);
    };
    animate();
    // onCleanup(() => {
    //   document.removeChild(document.getElementById('canvasHeader'))
    // })
  });

  return (
    <article class=' bg-neutral-800 rounded-lg aspect-square flex items-center justify-center'>
      <div id='canvasHeader'></div>
    </article>

  )
}
