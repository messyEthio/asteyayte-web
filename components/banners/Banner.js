import React from "react";
import Image from "next/image";

export default function Banner() {
  return (
    <div className="flex mt-14">
      <Image
        src={"/assets/banner.png"}
        layout="intrinsic"
        width={"500"}
        height="300"
        alt="banner"
      />
    </div>
  );
}
