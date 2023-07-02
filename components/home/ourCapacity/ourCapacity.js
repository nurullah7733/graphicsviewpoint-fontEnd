import React from "react";
import styles from "./ourCapacity.module.css";

const OurCapacity = () => {
  return (
    <div className="container px-4 mx-auto py-14">
      <div className="grid grid-cols-1 px-4 lg:grid-cols-2 lg:justify-items-end">
        <div className="flex flex-col items-center">
          <h1 className="pb-12 title">Our Capacity</h1>
          <p className="text-[16px] text-justify dark:text-white pb-8 lg:pb-0">
            Team of our photo editor is being our big power and who are
            professionals photo editors. Our photo editors team who work
            tactfully. Further, we have expert quality controller (QC) panel and
            who always check out best quality of work properly. We have
            production manager and production organizer who always try how to
            progress quality of work gestion of Graphics View Point support team
            communicates with 24/7 clients and our expert team of editor works
            24 hours service differ shifts. Graphics View Point is a family. We
            think that, it has big stower and every members of Graphics View
            Point works honestly. Graphics View Point thinks that, no
            alternative qualitative in the globe. Therefore, Intension of
            Graphics View Point is being worked Properly.
          </p>
        </div>
        <div>
          <iframe
            className={`${styles.iframe}`}
            src="https://www.youtube.com/embed/pkHfut-rQaA"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default OurCapacity;
