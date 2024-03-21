// import { useRouter } from "next/router";
// import { useEffect } from "react";


// const Recipe = ({initialData}) => {
//     const router = useRouter();
//     const { recipes, comment_page } = router.query;

//     let label = "Next Recipe";
//     let link = "recipes/breakfast/HealthyBreakfast";
//     let default_comment_pages_value = Number(comment_page) ?? 10
//     if (recipes && recipes[2] === "HealthyBreakfast") {
//         label = "Previous Recipe";
//         link = "/recipes/breakfast/AnotherHealthyBreakfast";
//     }

//     useEffect(() => {
//         router.push(link + '?comment_page' + default_comment_pages_value, undefined, { shallow: true })
//     }, []);

//     useEffect(() => {
//         console.log(comment_page, initialData)
//     }, [comment_page, initialData]);

//     const nextPageNumber = (page: string | string[] | undefined): number => {
//         return Number(page) + 1;
//     }


//     return (
//         <div>
//             Recipe: in{" "}
//             {recipes &&
//                 recipes.map((recipe: string, index: number) => {
//                     return (
//                         <div key={index}>
//                             <b>{recipe}</b>
//                         </div>
//                     );
//                 })}
//             <button onClick={() => router.push(link)}>{label}</button>
//             <button onClick={() => router.push(link + '?comment_page' + nextPageNumber(comment_page), undefined, { shallow: true })}>Change comment page</button>
//         </div>
//     );
// };

// Recipe.getInitialProps = () => {
//     const initialData = 'data on load: ' + Math.random();
//     return {initialData};
// };


 
// export default Recipe;


import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";
import { ArticleDataService, IArticle } from "@/pages/core/data_service";
import { BurgerDirector } from "@/pages/core/burger-director";
import { BurgerBuilder } from "@/pages/core/burger-builder";
import { Kitchen, IStrategy } from "@/pages/core/burger-strategy";
import { Strategies, StrategiesNames } from "@/pages/core/burger-config";

export default function Recipe({ initialData }: Partial<any>){
  const router = useRouter();
  const [content, setContent] = useState<IArticle>({} as IArticle);
  const { pid } = router.query;
  const links = ArticleDataService.getInstance().getNavigation();
  const burgerBuilder = new BurgerBuilder();
  const burgerDirector = new BurgerDirector();
  burgerDirector.setBuilder(burgerBuilder);

  let burgerType = null;
  let context: Kitchen;
  let currentBurgerType: StrategiesNames;
  const changeBurgerType = () => {
    console.log("current burger type===> ", currentBurgerType);
    const newStrategy =
      currentBurgerType === StrategiesNames.HAMBURGER
        ? StrategiesNames.CHICKENBURGER
        : StrategiesNames.HAMBURGER;
    currentBurgerType = newStrategy;
    context.setStrategy(Strategies[currentBurgerType]);
    context.bakeSomething(burgerBuilder, burgerDirector);
  };

  useEffect(() => {
    if (pid) {
      setContent({
        ...ArticleDataService.getInstance().getArcticle(pid as string),
      });
    }
  }, [pid]);

  useMemo(() => {
    if (Object.keys(content).length > 0) {
      console.log("content.burger", content.burger);
      burgerType = Strategies[content.burger as StrategiesNames];
      context = new Kitchen(burgerType);
      context.bakeSomething(burgerBuilder, burgerDirector);
    }
  }, [content]);

  const { recipe, recipe_type } = router.query; //use query but query in undefined first
  return (
    <p>
      Recipe: in <b>{recipe_type}</b> is <b>{recipe}</b>
    </p>
  ); // not undefined
};

