import 'twin.macro';
import Link from 'next/link';
import Image from 'next/image';

function Logo() {
  return (
    <Link href="/">
      <Image alt="" src="/images/logo.png" width={90} height={27} priority />
    </Link>
  );
}
export default Logo;
