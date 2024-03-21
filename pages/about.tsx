import { NextPage } from "next";
import Link from "next/link";

const About: NextPage = () => {
    return (
        <div>
            <h1>Hello There!</h1>
            <Link href="/">Main</Link>
        </div>
    );
};

export default About;