import { useRouter } from "next/router";
import { createGlobalStyle } from "styled-components";

const Recipe = () => {
    const router = useRouter();
    const {recipe,recipe_type} = router.query; //use query but query in undefined first
    return <p>Recipe: in <b>{recipe_type}</b> is <b>{recipe}</b></p> // not undefined
};

export default Recipe;