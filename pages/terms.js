import Head from "next/head";
import Link from "next/link";

const Term = () => {
  return (
    <>
      <Head>
        <title>Terms & Conditions</title>
        <meta
          property="og:title"
          name="title"
          content="Terms & Condition | Graphics View Point "
        />
        <meta
          property="og:description"
          name="description"
          content="Terms & Condition of Graphics View Point.Please read carefully so that you can use 
          our website without any violation . contact us for 
          E-mail:info@graphicsviewpoint.com 
          Skype : graphicsviewpoint24@gmail.com"
        />
        <link rel="icon" href="/assets/img/logo/logo.svg" />
      </Head>
      <div className="pt-[70px]">
        <div className="container px-8 mx-auto py-14">
          <h1 className="text-left title">Our Terms & Conditions</h1>
          <h4 className="text-lg md:text-2xl text-primary dark:text-white">
            Welcome to Graphics View Point.
          </h4>

          <div>
            <p className="pt-6 text-justify">
              This terms and conditions outlines the rules and regulations for
              the use of Graphics View Point. Website, located at
              <Link href={"/"}>
                <a className="font-semibold text-primary dark:text-secondary">
                  {" "}
                  https//graphicsviewpoint.com/
                </a>
              </Link>
            </p>
            <p className="py-6 text-justify">
              To penetrating this website we guess that you accept these terms
              and conditions. Don't continue to use Graphics View Point if you
              don't agree to take all of the terms and conditions stated on this
              page.
            </p>
            <p className="text-justify">
              The following applicable to this terms and conditions
              confidentiality statement and disclaimer notice and all agreements
              “ customer ” "You" and “ Your ” refers to you, the person log on
              this website and attending to the Company terms and conditions. “
              The Company ”, “ Ourselves ”, “ We ”, “ Our ” and “ Us ”, refers
              to the our Company. “ Party ” , “ Parties ” or “ Us ”, refers to
              the both customer and ourselves. All terms relate to the offer
              receiving, and consideration of payment necessary to take over the
              method of our backing to the customer in the most applicable
              manner for the express motive of meeting the customer’s
              requirements in respect of the rule of the Company’s stated
              services in agreement with and subject to conventional law of
              Netherlands. Anybody use of the below applicable or other words in
              the singular or plural capitalization and/ or he she or they are
              taken as exchangeable and Hence the same is mentioned.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Term;
