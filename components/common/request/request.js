import Btn from "../btn/btn";

const RequestSection = () => {
  return (
    <div className="">
      <div className="container px-8 mx-auto py-14">
        <h1 className="text-left mb-9 title">
          Request a free trial or get a quote right now.
        </h1>
        <Btn btnHref={"free-trial"} btnText={"Free Trial"} />
      </div>
    </div>
  );
};

export default RequestSection;
