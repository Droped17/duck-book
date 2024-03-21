import React from "react";
import {render,screen} from '@testing-library/react'
import Home from '../index';
import RecipeList from '../recipe-list';


describe('Home',()=> {
    it('renders a heading',()=> {
        render(<Home/>);
    })

    const heading = screen.getByRole('heading',{
        name: /Hello this is main MainPage/i
    });

    expect(heading).toBeInTheDocument()
});

describe('RecipeList',()=>{
    it('renders a heading',()=>{
        render(<RecipeList />)
        const heading = screen.getByRole('heading',{
            name: /Recipe list/i
        });

        expect(heading).toBeInTheDocument();
    });
});

