import Link from "next/link";
import Logo from "../../../assets/logo.png";
import Image from "next/image";
import classes from './main-header.module.css';
import MainHeaderBackground from "@/app/components/main-header/main-header-background";

export default function MainHeader() {
  return <>
  <MainHeaderBackground/>
  <header className={classes.header}>
      <Link className={classes.logo} href="/">
        <Image src={Logo.src} alt="A plate with food on it" width={200} height={200} priority/>
        NextLevel Food
      </Link>
      <nav className={classes.nav}>
        <ul>
          <li>
            <Link href="/meals">Browse Meals</Link>
          </li>
          <li>
            <Link href="/community">Community</Link>
          </li>
        </ul>
      </nav>
    </header>
  </>
}
