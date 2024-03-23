import { LoginWithMock } from "./login-strategy";
import { LoginWithGQL } from "@/pages/core/login.service";

enum Configuration {
    CORRECT_REQUEST = 'Success !',
    WRONG_REQUEST = 'No such request'
}

enum LoginStrategiesName {
    MOCK = 'mock',
    GQL = 'gql'
}

enum UserBuilderMethods {
    PRODUCE_REGULAR_USER = 'produceRegularUser',
    PRODUCE_UPDATED_USER = 'produceUpdatedUser',
    PRODUCE_ADMIN_USER = 'produceAdminUser'
};

const LoginStrategies = {
    [LoginStrategiesName.MOCK]: new LoginWithMock(),
    [LoginStrategiesName.GQL]: new LoginWithGQL()
};

const loginType = LoginStrategies[LoginStrategiesName.MOCK];

// const currentLoginStrategy = LoginStrategies[LoginStrategiesName.AMPLIFY];

export {Configuration,LoginStrategiesName,loginType,UserBuilderMethods};
