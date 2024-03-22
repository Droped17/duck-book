import React from "react";
import {fireEvent, render,screen} from "@testing-library/react";
// Atoms
import TextInput from "@/ui/atoms/text-input";
import PasswordInput from "@/ui/atoms/password-input";
import SubmitButton from "@/ui/atoms/submit-button";
// Molecules
import LoginForm from "@/ui/moleculas/login-form";
import { Labels, Placeholders,TestIDs } from "../core/configs";
// test
import { describe } from "node:test";
import "@testing-library/jest-dom";

export const testObject: {[key:string]: any} = {
    isTextInput : (screen : any) => screen.getByPlaceholderText(Placeholders.TEXT_INPUT),
    isPasswordInput : (screen: any) => screen.getByPlaceholderText(Placeholders.PASSWORD_INPUT),
    isSubmitButton: (screen : any) => screen.getByText(Labels.SUBMIT),
    isErrorField: (screen:any) => screen.getByTestId(TestIDs.ERROR)
};

export const makeLogin = (length: number) => {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for(var i = 0;i < length; i++){
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
};

const expectation = (element: any) => expect(element).toBeInTheDocument();

describe('UI input must render properly',()=>{
    it('renders a text input',()=> {
        render(<TextInput/>);
        const input = testObject.isTextInput(screen);
        expectation(testObject.isTextInput(screen));
        fireEvent.change(input,{target: {value: 'tect'}});
        expect(input).toHaveDisplayValue('');
    });
    it('renders a password input',()=> {
        render(<PasswordInput/>);
        const input = testObject.isPasswordInput(screen);
        expectation(input);
        fireEvent.change(input,{target: {value: 'tect'}});
        expect(input).toHaveDisplayValue('');
        const generatedLogin = makeLogin(51);
        fireEvent.change(input,{target: {value: generatedLogin}})
        expect(input).toHaveDisplayValue('');
    });
    it('renders a submit button',()=> {
        render(<SubmitButton/>);
        expectation(testObject.isSubmitButton(screen));
    });
});


describe("Form should be rebdered properly",()=>{
    it('renders login form',()=>{
        render(<LoginForm/>);
        const testKeys = Object.keys(testObject);
        if (Array.isArray(testKeys) && testKeys.length > 0) {
            testKeys.forEach((test:string)=> {
                expectation(testObject[test](screen));
            })
        }
    });

    // it('Should render login input and check that it can take only English letters',()=>{
    //     render(<TextInput onLoginEnter={(value:any)=> value}/>);
    //     const input = testObject.isTextInput(screen);
    //     expectation(testObject.isTextInput(screen));

    //     fireEvent.change(input, {target: {value: "≈∂åƒ∑ƒ®"}});
    //     expect(input).toHaveDisplayValue('');

    //     const generatedLogin = makeLogin(101);
    //     fireEvent.change(input,{target: {value: generatedLogin}});
    //     expect(input).toHaveDisplayValue('');    
    // });
});


