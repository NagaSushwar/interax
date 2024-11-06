import { IoMdHeartEmpty } from "react-icons/io";
import { FaRegStar } from "react-icons/fa";

export default function ProductCard() {
  return (
    <div className="relative group">
      <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="mt-2">
        <div className="flex justify-between items-start">
          <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
          <button className="ml-2 flex-shrink-0">
            {product.isWishlisted ? (
              <IoMdHeartEmpty className="w-5 h-5 text-red-500 fill-red-500" />
            ) : (
              <IoMdHeartEmpty className="w-5 h-5 text-gray-400 hover:text-red-500" />
            )}
          </button>
        </div>
        <div className="flex items-center mt-1">
          <div className="flex items-center">
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <FaRegStar
                  key={i}
                  className={`w-4 h-4 ${
                    i < product.rating
                      ? "text-yellow-400 fill-yellow-400"
                      : "text-gray-300"
                  }`}
                />
              ))}
          </div>
          <span className="ml-1 text-xs text-gray-500">
            ({product.reviews})
          </span>
        </div>
        <div className="mt-1 flex justify-between items-center">
          <p className="text-sm font-medium text-gray-900">${product.price}</p>
          {product.originalPrice && (
            <p className="text-sm text-gray-500 line-through">
              ${product.originalPrice}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
