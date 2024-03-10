import { BiRegularWorld } from 'solid-icons/bi';
import { Show, createSignal } from 'solid-js';
import { TProject } from '../../../data/projects';

export const Card = (props: TProject) => {

  const [transform, setTransform] = createSignal(
    "translate(-50%,-50%) rotateX(0deg)"
  );

  const [isHovered, setIsHovered] = createSignal(false);

  const onMouseEnter = () => {
    setTransform("translate(-50%, -40%) rotateX(62deg) scale(0.8)");
    setIsHovered(true)
  };
  const onMouseLeave = () => {
    setTransform("translate(-50%, -50%) rotateX(0deg) scale(1)");
    setIsHovered(false)
  };

  return (
    <a
      href={props.link}
      target='_blank'

      class="relative z-50 py-16  cursor-pointer h-[400px]"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <section
        style={{
          perspective: "1000px",
          transform: "rotateX(70deg) translateZ(0deg)",
        }}
        class="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4  translate-y-1/2"
      >
        <div
          style={{
            transform: transform(),
          }}
          class="absolute left-1/2 top-1/2 bg-white  flex justify-start items-start  rounded-md  shadow-[0_8px_16px_rgb(0_0_0/0.4)] border border-white/[0.1] transition duration-700 overflow-hidden"
        >
          <article class="relative z-50 text-black flex gap-4 w-[340px] flex-col p-4 sm:w-[420px]" id='card-container'>
            <h4 class='text-2xl text-blue-800'>{props.title}</h4>
            <p class='text-neutral-400'>{props.description}</p>

            <img class='rounded-md aspect-video object-cover' src={props.imgSrc} alt='Project image list' />
          </article>
        </div>
      </section>

      <Show when={isHovered()}>
        <article class='h-3/4 flex flex-col items-center justify-center animate-cardFadeIn'>
          <div class='w-60 rounded-lg flex items-center'>

            <aside class='bg-neutral-900 flex items-center gap-2 overflow-hidden px-4 py-[4px] rounded-full text-neutral-400'>
              <BiRegularWorld />
              <p class='truncate text-ellipsis'>{props.link}</p>
            </aside>
          </div>
          <span class='w-[2px] h-24 bg-neutral-200 z-50'></span>
        </article>
      </Show>
    </a>
  )
}

