import { FormEvent, useState } from "react";
import PasswordInput from "../atoms/password-input";
import SubmitButton from "../atoms/submit-button";
import TextInput from "../atoms/text-input";
import { TestIDs } from "@/pages/core/configs";
import { useRouter } from "next/router";
import { LoginService } from "@/pages/core/login.service";
import { useAppDispatch } from "@/pages/hooks";
import { changeAuthState } from "@/pages/store/authSlice";

const LoginForm = () => {
    const [login,setLogin] = useState('');
    const [password,setPassword] = useState('');
    const router = useRouter();
    const dispatch = useAppDispatch();
    const errorTestID = TestIDs.ERROR;
    const loginService = LoginService.getInstance();

    const loginAction = async (event: any) => {
        console.log('login');
        event.preventDefault();
        const loginState = await loginService.login(login,password);
        dispatch(changeAuthState(loginState));
        console.log(`loginState`,loginState);
    }

    const loginEnter = (value: string) => {
        setLogin(value);
    };

    const passwordEnter = (value: string) => {
        setPassword(value);
    }

    return (
      <section>
        <form onSubmit={loginAction}>
          <div>
            <TextInput id="login" onLoginEnter={loginEnter}/>
          </div>
          <div>
            <PasswordInput id="password" onPasswordEnter={passwordEnter}/>
          </div>
          <div>
            <SubmitButton id="submit-login"/>
          </div>
          <div data-testid={errorTestID}></div>
        </form>
      </section>
    );
};

export default LoginForm;