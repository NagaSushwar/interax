import {
  FaShoppingBag,
  FaSignOutAlt,
  FaStar,
  FaTimesCircle,
  FaUserAlt,
} from "react-icons/fa";

export default function MenuItems() {
  const [activeItem, setActiveItem] = useState(null);

  const menuItems = [
    {
      id: "account",
      icon: <FaUserAlt size={20} />,
      label: "Manage My Account",
      href: "/account",
    },
    {
      id: "orders",
      icon: <FaShoppingBag size={20} />,
      label: "My Order",
      href: "/orders",
    },
    {
      id: "cancellations",
      icon: <FaTimesCircle size={20} />,
      label: "My Cancellations",
      href: "/cancellations",
    },
    {
      id: "reviews",
      icon: <FaStar size={20} />,
      label: "My Reviews",
      href: "/reviews",
    },
    {
      id: "logout",
      icon: <FaSignOutAlt size={20} />,
      label: "Logout",
      href: "/logout",
    },
  ];

  const handleItemClick = (id, href) => {
    setActiveItem(id);
    // Add your Next.js navigation logic here
    // Example: router.push(href);
  };

  return (
    <div className="min-h-screen flex items-start justify-center p-4 bg-gray-50">
      <div className="w-72 rounded-xl overflow-hidden shadow-xl">
        <div className="bg-gradient-to-br from-purple-500 via-purple-600 to-purple-900">
          {menuItems.map((item) => (
            <div
              key={item.id}
              onClick={() => handleItemClick(item.id, item.href)}
              className={`
                      flex items-center gap-4 px-6 py-4 cursor-pointer
                      transition-all duration-200 ease-in-out
                      ${
                        activeItem === item.id
                          ? "bg-white/20"
                          : "hover:bg-white/10"
                      }
                    `}
            >
              <span className="text-white opacity-90">{item.icon}</span>
              <span className="text-white text-lg font-medium">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
