import ItemsSection from "./items";

let retouchingImg1 =
  "/assets/img/all_services_afterbefore/Retouching/gvp-Photo-Retouching-1.jpg";
let retouchingImg2 =
  "/assets/img/all_services_afterbefore/Retouching/gvp-Photo-Retouching-2.jpg";

let shadowImg1 = "/assets/img/all_services_afterbefore/Shadow/gvp-Shadow-1.jpg";
let shadowImg2 = "/assets/img/all_services_afterbefore/Shadow/gvp-Shadow-2.jpg";

let reflectionImg1 =
  "/assets/img/all_services_afterbefore/Reflection/gvp-Reflection-3.jpg";
let reflectionImg2 =
  "/assets/img/all_services_afterbefore/Reflection/gvp-Reflection-4.jpg";

let colorCorrectionImg1 =
  "/assets/img/all_services_afterbefore/Color-Correction/gvp-image-Color-Correction-Service-01.jpg";
let colorCorrectionImg2 =
  "/assets/img/all_services_afterbefore/Color-Correction/gvp-image-Color-Correction-Service-02.jpg";

const ProfessionalWeOffer = () => {
  return (
    <div className="container px-8 mx-auto py-14">
      <div className="w-full text-center">
        <h1 className="text-3xl font-bold md:text-4xl text-primary dark:text-white">
          Professional
        </h1>
        <h2 className="text-2xl font-bold md:text-3xl">
          Photo Editing and Retouching Services
        </h2>
        <h1 className="text-3xl font-bold md:text-4xl text-primary dark:text-white">
          We Offers
        </h1>
      </div>
      {/* retouching services */}
      <div>
        <ItemsSection
          header={"Retouching Services"}
          paragraph={
            " Photo retouching is an important part of making photos beautiful and attractive used to improve the best quality and look of photos,creating look more professional and visually attractive. We use high techniques to remove blemishes, adjust skin tones, whiten teeth, remove wrinkles, and make other enhancements .Graphics View Point has expert team member in Photo retouching services and other photo editing services. You can use our Photo retouching service and other photo editing services."
          }
          btnHref={"services/retouching"}
          btnText={"view more"}
          afterImg={retouchingImg1}
          beforeImg={retouchingImg2}
          className="flex flex-col items-center gap-5 pt-14 lg:flex-row"
        />
      </div>
      {/* shadow services */}
      <div>
        <ItemsSection
          header={"Shadow Services"}
          paragraph={
            "Shadow Service is one of the of great importance image editing service for product showing. Everything in the world has a shadow and so does the product. There are products of various items whose product layout does not look unusual and attractive. By adding original view shadows to such photos, the product is made attractive. Drop Shadow, Natural Shadow, Reflection Shadow. Create Shadow. Graphics View Point has expert team member in image Shadow service and other photo editing services. You can use our Shadow service and other photo editing services."
          }
          btnHref={"services/shadow"}
          btnText={"view more"}
          afterImg={shadowImg1}
          beforeImg={shadowImg2}
          className="flex flex-col items-center gap-5 pt-14 lg:flex-row-reverse"
        />
      </div>
      {/* reflection services */}
      <div>
        <ItemsSection
          header={"Reflection Services"}
          paragraph={
            "The reflection service makes the image more realistic and attractive thereby easily attracting the attention of the buyers. As like Product reflection, Jewellery etc. Graphics View Point has expert team member in reflection service and other photo editing services. You can use our reflection service and other photo editing services."
          }
          btnHref={"services/reflection"}
          btnText={"view more"}
          afterImg={reflectionImg1}
          beforeImg={reflectionImg2}
          className="flex flex-col items-center gap-5 pt-14 lg:flex-row"
        />
      </div>
      {/* color correction services */}
      <div>
        <ItemsSection
          header={"Color Correction Services"}
          paragraph={
            "Color correction is the system of adjustment the color of image.There are three basic aspects to photo or product color correction: first, identifying the problem; Second, selecting the appropriate tool; And third, to coordinate.Color is attractive to people. To make e-commerce products or images eye-catching to customers, the same product is available in different colors according to the client's needs.Color correction service which is the color correction of difficult retouching areas such as: Photo areas, faces, skins, objects, jewelry, products, etc. Dull, damaged, weak, old photographs require color correction where there are unwanted/flawed areas. remove or change.Graphics View Point has expert team member in image Color correction service and other photo editing services. You can use our Color correction service and other photo editing services."
          }
          btnHref={"services/color-correction"}
          btnText={"view more"}
          afterImg={colorCorrectionImg1}
          beforeImg={colorCorrectionImg2}
          className="flex flex-col items-center gap-5 pt-14 lg:flex-row-reverse"
        />
      </div>
    </div>
  );
};

export default ProfessionalWeOffer;
