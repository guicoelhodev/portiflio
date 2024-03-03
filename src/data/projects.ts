import Galaxy from '../assets/galaxy.png'
export type TProject = {
  title: string;
  description: string;
  imgSrc: string;
  link: string;
};

export const projects: TProject[] = [
  {
    title: 'React Music',
    description: 'Musical app using React and deezer API',
    imgSrc: 'https://raw.githubusercontent.com/guicoelhodev/ReactMusic/main/github/readme_bg.png',
    link: 'https://react-music-xi.vercel.app/'
  },
  {
    title: 'Pokedex',
    description: 'Pokedex app using Nextjs and poke API',
    imgSrc: 'https://raw.githubusercontent.com/guicoelhodev/Pokedex-v3/main/github/homepage_3.png',
    link: 'https://pokedex-v3.vercel.app/'
  },
  {
    title: 'Galaxy 3D model',
    description: 'First big project using Vue and three JS - load Fbx and gltf models',
    imgSrc: Galaxy,
    link: 'https://coelho-portifolio.vercel.app/'
  },
  {
    title: 'Social Dev  (depreceated)',
    description: 'Prototype of a social network using Nextjs and social login as authentication',
    imgSrc: 'https://github.com/guicoelhodev/social_dev/blob/main/github/img/homepage_preview.png?raw=true',
    link: 'https://social-dev-sandy.vercel.app/'
  }
]
