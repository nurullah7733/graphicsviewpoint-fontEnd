import React, { useEffect, useState } from "react";
import images from "./data";
import styles from "./portfolio.module.css";
import SectionDivider from "../../common/sectionDivider/sectionDivider";

function Portfolio() {
  const [tag, setTag] = useState("All");
  const [filteredImages, setFilteredImages] = useState([]);

  useEffect(() => {
    tag === "All"
      ? setFilteredImages(images)
      : setFilteredImages(images.filter((image) => image.tag === tag));
  }, [tag]);

  return (
    <div className="pt-0 py-14 md:pt-14 ">
      <div className="mt-8 mb-14 md:mt-0">
        <SectionDivider text={"View All Services"} />
      </div>
      <div className="container px-4 mx-auto ">
        <div className="px-4">
          <div className="flex flex-col items-center">
            <h1 className="pb-12 title">Our Portfolio</h1>
            <p className="lg:max-w-[50%] max-w-none text-justify pb-8 text-[16px] dark:text-white">
              Graphics View Point is an experienced and reliable company in
              photo editing. I have been working with skill for many years as
              like Background Remove, Create Shadow, Clipping Path, Photo
              Resizing, Ghost Mannequin, Photo Masking, Neck Joint, Shadow,
              Photo Retouching, Color Correction, Photo Restoration, Create
              Reflection, Jewellery retouching, Raster to Vector, etc. Confident
              enough to show our previous works. See the pictures below to get
              an idea of what kind of services we provide.
            </p>
          </div>
          <div className={`${styles.tags} pb-6`}>
            <TagButton
              name="All"
              tagActive={tag === "All" ? true : false}
              handleSetTag={setTag}
            />
            <TagButton
              name="Clipping_Path"
              tagActive={tag === "Clipping_Path" ? true : false}
              handleSetTag={setTag}
            />
            <TagButton
              name="Background_Remove"
              tagActive={tag === "Background_Remove" ? true : false}
              handleSetTag={setTag}
            />
            <TagButton
              name="Neck_Joint"
              tagActive={tag === "Neck_Joint" ? true : false}
              handleSetTag={setTag}
            />
            <TagButton
              name="Color_Correction"
              tagActive={tag === "Color_Correction" ? true : false}
              handleSetTag={setTag}
            />

            <TagButton
              name="Jewellery_Service"
              tagActive={tag === "Jewellery_Service" ? true : false}
              handleSetTag={setTag}
            />
            <TagButton
              name="Ghost_Mannequin"
              tagActive={tag === "Ghost_Mannequin" ? true : false}
              handleSetTag={setTag}
            />

            <TagButton
              name="Multi_Path"
              tagActive={tag === "Multi_Path" ? true : false}
              handleSetTag={setTag}
            />
            <TagButton
              name="Photo_Masking"
              tagActive={tag === "Photo_Masking" ? true : false}
              handleSetTag={setTag}
            />
            <TagButton
              name="Photo_Resizing"
              tagActive={tag === "Photo_Resizing" ? true : false}
              handleSetTag={setTag}
            />
            <TagButton
              name="Photo_Restoration"
              tagActive={tag === "Photo_Restoration" ? true : false}
              handleSetTag={setTag}
            />
            <TagButton
              name="Retouching_Service"
              tagActive={tag === "Retouching_Service" ? true : false}
              handleSetTag={setTag}
            />
            <TagButton
              name="Shadow_Service"
              tagActive={tag === "Shadow_Service" ? true : false}
              handleSetTag={setTag}
            />
          </div>
          <div className="min-h-[270px]">
            <div className={styles.img_container}>
              {filteredImages.map((image) => (
                <div key={image.id} className={styles.image_card}>
                  <img
                    className={styles.image}
                    src={`${image.imageName}`}
                    alt={`${image.imageName}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const TagButton = ({ name, handleSetTag, tagActive }) => {
  return (
    <button
      className={`text-sm mb-1 tag mr-1 bg-gray-100 text-primary dark:bg-gray-300 ${
        tagActive ? styles.active : null
      } ${styles.tag_button}  py-1 px-2 rounded`}
      onClick={() => handleSetTag(name)}
    >
      {name.split("_").join(" ")}
    </button>
  );
};

export default Portfolio;
