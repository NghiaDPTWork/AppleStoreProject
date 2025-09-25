import { FaApple } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { BsBag } from "react-icons/bs";

export const navigationLinks = [
  {
    id: 1,
    label: <FaApple size={18} />,
    url: "#",
    isIcon: true,
  },
  {
    id: 2,
    label: "Cửa hàng",
    url: "#store",
  },
  {
    id: 3,
    label: "Mac",
    url: "#mac",
  },
  {
    id: 4,
    label: "iPad",
    url: "#ipad",
  },
  {
    id: 5,
    label: "iPhone",
    url: "#iphone",
  },
  {
    id: 6,
    label: "Watch",
    url: "#watch",
  },
  {
    id: 7,
    label: "AirPods",
    url: "#airpods",
  },
  {
    id: 8,
    label: "TV & Nhà",
    url: "#tv",
  },
  {
    id: 9,
    label: "Giải Trí",
    url: "#entertainment",
  },
  {
    id: 10,
    label: "Phụ kiện",
    url: "#accessories",
  },
  {
    id: 11,
    label: "Hỗ Trợ",
    url: "#support",
  },
  {
    id: 12,
    label: <CiSearch size={18} />,
    url: "#search",
    isIcon: true,
  },
  {
    id: 13,
    label: <BsBag size={16} />,
    url: "#bag",
    isIcon: true,
  },
];
