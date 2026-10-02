import "@/styles/globals.css";
import MainLayout from "@/layouts/MainLayout";
import SmoothScroll from "@/components/shared/SmoothScroll";

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => <MainLayout>{page}</MainLayout>);
  return (
    <SmoothScroll>
      {getLayout(<Component {...pageProps} />)}
    </SmoothScroll>
  );
}
