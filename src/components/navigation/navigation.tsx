import Link from "next/link";
export default function Navigation(): JSX.Element {
  return (
    <div className=" ">
      <div>
        <Link href="/">Logo</Link>
      </div>
      <div>
        <Link href="/about">關於我們</Link>
        <Link href="/shop">購買產品</Link>
        <Link href="/contact">聯絡我們</Link>
        <Link href="/cart">結帳</Link>
      </div>
    </div>
  );
}
// flex flex-row w-full h-[10vh] border-solid border-b-2 border-black justify-around items-center lg:flex-col lg:w-[200px] lg:h-screen lg:border-solid lg:border-r-2 lg:border-b-0
