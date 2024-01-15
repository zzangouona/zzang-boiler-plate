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
    </div>
  );
}

export default Home;
