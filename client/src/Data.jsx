import { GiWallet } from "react-icons/gi";
import { MdSms } from "react-icons/md";
import { MdOutlineSecurity } from "react-icons/md";
import { IoGift } from "react-icons/io5";
import { FaLeaf } from "react-icons/fa";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { RiBankFill } from "react-icons/ri";
import { CiDiscount1 } from "react-icons/ci";
import { FaHandshake } from "react-icons/fa6";

export const products = [
  {
    img: "https://res.cloudinary.com/dxhcmzqmy/image/upload/v1754395793/product1_v06t0s.png",
    title: "Malka Vajra Shilajit",
    desc: "A premium herbal supplement rooted in Ayurveda, designed to enhance vitality and wellness.",
  },
  {
    img: "https://res.cloudinary.com/dxhcmzqmy/image/upload/v1754395791/product3_bwnhe0.png",
    title: "Product 2",
    desc: "Another high-quality supplement for health and vitality.",
  },
  {
    img: "https://res.cloudinary.com/dxhcmzqmy/image/upload/v1754395790/product2_dozcjj.png",
    title: "Product 3",
    desc: "Another high-quality supplement for health and vitality.",
  },
];

export const benefitsData = [
  { title: "2.5% Monthly ROI", icon: GiWallet },
  { title: "Extra 2.5% from Social Sharing", icon: MdSms },
  { title: "₹1 Lakh Accidental Insurance", icon: MdOutlineSecurity },
  { title: "₹1 Lakh Lucky Draw", icon: IoGift },
  { title: "Free Ayurvedic Kit (₹5000 Value)", icon: FaLeaf },
  { title: "Interest Savings on kookiedidi.com", icon: FaMoneyBillTrendUp },
  { title: "Loan Eligibility (₹50K-₹2L)", icon: RiBankFill },
  { title: "Exclusive Discounts on Accord Grand", icon: CiDiscount1 },
  { title: "Salary, TADA & Office Support", icon: FaHandshake },
];

export const testimonialsData = [
  {
    name: "Ravi Sharma",
    location: "Delhi",
    image:
      "https://res.cloudinary.com/dxhcmzqmy/image/upload/v1754395749/ava1_kxlxug.jpg", // Replace with actual image path
    quote:
      "I joined Golden Today for passive income, but the wellness kit surprised me the most. I feel more energetic, and the income from referrals started almost immediately. It’s a complete package.",
  },
  {
    name: "Priya Sen",
    location: "Lucknow",
    image:
      "https://res.cloudinary.com/dxhcmzqmy/image/upload/v1754395749/ava2_j7a2aq.jpg", // Replace with actual image path
    quote:
      "Just by sharing Golden Today posts, I started earning every month from home. The Ayurvedic kit improved my energy, sleep, and focus — I finally feel confident, independent, and in control of my health and income.",
  },
  {
    name: "Mohammad Faizan",
    location: "Mumbai",
    image:
      "https://res.cloudinary.com/dxhcmzqmy/image/upload/v1754397803/Ellipse_18_qfddoe.svg", // Replace with actual image path
    quote:
      "Golden Today supported me beyond expectations. From bonuses to office expenses, and even daily wellness — this growth with meaning.",
  },
];
