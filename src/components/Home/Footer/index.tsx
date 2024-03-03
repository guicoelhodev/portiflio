import { IconTypes } from 'solid-icons';
import { AiFillGithub, AiFillLinkedin } from 'solid-icons/ai'
import { For } from 'solid-js';
import { Card } from './Card';

export type TLink = {
  title: string;
  description: string;
  icon: IconTypes;
  link: string;
};

const links: TLink[] = [
  {
    title: 'Linkedin profile',
    description: 'Click here to chat with me and see more about my professional career',
    icon: AiFillLinkedin,
    link: 'https://www.linkedin.com/in/guilherme-santos-coelho-1b7036210/'
  },
  {
    title: 'Github profile',
    description: 'Click here to see my projects and prototypes in the world of programming',
    icon: AiFillGithub,
    link: 'https://github.com/guicoelhodev'
  }
]
export const Footer = () => {

  return (
    <footer class='p-12 pb-4 text-neutral-200 flex flex-col'>
      <h2 class='text-3xl border-b-2 border-neutral-400 pb-2 text-neutral-400'>Social network</h2>
      <ul class='flex flex-col gap-8 px-0 py-8 md:flex-row md:gap-4'>
        <For each={links}>
          {(link) => (<Card {...link} />)}
        </For>
      </ul>
    </footer>
  )
}
