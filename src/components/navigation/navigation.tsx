import Link from "next/link";
import Image from "next/image";
export default function Navigation(): React.ReactNode {
  return (
    <div className="flex flex-row items-center justify-between">
      <div className="mt-4 ml-4">
        <Link href="/" className="flex flex-row items-center">
          <Image
            src="/logo.jpg"
            alt="logo"
            sizes="100px"
            width={200}
            height={200}
            style={{
              width: "100%",
              height: "100%",
            }}
          />
          <p className="text-xs lg:text-3xl">享家蔬果園</p>
        </Link>
      </div>
      <div className="lg:flex lg:flex-row lg:justify-around items-center mr-4 lg:space-x-4 lg:text-lg">
        <Link href="/about">關於我們</Link>
        <Link href="/shop">購買產品</Link>
        <Link href="/contact">聯絡我們</Link>
        <Link href="/cart">結帳</Link>
      </div>
    </div>
  );
}
// flex flex-row w-full h-[10vh] border-solid border-b-2 border-black justify-around items-center lg:flex-col lg:w-[200px] lg:h-screen lg:border-solid lg:border-r-2 lg:border-b-0
