import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Welcome to Home</h1>

      <div>
        <Link href="/profile">Profile</Link>
      </div>

      <div>
        <Link href="/about">About</Link>
      </div>

      <div>
        <Link href="/blogs">Blogs</Link>
      </div>
      
      <div>
        <Link href="/products">Products</Link>
      </div>
    </div>
  );
}
