import Head from "next/head";
import Image from 'next/image'

import heroImg from '../../public/assets/background.png'

export default function Home() {
  return (
    <div className='bg-white w-full h-screen flex justify-center items-center flex-col'>
      <Head>
        <title>Anota Aí | Organize suas tarefas de forma fácil</title>
      </Head>
      <main className="">
        <div className="flex flex-col items-center justify-center">
          <Image
            className="max-w-[480px] object-contain"
            alt="Logo Anota Aí"
            src={heroImg}
            priority
          />
        </div>

        <h1 className="text-black m-5 text-center leading-normal text-3xl">
          Sistema feito para você organizar <br />
          seus estudos e tarefa
        </h1>
      </main>
    </div>
  );
}
