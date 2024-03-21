import { Link, useLocation } from "react-router-dom";
import "./index.css";

import { FaTachometerAlt, FaRegUserCircle, FaBook, FaRegCalendarAlt, FaInbox, FaClock, FaStudiovinari, FaDesktop, FaArrowRight, FaQuestion, FaQuestionCircle } from "react-icons/fa";
function KanbasNavigation() {

  const links = [
    { label: "Account", icon: <FaRegUserCircle className="fs-2" />, ariaLabel: "Account" },
    { label: "Dashboard", icon: <FaTachometerAlt className="fs-2" />, ariaLabel: "Dashboard" },
    { label: "Courses", icon: <FaBook className="fs-2" />, ariaLabel: "Courses" },
    { label: "Calendar", icon: <FaRegCalendarAlt className="fs-2" />, ariaLabel: "Calendar" },
    { label: "Inbox", icon: <FaInbox className="fs-2" />, ariaLabel: "Inbox" },
    { label: "History", icon: <FaClock className="fs-2" />, ariaLabel: "History" },
    { label: "Studio", icon: <FaDesktop className="fs-2" />, ariaLabel: "Studio" },
    { label: "Commons", icon: <FaArrowRight className="fs-2" />, ariaLabel: "Commons" },
    { label: "Help", icon: <FaQuestionCircle className="fs-2" />, ariaLabel: "Help" },
  ];
  const { pathname } = useLocation();
  return (
    <ul className="wd-kanbas-navigation">
      {links.map((link, index) => (
        <li key={index} className={`${pathname.includes(link.label) ? "wd-active" : ""} ${link.label === "Account" ? "account-label" : ""}`}>
          <Link to={`/Kanbas/${link.label}`} aria-label={link.ariaLabel}>
            {link.icon}
          </Link>
        </li>
      ))}
    </ul>
  );
}
export default KanbasNavigation;
