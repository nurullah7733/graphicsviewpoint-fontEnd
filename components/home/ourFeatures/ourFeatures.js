import React from "react";

const OurFetures = () => {
  return (
    <div className="container px-4 mx-auto py-14 ">
      <div className="px-4">
        <div>
          <h1 className="pb-12 title">Our Features</h1>
        </div>
        <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
          <div className="flex flex-col items-center py-8 border-[3px] border-primary dark:border-gray-500 our_feateres_hover rounded-md dark:bg-gray-800">
            <img
              width={90}
              height={90}
              src="/assets/img/Features/encrypted.svg"
              alt="Secure File Transfer"
            />
            <h2 className="pt-5 text-xl text-center lg:text-2xl dark:text-white">
              Secure File Transfer
            </h2>
          </div>
          <div className="flex flex-col items-center py-8 border-[3px] border-primary dark:border-gray-500 our_feateres_hover rounded-md dark:bg-gray-800">
            <img
              width={90}
              height={90}
              src="/assets/img/Features/fast-delivery.svg"
              alt="On-Time Delivery"
            />
            <h2 className="pt-5 text-xl text-center lg:text-2xl dark:text-white">
              On-Time Delivery
            </h2>
          </div>
          <div className="flex flex-col items-center py-8 border-[3px] border-primary dark:border-gray-500 our_feateres_hover rounded-md dark:bg-gray-800">
            <img
              width={90}
              height={90}
              src="/assets/img/Features/cost-rating.svg"
              alt="Low Cost"
            />
            <h2 className="pt-5 text-xl text-center lg:text-2xl dark:text-white">
              Low Cost
            </h2>
          </div>
          <div className="flex flex-col items-center py-8 border-[3px] border-primary dark:border-gray-500 our_feateres_hover rounded-md dark:bg-gray-800">
            <img
              width={90}
              height={90}
              src="/assets/img/Features/icon-coupon.svg"
              alt="Bulk Order Discount"
            />
            <h2 className="pt-5 text-xl text-center lg:text-2xl dark:text-white">
              Bulk Order Discount
            </h2>
          </div>
          <div className="flex flex-col items-center py-8 border-[3px] border-primary dark:border-gray-500 our_feateres_hover rounded-md dark:bg-gray-800">
            <img
              width={90}
              height={90}
              src="/assets/img/Features/client-meeting.svg"
              alt="24/7 Client Support"
            />
            <h2 className="pt-5 text-xl text-center lg:text-2xl dark:text-white">
              24/7 Client Support
            </h2>
          </div>
          <div className="flex flex-col items-center py-8 border-[3px] border-primary dark:border-gray-500 our_feateres_hover rounded-md dark:bg-gray-800">
            <img
              width={90}
              height={90}
              src="/assets/img/Features/icon-circle.svg"
              alt="Unlimited Revisions"
            />
            <h2 className="pt-5 text-xl text-center lg:text-2xl dark:text-white">
              Unlimited Revisions
            </h2>
          </div>
          <div className="flex flex-col items-center py-8 border-[3px] border-primary dark:border-gray-500 our_feateres_hover rounded-md dark:bg-gray-800">
            <img
              width={90}
              height={90}
              src="/assets/img/Features/sprinting.svg"
              alt="Fast  Rush Services"
            />
            <h2 className="pt-5 text-xl text-center lg:text-2xl dark:text-white">
              Fast & Rush Services
              {/* Fast & Rush Services */}
            </h2>
          </div>
          <div className="flex flex-col items-center py-8 border-[3px] border-primary dark:border-gray-500 our_feateres_hover rounded-md dark:bg-gray-800">
            <img
              width={90}
              height={90}
              src="/assets/img/Features/satisfaction-meter.svg"
              alt="Customer Satisfaction"
            />
            <h2 className="pt-5 text-xl text-center lg:text-2xl dark:text-white">
              Customer Satisfaction
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurFetures;
