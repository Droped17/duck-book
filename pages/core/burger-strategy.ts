import { BurgerBuilder } from "./burger-builder";
import { BurgerDirector } from "./burger-director";


export interface IStrategy {
    bakeMeBurger(burgerBuilder: BurgerBuilder,burgerDirector: BurgerDirector): Array<string>;
}

export class MakeHamburger implements IStrategy{
    public bakeMeBurger(burgerBuilder: BurgerBuilder, burgerDirector: BurgerDirector): string[] {
        burgerDirector.buildHamburger();
        return burgerBuilder.getRecipe();    
    }
}

export class MakeChickenburger implements IStrategy {
    public bakeMeBurger(burgerBuilder: BurgerBuilder, burgerDirector: BurgerDirector): string[] {
        return burgerBuilder.getRecipe();
    }
}

export class Kitchen {
    private strategy : IStrategy;
    constructor(strategy: IStrategy) {
        console.log(`Strategy class is`,strategy);
        this.strategy = strategy;
    }

    public setStrategy(strategy: IStrategy){
        console.log('strategy',strategy);
        this.strategy = strategy;
    }

    public bakeSomething(burgerBuilder: BurgerBuilder, burgerDirector: BurgerDirector): void {
        console.log('Now Kitchen is on fire');
        const result = this.strategy.bakeMeBurger(burgerBuilder,burgerDirector);
        console.log('We baked',result);
    }




}