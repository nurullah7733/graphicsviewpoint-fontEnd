import Btn from "../../common/btn/btn";

const GallaryBottomSection = () => {
  return (
    <div className="flex items-center justify-center pt-8 md:py-14 pb-14">
      <div className="text-center max-w-3xlxl">
        <h1 className="text-xl font-bold md:text-5xl text-primary dark:text-white">
          Prepared to being your journey
          <br />
          with us
        </h1>
        <p className="my-5 text-base font-bold md:text-lg md:my-8">
          Get a comprehensive range of professional photoshop services at an
          affordable cost.
          <br />
          Ataract clients with high-end digital images.
        </p>
        <Btn btnHref={"free-trial"} btnText={"Free Trial"} />
      </div>
    </div>
  );
};

export default GallaryBottomSection;
