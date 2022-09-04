import Head from "next/head";
import Image from "next/image";
import Title from "../components/Title";
import styled from "styled-components";

export default function Home() {
  return (
    <div
      css={`
        padding: 0 24px;
      `}
    >
      <Head>
        <title>a styled-components starter</title>
        <meta name='description' content='A Starter for styled-components' />
        <link rel='icon' href='/wave.ico' />
      </Head>
      <Title inPutColor='purple' capitalized>
        a place to play
      </Title>
      <PictureWrapper>
        <Image
          src='https://images.unsplash.com/photo-1530143311094-34d807799e8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80'
          alt='A Runner in Italy'
          width={600}
          height={400}
          css={`
            border-radius: 10px;
          `}
        />
      </PictureWrapper>
      <div
        css={`
          color: orange;
          font-size: 36px;
        `}
      >
        <h1
          css={`
            text-align: center;
          `}
        >
          hello world
        </h1>
      </div>
    </div>
  );
}

const PictureWrapper = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 32px;
  background-color: black;
  padding: 24px 0;
`;
