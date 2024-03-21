import Image from "next/image";
import { Inter } from "next/font/google";
import StyledPage from "./StyledPage";
import Link from "next/link";
import { NextPage } from "next";
import { useEffect } from "react";
import { pid } from "process";

const inter = Inter({ subsets: ["latin"] });

const Home: NextPage = () => {
  return (
    <div>
      <h1>Hello this is main MainPage</h1>
      <Link href="/about">
        <p>About</p>
      </Link>
    </div>
  );
}

export default Home;
