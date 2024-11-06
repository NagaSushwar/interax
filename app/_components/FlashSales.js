import { FaEye, FaHeart } from "react-icons/fa";
import { IoArrowBack } from "react-icons/io5";
import { IoArrowForward } from "react-icons/io5";

export default function FlashSales() {
  const products = [
    {
      name: "HAVIT HV-G92 Gamepad",
      image: "https://via.placeholder.com/150",
      discount: 40,
      price: 120,
      oldPrice: 160,
      reviews: 88,
      inStock: true,
    },
    {
      name: "AK-900 Wired Keyboard",
      image: "https://via.placeholder.com/150",
      discount: 35,
      price: 960,
      oldPrice: 1160,
      reviews: 75,
      inStock: true,
    },
    {
      name: "IPS LCD Gaming Monitor",
      image: "https://via.placeholder.com/150",
      discount: 30,
      price: 370,
      oldPrice: 400,
      reviews: 99,
      inStock: false,
    },
    {
      name: "S-Series Comfort Chair",
      image: "https://via.placeholder.com/150",
      discount: 25,
      price: 375,
      oldPrice: 400,
      reviews: 99,
      inStock: true,
    },
    {
      name: "S-Series Comfort Chair",
      image: "https://via.placeholder.com/150",
      discount: 25,
      price: 375,
      oldPrice: 400,
      reviews: 99,
      inStock: true,
    },
  ];
  return (
    <>
      <div className="p-8 bg-white">
        {/* Header Section */}
        <div className="mb-6">
          <p className="text-red-500 font-bold flex items-center">
            <span className="mr-2 h-[40px] w-[20px] bg-red-500 font-semibold"></span>{" "}
            Today's
          </p>
          <div className="flex ">
            <h2 className="text-[36px] font-semibold w-1/2">Flash Sales</h2>
            {/* Countdown Timer */}
            <div className="flex text-2xl font-bold mt-4 space-x-4 w-1/2">
              <div className="text-center">
                <p>Days</p>
                <p>03</p>
              </div>
              <span>:</span>
              <div className="text-center">
                <p>Hours</p>
                <p>23</p>
              </div>
              <span>:</span>
              <div className="text-center">
                <p>Minutes</p>
                <p>19</p>
              </div>
              <span>:</span>
              <div className="text-center">
                <p>Seconds</p>
                <p>56</p>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center cursor-pointer">
                <IoArrowBack />
              </div>
              <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center cursor-pointer">
                <IoArrowForward />
              </div>
            </div>
          </div>
        </div>

        {/* Products Section */}
        <div className="grid grid-cols-5 gap-4">
          {/* Product Card */}
          {products.map((product, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-lg relative">
              {/* Discount Badge */}
              <span className="absolute top-2 left-2 bg-red-500 text-white text-sm px-2 rounded">
                -{product.discount}%
              </span>
              {/* Icons */}
              <div className="absolute top-2 right-2 flex space-x-2">
                <FaHeart className="text-gray-600" />
                <FaEye className="text-gray-600" />
              </div>
              {/* Product Image */}
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-contain"
              />
              {/* Product Details */}
              <h3 className="mt-4 text-lg font-bold">{product.name}</h3>
              <p className="text-red-500 text-xl font-bold">${product.price}</p>
              <p className="text-gray-400 line-through">${product.oldPrice}</p>
              <div className="flex items-center mt-2">
                <span className="text-yellow-400 text-sm mr-1">★</span>
                <p className="text-sm text-gray-600">({product.reviews})</p>
              </div>
              {/* Add to Cart Button */}
              {product.inStock && (
                <button className="mt-4 bg-black text-white py-2 w-full rounded">
                  Add To Cart
                </button>
              )}
            </div>
          ))}
        </div>

        {/* View All Products Button */}
        <div className="mt-8 text-center">
          <button className="bg-red-500 text-white px-6 py-3 rounded font-bold">
            View All Products
          </button>
        </div>
      </div>
      <div className="w-8 h-[2px] bg-gray-400 mt-2"></div>
    </>
  );
}
