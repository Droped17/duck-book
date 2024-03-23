import LoginForm from "@/ui/moleculas/login-form";
import { NextPage } from "next";
import Link from "next/link";

const LoginPage: NextPage = () => {
    return (
        <article>
            <LoginForm/>
            <Link href="/">Main</Link>
        </article>
    );
};

export {LoginPage};