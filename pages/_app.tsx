import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "@/styles/Home.module.scss";
import { Provider } from "react-redux";
import { wrapper } from "./store";

function CookBook({ Component, pageProps }: AppProps) {
  const {store} = wrapper.useWrappedStore(pageProps);
  return (
    <Provider store={store}>

      <Component {...pageProps} />
    </Provider>

  )
}

export default CookBook;
