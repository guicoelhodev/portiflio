import { BiRegularWorld } from 'solid-icons/bi';
import { Show, createEffect, createSignal } from 'solid-js';

export const Card = () => {

  const [transform, setTransform] = createSignal(
    "translate(-50%,-50%) rotateX(0deg)"
  );

  const [isHovered, setIsHovered] = createSignal(false);

  const onMouseEnter = () => {
    setTransform("translate(-50%, -20%) rotateX(60deg) scale(0.8)");
    setIsHovered(true)
  };
  const onMouseLeave = () => {
    setTransform("translate(-50%, -50%) rotateX(0deg) scale(1)");
    setIsHovered(false)
  };

  createEffect(() => {
    console.log(isHovered())
  })

  return (
    <div
      class="relative z-50  cursor-pointer border-2 aspect-video"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <section
        style={{
          perspective: "1000px",
          transform: "rotateX(70deg) translateZ(0deg)",
        }}
        class="absolute left-1/2 top-1/2 bottom-24 ml-[0.09375rem] mt-4  translate-y-1/2"
      >
        <div
          style={{
            transform: transform(),
            // transform: "translate(-50%, -20%) rotateX(60deg) scale(0.8)"
          }}
          class="absolute left-1/2 top-1/2 bg-white  flex justify-start items-start  rounded-md  shadow-[0_8px_16px_rgb(0_0_0/0.4)] border border-white/[0.1] transition duration-700 overflow-hidden"
        >
          <article class="relative z-50 text-black flex gap-4 w-[340px] flex-col p-4 sm:w-[420px]" id='card-container'>
            <h4 class='text-2xl text-blue-400 border-b-2 border-blue-200'>React music</h4>
            <p class='text-neutral-400'>Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.</p>
          </article>
        </div>
      </section>

      <Show when={isHovered()}>
        <article class='h-3/4 flex flex-col items-center justify-end animate-cardFadeIn'>
          <div class='w-60 bg-red-100 rounded-lg flex items-center'>
            <aside class='bg-neutral-900 flex items-center gap-2 overflow-hidden border-2 border-neutral-200 px-4 py-[4px] rounded-full text-neutral-400'>
              <BiRegularWorld />
              <p class='truncate text-ellipsis'>https://google.com/foolbar</p>
            </aside>
          </div>
          <span class='w-[2px] h-20 bg-neutral-200 z-50'></span>
        </article>
      </Show>
    </div>
  )
}

