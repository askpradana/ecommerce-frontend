/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import { Button } from "~/components/ui/button";
import cartSVG from "public/svg/cart.svg";
import searchSVG from "public/svg/magnifying.svg";

export default function Navbar() {
  return (
    <nav className="mx-2 my-2 flex flex-row items-center gap-4 sm:mx-12">
      <p className="text-primary cursor-pointer font-bold">EZShop</p>
      <div className="search__input flex w-full flex-row items-center rounded-md border-[0.5px] border-solid border-slate-500 py-1 pl-2">
        <label htmlFor="inputId">
          {" "}
          <Image src={searchSVG} alt="search icon" />
        </label>

        <input
          type="text"
          id="inputId"
          placeholder="Cari di EZShop"
          className="w-full border-none bg-[transparent] pl-2 pr-3 outline-none"
        />
      </div>

      <div className="flex flex-row gap-4">
        <Image src={cartSVG} alt="wishlist cart" className="cursor-pointer" />
        <Button variant="outline">Masuk</Button>
        <Button>Daftar</Button>
      </div>
    </nav>
  );
}
