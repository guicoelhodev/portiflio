import { createSignal } from 'solid-js';
import { twMerge } from 'tailwind-merge'
export const Card = () => {

  const [transform, setTransform] = createSignal(
    "translate(-50%,-50%) rotateX(0deg)"
  );

  const onMouseEnter = () => {
    setTransform("translate(-50%,-50%) rotateX(40deg) scale(0.8)");
  };
  const onMouseLeave = () => {
    setTransform("translate(-50%,-50%) rotateX(0deg) scale(1)");
  };
  return (
    <div
      class={twMerge(
        "relative z-50  cursor-pointer w-full border-2 aspect-video",
        ''
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div
        style={{
          perspective: "1000px",
          transform: "rotateX(70deg) translateZ(0deg)",
        }}
        class="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2"
      >
        <div
          style={{
            transform: transform(),
          }}
          class="absolute left-1/2 p-4 top-1/2  flex justify-start items-start  rounded-2xl  shadow-[0_8px_16px_rgb(0_0_0/0.4)] bg-black border border-white/[0.1] group-hover/pin:border-white/[0.2] transition duration-700 overflow-hidden"
        >
          <div class={twMerge(" relative z-50 ", 'text-white')}>
            sdadhksajdh
          </div>
        </div>
      </div>
    </div>
  )
}


// <PinPerspective title={title} href={href} />

// import { createSignal } from "solid-js"
// import { AiOutlineLink } from 'solid-icons/ai'
//
// const fakeLink = "https://wallpapercosmos.com/w/full/0/f/4/24693-3840x2160-desktop-4k-jujutsu-kaisen-tv-series-background-photo.jpg";
//
// export const Card = () => {
//   const [isHovered, setIsHovered] = createSignal(false);
//   return (
//     <li
//       class='p-1 rounded-md bg-gradient-to-r from-blue-800 via-blue-500 to-pink-600 poiter-events-auto'>
//       <div class='relative opacity-90 aspect-video w-full h-full overflow-hidden bg-cover bg-center'
//         onMouseOver={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//         style={`background-image: url(${fakeLink})`}
//       >
//
//         <a href='https://google.com' target='_blank'>
//           <footer
//             class={`bg-slate-900 h-20 w-full absolute -bottom-20 transition-all ${isHovered() && 'bottom-0'}
// flex items-center text-white pl-4`}>
//             <p class='font-bold text-2xl flex-1'>Loren ipsum dolor si a met</p>
//             <aside class='aspect-square p-4 h-full flex justify-center items-center' title='open project'>
//               <AiOutlineLink size={48} />
//             </aside>
//           </footer>
//         </a>
//       </div>
//     </li>
//   )
// }
//
