import { createSignal } from "solid-js";
import { TLink } from "."

export const Card = (props: TLink) => {

  const [transform, setTransform] = createSignal('transform: translateY(0)');


  const onMouseEnter = () => {
    setTransform('transform: translateY(-1rem)');
    // setIsHovered(true)
  };
  const onMouseLeave = () => {
    setTransform('transform: translateY(0)');
    // setIsHovered(false)
  };
  return (
    <a 
      href={props.link} 
      target='_blank' 
      class='flex-1 p-8 rounded-lg flex items-center gap-8 bg-neutral-800 transition-all'
      style={transform()}
      onMouseLeave={onMouseLeave}
      onMouseEnter={onMouseEnter}
      >
      <aside>
        <props.icon size={56}/>
      </aside>

      <article class='flex flex-col gap-2'>
        <h4 class='text-xl font-semibold'>{props.title}</h4>
        <p class='text-neutral-500'>{props.description}</p>
      </article>
    </a>
  )
}
