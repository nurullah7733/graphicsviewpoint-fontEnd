import Link from "next/link";
import React from "react";

export default function Custom404() {
  return (
    <div className="pt-[70px]">
      <main className="h-screen w-full flex flex-col justify-center items-center bg-[#1A2238]">
        <img src="/assets/img/logo/logo.svg" width={500} />
        <h1 className="text-9xl font-extrabold text-white tracking-widest">
          404
        </h1>
        <div className="bg-[#FF6A3D] px-2 text-sm rounded rotate-12 absolute">
          Page Not Found
        </div>
        <button className="mt-5">
          <div className="relative inline-block text-sm font-medium text-white group active:text-primary focus:outline-none focus:ring">
            <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-primary group-hover:translate-y-0 group-hover:translate-x-0"></span>

            <div className="relative block px-8 py-3 bg-primary border border-current">
              <Link href={"/"}>
                <a>Go Home</a>
              </Link>
            </div>
          </div>
        </button>
      </main>
    </div>
  );
}
