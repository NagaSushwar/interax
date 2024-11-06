import React from "react";
import { Star, Heart } from "lucide-react";
import { TiShoppingCart } from "react-icons/ti";

const ProductCard = ({ product }) => (
  <div className="relative group">
    <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden">
      <img
        src={product.image}
        alt={product.name}
        className="object-cover w-full h-full"
      />
    </div>
    <div className="bg-black text-white flex justify-center items-center h-12">
      <TiShoppingCart className="h-10 w-10" />
      Add to Cart
    </div>
    <div className="mt-2">
      <div className="flex justify-between items-start">
        <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
        <button className="ml-2 flex-shrink-0">
          {product.isWishlisted ? (
            <Heart className="w-5 h-5 text-red-500 fill-red-500" />
          ) : (
            <Heart className="w-5 h-5 text-gray-400 hover:text-red-500" />
          )}
        </button>
      </div>
      <div className="flex items-center mt-1">
        <div className="flex items-center">
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < product.rating
                    ? "text-yellow-400 fill-yellow-400"
                    : "text-gray-300"
                }`}
              />
            ))}
        </div>
        <span className="ml-1 text-xs text-gray-500">({product.reviews})</span>
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

const WishlistGrid = () => {
  const products = [
    {
      id: 1,
      name: "Gucci Duffle Bag",
      price: 149.99,
      originalPrice: 199.99,
      image: "/api/placeholder/200/200",
      rating: 4,
      reviews: 45,
      isWishlisted: true,
    },
    {
      id: 2,
      name: "RGB Liquid CPU Cooler",
      price: 89.99,
      image: "/api/placeholder/200/200",
      rating: 5,
      reviews: 28,
      isWishlisted: true,
    },
    {
      id: 3,
      name: "GIFI Monster USB Gamepad",
      price: 29.99,
      originalPrice: 39.99,
      image: "/api/placeholder/200/200",
      rating: 4,
      reviews: 89,
      isWishlisted: true,
    },
    {
      id: 4,
      name: "Quilted Satin Jacket",
      price: 199.99,
      image: "/api/placeholder/200/200",
      rating: 5,
      reviews: 16,
      isWishlisted: true,
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex items-center justify-between mb-6 flex-row">
        <div className="flex items-center gap-2">
          <h2 className="text-2xl font-semibold text-gray-900">Wishlist</h2>
          <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-sm">
            {products.length} items
          </span>
        </div>
        <button className="border-2 border-black"> Move to bag</button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="mt-8 border-t pt-6">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Just For You
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id + "-recommendation"}
              product={{
                ...product,
                name: `Gaming ${product.name}`,
                isWishlisted: false,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WishlistGrid;
