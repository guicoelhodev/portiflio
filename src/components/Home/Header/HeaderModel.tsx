import { onMount } from "solid-js";
import { ThreeScene } from "../../../threeJS/Scene"
import { Astronaut } from "../../../threeJS/astronaut/Astronaut";

export const HeaderModel = () => {
  
  const three = new ThreeScene();
  const astronaut = new Astronaut();
  onMount(() => {

    
    three.build('canvasHeader')
    

    const astronautFbx = astronaut.load(three.scene)


    const animate = () => {
      requestAnimationFrame(animate);


      three.renderer.render(three.scene, three.camera);

      if(astronaut.mixer){
        astronaut.mixer.update(three.clock.getDelta())
      }
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
