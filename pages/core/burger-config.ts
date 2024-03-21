import { MakeHamburger,MakeChickenburger } from "./burger-strategy";

enum BurgerSteps {
    TOP_BUNS_WITH_SEEDS = "backingTopBunsPartWithSeeds",
    TOP_BUNS_WITHOUT_SEEDS = "bakingTopBunsPartWithoutSeeds",
    MEAT = "backingMeat",
    FISH = "backingFish",
    CHICKEN = "backingChicken",
    BURGER_SOUCE = "prepareBurgerSouce",
    FISH_SOUCE = "prepareFishSouce",
    SPECIAL_SOUCE = "prepareSpecialSouce",
    BOTTOM_BUNS = "backingBottomPart",
    GRILL_BURGER_WITH_CHEESE = "grillBurgerWithCheese"
}

export enum StrategiesNames {
    HAMBURGER = "hamburger",
    CHICKENBURGER = "chickenburger"
};


export const Strategies = {
    [StrategiesNames.HAMBURGER]: new MakeHamburger(),
    [StrategiesNames.CHICKENBURGER]: new MakeChickenburger()
};

export {BurgerSteps};

