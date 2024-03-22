import { generateToken } from "@/pages/core/utils/utils";
import { getMock } from "@/pages/mocks";
import { ILoginStrategy,IUser } from "@/pages/core/login.service";

export class LoginContext{
    private strategy: ILoginStrategy;

    constructor(strategy: ILoginStrategy){
        console.log('Login strategy class is',strategy);
        this.strategy = strategy
    }

    public useLogin(user:string,password: string): IUser {
        console.log('Now login is on fire');
        return this.strategy.login(user,password);
    }
}

export class LoginWithMock implements ILoginStrategy {
    public login(user: string,password: string){
        const users = getMock.users;
        const checkUser = users.find((userItem : {user: string,password: string}) => {
            return userItem.user === user && userItem.password === password;
        });
        let loginState = {state:false, token: ''};
        if (checkUser) {
            loginState = {state: true,token: generateToken()}
        }
        return loginState;
    }
}
