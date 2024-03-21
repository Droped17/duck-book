import { getMock } from "../mocks";
import { BurgerSteps } from "./burger-config";

class BurgerDataService {
    private static instance: BurgerDataService;
    private step!: {key: BurgerSteps,value: string}[];
    private constructor(){
        this.step = []
    }

    public static getInstance(): BurgerDataService{
        if (!BurgerDataService.instance) {
            console.log('BurgerDataService new instance');
            BurgerDataService.instance = new BurgerDataService();
        }
        return BurgerDataService.instance;
    }

    getStep(key: BurgerSteps){
        let currentStep = this.step.find((step: {key: BurgerSteps,value: string}) => step.key === key)
        if (!currentStep) {
            currentStep = {
                key,
                value: getMock.baking[key]
            }
            this.step.push(currentStep);
        }
        return currentStep;
    }
}

export {BurgerDataService};