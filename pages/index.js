import Head from "next/head";
import Image from "next/image";
import Title from "../components/Title";

export default function Home() {
  return (
    <div>
      <Head>
        <title>a styled-components starter</title>
        <meta name='description' content='A Starter for styled-components' />
        <link rel='icon' href='/wave.ico' />
      </Head>
      <Title inPutColor='purple' capitalized>
        a place to play
      </Title>
      <Image
        src='https://images.unsplash.com/photo-1530143311094-34d807799e8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80'
        alt='A Runner in Italy'
        width={640}
        height={427}
      />
    </div>
  );
}
