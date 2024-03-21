import { BurgerBuilder, IBuilder } from "./burger-builder";
import { BurgerSteps } from "./burger-config";

class BurgerDirector {
    private builder!: IBuilder

    constructor(builder: IBuilder){
        this.setBuilder(builder);
    }

    public setBuilder(builder: IBuilder):void {
        this.builder = builder
    }

    public buildHamburger():void {
        this.builder[BurgerSteps.TOP_BUNS_WITH_SEEDS]();
        this.builder[BurgerSteps.MEAT]();
        this.builder[BurgerSteps.GRILL_BURGER_WITH_CHEESE]();
        this.builder[BurgerSteps.BURGER_SOUCE]();
        this.builder[BurgerSteps.BOTTOM_BUNS]()
    }

}

export {BurgerDirector}


const burgerBuilder = new BurgerBuilder();
const burgerDirector = new BurgerDirector(burgerBuilder)


