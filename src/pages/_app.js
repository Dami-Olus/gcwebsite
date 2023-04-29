import "@/styles/globals.css";
import { Readex_Pro } from "next/font/google";

const readex_pro = Readex_Pro({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <main className={readex_pro.className}>
      <Component {...pageProps} />
    </main>
  );
}
