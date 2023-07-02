import Head from "next/head";

const Privecy = () => {
  return (
    <>
      <Head>
        <title>Privecy Policy</title>
        <meta
          property="og:title"
          name="title"
          content="Privacy Policy | Graphics View Point "
        />
        <meta
          property="og:description"
          name="description"
          content="Privacy policy of Graphics View Point.Please read carefully so that you can use our website without any violation . contact us for 
          E-mail:info@graphicsviewpoint.com 
          Skype : graphicsviewpoint24@gmail.com"
        />
        <link rel="icon" href="/assets/img/logo/logo.svg" />
      </Head>
      <div className="pt-[70px]">
        <div className="container px-8 mx-auto py-14">
          <div>
            <h1 className="text-left title">Our Privacy Policy</h1>
            <p className="text-justify">
              Here at Graphics View Point we appreciate and understand the
              importance of separate privacy. We goal to protect our clients
              personal data and files to ensure smooth secure and satisfied
              business relationships. Feel free to contact us at
              <span className="font-semibold">
                {" "}
                info@graphicsviewpoint.com
              </span>{" "}
              for your questions about our Privacy Policy.
            </p>
          </div>
          <div>
            <h3 className="pt-5 text-xl font-bold text-primary dark:text-white">
              CONTACT INFORMATION
            </h3>
            <p className="text-justify">
              Graphics View Point provide nil tolerance for contact information
              sharing. We do not provide your contact information to another
              parties other than our own usage.
            </p>
          </div>
          <div>
            <h3 className="pt-5 text-xl font-bold text-primary dark:text-white">
              PHOTO COPYRIGHT
            </h3>
            <p className="text-justify">
              Photo copyright of our client or theirs clients is our highest
              priority. We will not share, provide or use photos of our clients.
              We have strong observation system to identify Copyright theft for
              our clients.
            </p>
          </div>
          <div>
            <h3 className="pt-5 text-xl font-bold text-primary dark:text-white">
              RESOURCE HACKING
            </h3>
            <p className="text-justify">
              We have a safeguard system against hackers and use guarded servers
              for file transfer. We also block search engine bots from crawling
              resources from our personal servers.
            </p>
          </div>
          <div>
            <h3 className="pt-5 text-xl font-bold text-primary dark:text-white">
              TEAMWORK
            </h3>
            <p className="text-justify">
              As a large scale Graphics View point photo editing service
              provider, we strongly believe in team work that ensures us the
              highest level of best quality, scale, and growth.
            </p>
          </div>
          <div>
            <h3 className="pt-5 text-xl font-bold text-primary dark:text-white">
              QUALITY OF LIFE
            </h3>
            <p className="text-justify">
              Outsourcing is meant for ensuring the best quality of life for
              those who outsource jobs to us. We are always conscious of this
              fact and effort to provide hands-free and worry-free outsourcing
              solutions for photo editing. Being based in one of the best
              countries with inexpensive labor, we also ensure the best quality
              living standard of our industry as well.
            </p>
          </div>
          <div>
            <h3 className="pt-5 text-xl font-bold text-primary dark:text-white">
              GREEN OFFICE
            </h3>
            <p className="text-justify">
              As like other western offices, we operate a paperless office.Most
              of our work-stations are strength affordable and environmentally
              friendly. We also practice the reduction of dissipation and
              recycling.
            </p>
          </div>
          <div>
            <h3 className="pt-5 text-xl font-bold text-primary dark:text-white">
              COMPLIANCE
            </h3>
            <p className="text-justify">
              We obey by with most of the controversy issues related to Business
              Process Outsourcing. Starting from employee salary to
              environmental concerns. We are also against intense child labor.
            </p>
          </div>
          <div>
            <h3 className="pt-5 text-xl font-bold text-primary dark:text-white">
              SOCIAL BUSINESS
            </h3>
            <p className="text-justify">
              We are firm believers in the Social Business idea of Dr. Yunus,
              the Nobel Peace Laureate from Bangladesh. Graphics View Point was
              established on the objective of social business. It was start to
              utilize the existing industry professionals to best market and
              help highly skilled graphic designers work in a best environment
              and improve their livelihood.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Privecy;
