import ComparingImg from "../../common/comparingImg/comparingImg";

const TextWithImg = ({ after, before, text }) => {
  return (
    <div className="flex flex-col gap-5 lg:flex-row">
      <div className="w-full lg:w-1/2">
        <ComparingImg after={after} before={before} />
      </div>
      <div className="w-full lg:w-1/2">
        <p className="text-base leading-8 text-justify text-black dark:text-white">
          {text}
        </p>
      </div>
    </div>
  );
};

export default TextWithImg;
