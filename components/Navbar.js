import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white p-4 px-7 shadow flex justify-between items-center">

      <Link href="/" className="flex items-center">
        <Image
          src="/images/logo.png"
          alt="Logo"
          width={28}
          height={28}
          className="cursor-pointer"
          priority
        />
      </Link>

      <div className="space-x-4 text-gray-900">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
      </div>

    </nav>
  );
}