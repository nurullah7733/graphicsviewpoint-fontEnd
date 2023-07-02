import Head from "next/head";
import MainSlider from "../components/home/slider/slider";
import styles from "../styles/Home.module.css";
import Portfolio from "../components/home/portfolio/portfolio";
import OurFetures from "../components/home/ourFeatures/ourFeatures";
import CompareImg from "../components/home/compareImg/compareImg";
import OurCapacity from "../components/home/ourCapacity/ourCapacity";
import Testimonial from "../components/home/testimonial/testimonial";
import ProfessionalWeOffer from "../components/home/professionalWeOffer/professionalWeOffer";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Graphics View Point</title>
        <link rel="icon" href="/assets/img/logo/logo.svg" />
        <meta
          property="og:title"
          name="title"
          content="High Volume Photo Editing With Guaranteed Quality"
        />
        <meta
          property="og:description"
          name="description"
          content="We provide 100% work quality and on time job delivery. We have Skilled photo editors for certain services. We are always try to charge as minimum as possible. We provide 24 hours support to the client."
        />
        <meta
          property="og:image"
          content="/assets/img/seo/gvp-Jewellery-Retouching-and-Color-Correction.png"
        />
      </Head>

      <main className={styles.main}>
        <MainSlider />
        <OurFetures />
        <CompareImg />
        <ProfessionalWeOffer />
        <Portfolio />
        <OurCapacity />
        <Testimonial />
      </main>
    </div>
  );
}
