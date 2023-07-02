import ProgressBar from "@ramonak/react-progress-bar";
import { CountUp } from "use-count-up";
import ScrollTrigger from "react-scroll-trigger";
import { useState } from "react";
import { FaHandshake, FaPeopleCarry } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { useSelector } from "react-redux";
import SkillBar from "react-skillbars";

const SkillAndQualification = () => {
  let mode = useSelector((state) => state.mode.mode);
  let [visibleCounter, setVisibleCounter] = useState(false);
  let [photoshopLavel, setPhotoshopLavel] = useState(0);
  let [illustrator, setIllustrator] = useState(0);
  let [imageEditing, setImageEditing] = useState(0);
  let [seoManagement, setSeoManagement] = useState(0);

  const skills = [
    {
      type: "Photoshop",
      level: photoshopLavel,
      color: {
        bar: "#4b174b",
        title: { text: "#fff", background: "#4b174b" },
      },
    },
    {
      type: "Illustrator",
      level: illustrator,
      color: {
        bar: "#4b174b",
        title: { text: "#fff", background: "#4b174b" },
      },
    },
    {
      type: "Image Editing",
      level: imageEditing,
      color: {
        bar: "#4b174b",
        title: { text: "#fff", background: "#4b174b" },
      },
    },
    {
      type: "SEO Management",
      level: seoManagement,
      color: {
        bar: "#4b174b",
        title: { text: "#fff", background: "#4b174b" },
      },
    },
  ];

  return (
    <div className="container px-8 mx-auto py-14">
      <div className="flex-col gap-5 md:flex md:flex-row">
        <div className="w-full md:w-1/2 ">
          <h2 className="mb-3 text-4xl font-bold text-primary dark:text-white">
            Our Skills
          </h2>

          <div className="mb-10 border border-b-2"></div>
          <div>
            <ScrollTrigger
              onEnter={() => {
                setPhotoshopLavel(95);
                setIllustrator(85);
                setImageEditing(90);
                setSeoManagement(85);
              }}
              onExit={() => {
                setPhotoshopLavel(0);
                setIllustrator(0);
                setImageEditing(0);
                setSeoManagement(0);
              }}
            >
              <SkillBar
                skills={skills}
                height={25}
                barBackground={"#7e7e7e"}
                animationDelay={0}
              />
            </ScrollTrigger>
          </div>
        </div>
        <div className="w-full mt-12 md:mt-0 md:flex md:w-1/2 md:justify-end">
          <div>
            <h2 className="mb-3 text-4xl font-bold text-primary dark:text-white">
              Our Qualification
            </h2>
            <div className="mb-5 border border-b-2"></div>
            <div>
              <div>
                <div className="flex mb-5 gap-x-5">
                  <div>
                    <FaHandshake
                      size={70}
                      className="text-primary dark:text-white"
                    />
                  </div>
                  <div
                    style={{
                      fontSize: "30px",
                      fontWeight: "bold",
                      lineHeight: "initial",
                      position: "relative",
                      width: "100%",
                    }}
                  >
                    <ScrollTrigger
                      onEnter={() => setVisibleCounter(true)}
                      onExit={() => setVisibleCounter(false)}
                    >
                      {visibleCounter && (
                        <CountUp isCounting end={400} duration={2} />
                      )}
                      +
                    </ScrollTrigger>
                    <span className="absolute text-sm">Happy Client's</span>
                  </div>
                </div>

                <div className="flex gap-5 mb-5">
                  <div>
                    <AiOutlineCheckCircle
                      size={70}
                      className="text-primary dark:text-white"
                    />
                  </div>
                  <div
                    style={{
                      fontSize: "30px",
                      fontWeight: "bold",
                      lineHeight: "initial",
                      position: "relative",
                      width: "100%",
                    }}
                  >
                    <ScrollTrigger
                      onEnter={() => setVisibleCounter(true)}
                      onExit={() => setVisibleCounter(false)}
                    >
                      {visibleCounter && (
                        <CountUp isCounting end={5000} duration={2} />
                      )}
                      +
                    </ScrollTrigger>
                    <span className="absolute text-sm ">Order Completed</span>
                  </div>
                </div>

                <div className="flex gap-5 mb-5">
                  <div>
                    <FaPeopleCarry
                      size={70}
                      className="text-primary dark:text-white"
                    />
                  </div>
                  <div
                    style={{
                      fontSize: "30px",
                      fontWeight: "bold",
                      lineHeight: "initial",
                      position: "relative",
                      width: "100%",
                    }}
                  >
                    <ScrollTrigger
                      onEnter={() => setVisibleCounter(true)}
                      onExit={() => setVisibleCounter(false)}
                    >
                      {visibleCounter && (
                        <CountUp isCounting end={40} duration={2} />
                      )}
                      +
                    </ScrollTrigger>
                    <span className="absolute text-sm">Regular Client's</span>
                  </div>
                </div>

                <div className="flex gap-5 mb-5">
                  <div>
                    <HiUserGroup
                      size={70}
                      className="text-primary dark:text-white"
                    />
                  </div>
                  <div
                    style={{
                      fontSize: "30px",
                      fontWeight: "bold",
                      lineHeight: "initial",
                      position: "relative",
                      width: "100%",
                    }}
                  >
                    <ScrollTrigger
                      onEnter={() => setVisibleCounter(true)}
                      onExit={() => setVisibleCounter(false)}
                    >
                      {visibleCounter && (
                        <CountUp
                          isCounting
                          end={30}
                          duration={2}
                          style={{ display: "none" }}
                        />
                      )}
                      +
                    </ScrollTrigger>
                    <span className="absolute text-sm">Expert Designers</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

module.exports = SkillAndQualification;
