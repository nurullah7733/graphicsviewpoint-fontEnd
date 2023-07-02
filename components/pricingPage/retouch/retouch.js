import React from "react";
import PricingTable from "../../common/pricingTable/pricingTable";
import PricingTableHeader from "../../common/pricingTable/pricingTableHeader";

const Retouch = () => {
  const before = "/assets/img/all_services_afterbefore/Retouching/2.jpg";
  const after = "/assets/img/all_services_afterbefore/Retouching/1.jpg";
  return (
    <div className="container px-4 mx-auto">
      <div className="px-4">
        {/* title */}
        <div className="py-12">
          <PricingTableHeader
            before={before}
            after={after}
            headerText={"Retouching Services"}
          />
        </div>
        {/*Pricing Table */}
        <div className="flex flex-wrap justify-center -mx-4 gap-y-7">
          <PricingTable
            headline={"Simple Retouching Services"}
            price={"0.99"}
            description={
              "Here are some additional details that you may want to include in your pricing plan description:"
            }
            title1={"100% work quality"}
            title2={"24/7 Support"}
            title3={"Unlimited Revision"}
            title4={"On time job delivery "}
            title5={"Bulk order discount "}
            title6={"100% secured file transfer"}
            title7={"Skilled photo editors for certain services"}
            title8={"We are always try to charge as minimum as possible."}
            buttonText={"Start Your Free Trial Today"}
          />
          <PricingTable
            headline={"Medium Retouching Services"}
            price={"1.50"}
            description={
              "Here are some additional details that you may want to include in your pricing plan description:"
            }
            title1={"100% work quality"}
            title2={"24/7 Support"}
            title3={"Unlimited Revision"}
            title4={"On time job delivery "}
            title5={"Bulk order discount "}
            title6={"100% secured file transfer"}
            title7={"Skilled photo editors for certain services"}
            title8={"We are always try to charge as minimum as possible."}
            buttonText={"Start Your Free Trial Today"}
          />
          <PricingTable
            headline={"Complex Retouching Services"}
            price={"4.15"}
            description={
              "Here are some additional details that you may want to include in your pricing plan description:"
            }
            title1={"100% work quality"}
            title2={"24/7 Support"}
            title3={"Unlimited Revision"}
            title4={"On time job delivery "}
            title5={"Bulk order discount "}
            title6={"100% secured file transfer"}
            title7={"Skilled photo editors for certain services"}
            title8={"We are always try to charge as minimum as possible."}
            buttonText={"Start Your Free Trial Today"}
          />
        </div>
      </div>
    </div>
  );
};

export default Retouch;
