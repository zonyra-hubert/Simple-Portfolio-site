import Link from "next/link";

// import Logo from "./logo";

export default async function Nav() {
  return (
    <header className=" py-8 shadow-sm bg-amber-50">
      <nav>
        <ul
          aria-label="Zonyra Hubert logo"
          className="flex justify-between  items-center md:gap-8 gap-4"
        >
          <li className="flex flex-1">
            <Link href={"/"}>
              {/* <Image src={bb} alt="Logo" width={100} /> */}

              {/* <Logo /> */}
            </Link>
          </li>
          <li className="relative flex items-center hover:bg-muted "></li>

          <li className="flex items-center justify-center"></li>
        </ul>
      </nav>
    </header>
  );
}
