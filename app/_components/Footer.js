import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Exclusive Section */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Exclusive</h3>
          <p>Subscribe</p>
          <p>Get 10% off your first order</p>
          <div className="flex items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 text-black rounded-l-md outline-none"
            />
            <button className="bg-white text-black p-2 rounded-r-md">
              &#10140;
            </button>
          </div>
        </div>

        {/* Support Section */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Support</h3>
          <p>
            111 Bijoy Sarani, Dhaka,
            <br />
            DH 1515, Bangladesh.
          </p>
          <p>exclusive@gmail.com</p>
          <p>+88015-88888-9999</p>
        </div>

        {/* Account Section */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Account</h3>
          <p>My Account</p>
          <p>Login / Register</p>
          <p>Cart</p>
          <p>Wishlist</p>
          <p>Shop</p>
        </div>

        {/* Quick Link Section */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Quick Link</h3>
          <p>Privacy Policy</p>
          <p>Terms Of Use</p>
          <p>FAQ</p>
          <p>Contact</p>
        </div>

        {/* Download App Section */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Download App</h3>
          <p>Save $3 with App New User Only</p>
          <div className="flex space-x-2">
            <img
              src="https://via.placeholder.com/100x40?text=Google+Play"
              alt="Google Play"
              className="w-24"
            />
            <img
              src="https://via.placeholder.com/100x40?text=App+Store"
              alt="App Store"
              className="w-24"
            />
          </div>
          <div className="flex space-x-4 text-2xl">
            <FaFacebookF className="cursor-pointer hover:text-gray-400" />
            <FaTwitter className="cursor-pointer hover:text-gray-400" />
            <FaInstagram className="cursor-pointer hover:text-gray-400" />
            <FaLinkedinIn className="cursor-pointer hover:text-gray-400" />
          </div>
        </div>
      </div>

      <div className="text-center text-gray-400 mt-10 border-t border-gray-700 pt-4">
        <p>© Copyright Rimel 2022. All rights reserved</p>
      </div>
    </footer>
  );
}
