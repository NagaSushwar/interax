import { FaChevronRight } from "react-icons/fa";
import iphone from "./../../public/iphone.png";
import Image from "next/image";

export default function Page1() {
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-1/4 bg-gray-100 p-4 space-y-4">
        <div className="flex justify-between items-center cursor-pointer">
          Woman's Fashion <FaChevronRight />
        </div>
        <div className="flex justify-between items-center cursor-pointer">
          Men's Fashion <FaChevronRight />
        </div>
        <div className="cursor-pointer">Electronics</div>
        <div className="cursor-pointer">Home & Lifestyle</div>
        <div className="cursor-pointer">Medicine</div>
        <div className="cursor-pointer">Sports & Outdoor</div>
        <div className="cursor-pointer">Baby's & Toys</div>
        <div className="cursor-pointer">Groceries & Pets</div>
        <div className="cursor-pointer">Health & Beauty</div>
      </div>

      {/* Banner */}
      <div className="w-3/4 bg-black text-white p-8 flex items-center justify-between">
        {/* Text Section */}
        <div>
          <p className="text-sm">iPhone 14 Series</p>
          <h1 className="text-4xl font-bold">Up to 10% off Voucher</h1>
          <button className="mt-4 inline-flex items-center text-white bg-gray-800 px-4 py-2 rounded">
            Shop Now <span className="ml-2">&#8594;</span>
          </button>
        </div>

        {/* Image Section */}
        <Image src={iphone} alt="iPhone 14" className="w-1/2 object-cover" />
      </div>
    </div>
  );
}
