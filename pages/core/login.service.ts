import { LoginContext } from "../api/core/login-strategy";
import { loginType } from "../api/core/configuration";

export interface IUser {
    state: boolean;
    token: string
};

export interface ILoginStrategy {
    login(user: string,password: string): IUser;
};

class LoginService {
    private static instance: LoginService;
    private isLoggedIn : boolean = false;
    private token: string = '';
    // private loginState: IUser | null = null;
    private applicationUser : ApplicationUser = {} as ApplicationUser

    private constructor() {};

    public static getInstance(): LoginService{
        if (!LoginService.instance) {
            console.log('LoginService new instance');
            LoginService.instance = new LoginService();
        }
        return LoginService.instance;
    }

    async login(user: string,password: string) {
        const loginContext = new LoginContext(loginType);
        this.loginState = await loginContext.useLogin(user,password);
        this.isLoggedIn = this.loginState && this.loginState.isLoggedIn;
        this.token = this.loginState?.token;
    }

    getLoginStatus(){
        return this.isLoggedIn
    }

    getToken(){
        return this.token
    }
};

export {LoginService};