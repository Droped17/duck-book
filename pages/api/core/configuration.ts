import { LoginWithMock } from "./login-strategy";

enum Configuration {
    CORRECT_REQUEST = 'Success !',
    WRONG_REQUEST = 'No such request'
}

enum LoginStrategiesName {
    MOCK = 'mock'
}

enum UserBuilderMethods {
    PRODUCE_REGULAR_USER = 'produceRegularUser',
    PRODUCE_UPDATED_USER = 'produceUpdatedUser',
    PRODUCE_ADMIN_USER = 'produceAdminUser'
};

const LoginStrategies = {
    [LoginStrategiesName.MOCK]: new LoginWithMock()
};

const loginType = LoginStrategies[LoginStrategiesName.MOCK];

// const currentLoginStrategy = LoginStrategies[LoginStrategiesName.AMPLIFY];

export {Configuration,LoginStrategiesName,loginType};
