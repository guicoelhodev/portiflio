import { createSignal } from "solid-js"
import { AiOutlineLink } from 'solid-icons/ai'

const fakeLink = "https://wallpapercosmos.com/w/full/0/f/4/24693-3840x2160-desktop-4k-jujutsu-kaisen-tv-series-background-photo.jpg";

export const Card = () => {
  const [isHovered, setIsHovered] = createSignal(false);
  return (
    <li
      class='p-1 rounded-md bg-gradient-to-r from-blue-800 via-blue-500 to-pink-600 poiter-events-auto'>
      <div class='relative opacity-90 aspect-video w-full h-full overflow-hidden bg-cover bg-center'
        onMouseOver={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={`background-image: url(${fakeLink})`}
      >

        <a href='https://google.com' target='_blank'>
          <footer
            class={`bg-slate-900 h-20 w-full absolute -bottom-20 transition-all ${isHovered() && 'bottom-0'}
flex items-center text-white pl-4`}>
            <p class='font-bold text-2xl flex-1'>Loren ipsum dolor si a met</p>
            <aside class='aspect-square p-4 h-full flex justify-center items-center' title='open project'>
              <AiOutlineLink size={48} />
            </aside>
          </footer>
        </a>
      </div>
    </li>
  )
}
