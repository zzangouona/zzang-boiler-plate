'use client';

import tw from 'twin.macro';
import Logo from '@/components/Logo';

const styles = {
  container: ({ hasBackground }: { hasBackground: boolean }) => [
    tw`flex flex-col items-center justify-center h-screen`,
    hasBackground && tw`bg-white`,
  ],
};

function Home() {
  return (
    <div css={styles.container({ hasBackground: true })}>
      <Logo />
      <h1>테스트</h1>
    </div>
  );
}

export default Home;
