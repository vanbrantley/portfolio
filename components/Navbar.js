import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white p-4 shadow flex justify-between">
      <Link href="/">
        <span className="font-bold cursor-pointer text-gray-900">Van Brantley</span>
      </Link>
      <div className="space-x-4">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
      </div>
    </nav>
  );
}
