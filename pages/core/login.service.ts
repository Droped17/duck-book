import { LoginContext } from "../api/core/login-strategy";
import { UserBuilderMethods, loginType } from "../api/core/configuration";
import { ApplicationUser } from "./user-builder";
import { generateToken } from "./utils/utils";

export interface IUser {
    isLoggedIn: boolean
    token: string
    userProperties: Array<keyof typeof UserBuilderMethods>;
    userPropertiesActions?: string[];
};

export interface ILoginStrategy {
    login(user: string,password: string): Promise<IUser>;
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
        const loginState = await loginContext.useLogin(user,password);
        // console.log(`loginState`,loginState);
        this.isLoggedIn = loginState.isLoggedIn;
        this.applicationUser = new ApplicationUser(loginState);
        loginState.userProperties.forEach((property: keyof typeof UserBuilderMethods) => {
            UserBuilderMethods[property] && this.applicationUser[UserBuilderMethods[property]]();
        });
        this.token = loginState.token;
        return loginState;
    }

    getLoginStatus(){
        return this.isLoggedIn
    }

    getToken(){
        return this.token
    }
};

class LoginWithGQL implements ILoginStrategy {
    async gqlLogin(user: string,password: string) {
        const {data} = await client.query({
            query: gql `
                query {
                    getUser(user: "${user}", password: "${password}") {
                        user
                        userProperties
                    }
                }
            `
        });
        return await data
    }
    public async login(user: string,password: string){
        let loginState = await this.gqlLogin(user,password);
        if (checkUser && checkUser.getUser) {
            loginState = {state: true,token: generateToken(), userProperties: checkUser.getUser.userProperties}
        }
        return loginState;
    }
}

export {LoginService,LoginWithGQL};