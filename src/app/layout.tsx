'use client';

import GlobalStyles from '@/styles/GlobalStyles';
import StyledComponentsRegistry from '@/lib/registry';
import { ReactNode } from 'react';
import localFont from 'next/font/local';

const Pretendard = localFont({
  src: '../../public/assets/fonts/PretendardVariable.woff2',
});

function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={Pretendard.className}>
      <body>
        <StyledComponentsRegistry>
          <GlobalStyles />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
export default RootLayout;
