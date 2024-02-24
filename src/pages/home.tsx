import { CarouselTools } from '../components/Home/CarouselTools';
import { Header } from '../components/Home/Header';
import { Projects } from '../components/Home/Projects';

export default function Home() {

  return (
    <section class='bg-neutral-900 flex flex-col'>
      <Header />
      <CarouselTools />

      <Projects />
    </section>
  );
}
