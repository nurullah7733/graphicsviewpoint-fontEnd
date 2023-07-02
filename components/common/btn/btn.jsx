import Link from "next/link";

const Btn = ({ btnText, btnHref }) => {
  return (
    <div className="inline-block md:px-6 px-4 md:py-2.5 py-2  rounded-lg bg-primary dark:bg-gray-800 hover:!bg-gray-900 cursor-pointer">
      <Link href={`/${btnHref}`}>
        <a className="text-sm font-semibold text-white uppercase md:text-base">
          {btnText}
        </a>
      </Link>
    </div>
  );
};

export default Btn;
