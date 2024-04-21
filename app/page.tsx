import LanguageToggle from '@/components/LanguageToggle';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <main className="flex  items-center justify-center">
        <div className="flex justify-between w-full px-8 py-8 mx-auto items-center container text-white mt-20">
          <div>
            <h1 className="text-3xl">Ola bem vindo de volta</h1>
            <p>Espero que esteja tudo bemm</p>
          </div>
          <div>
            <LanguageToggle />{' '}
          </div>
        </div>
      </main>
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
    </>
  );
}
