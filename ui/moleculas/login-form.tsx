import PasswordInput from "../atoms/password-input";
import SubmitButton from "../atoms/submit-button";
import TextInput from "../atoms/text-input";
import { TestIDs } from "@/pages/core/configs";

const LoginForm = () => {
    const errorTestID = TestIDs.ERROR;
    return (
        <section>
            <div>
                <TextInput />
            </div>
            <div>
                <PasswordInput />
            </div>
            <div>
                <SubmitButton />
            </div>
            <div data-testid={errorTestID}></div>
        </section>
    );
};

export default LoginForm;