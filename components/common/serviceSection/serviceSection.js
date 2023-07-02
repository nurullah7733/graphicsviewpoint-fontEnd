import Link from "next/link";

const ServiceSection = ({ header, description }) => {
  return (
    <div className="flex flex-col items-center py-14">
      <h1 className="title">{header}</h1>
      <div className="lg:max-w-[70%] text-[16px] text-justify py-8 dark:text-white">
        <p className="inline"> {description}</p>
        <Link href="/free-trial">
          <a className="font-semibold hover:text-primary hover:font-bold dark:hover:text-secondary">
            Free Trial
          </a>
        </Link>
      </div>
    </div>
  );
};

export default ServiceSection;
