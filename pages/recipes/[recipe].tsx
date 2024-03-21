import { useRouter } from "next/router";
import { createGlobalStyle } from "styled-components";

const Recipe = () => {
    const router = useRouter();
    const {recipe,additionalData} = router.query; //use query but query in undefined first
    return <p>Recipe: {recipe} and {additionalData}</p> // not undefined
};

export default Recipe;