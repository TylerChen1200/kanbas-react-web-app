import { Link, useLocation } from 'react-router-dom';
import "./index.css";
import { FaUser, FaTachometerAlt, FaBook, FaCalendar, FaInbox, FaHistory, FaTv, FaArrowRight, FaQuestion } from 'react-icons/fa';

function KanbasNavigation() {
  const links = [
    { label: "Account", icon: <FaUser className="white-text" /> },
    { label: "Dashboard", icon: <FaTachometerAlt />},
    { label: "Courses", icon: <FaBook />},
    { label: "Calendar", icon: <FaCalendar />},
    { label: "Inbox", icon: <FaInbox className="custom-size-inbox" />},
    { label: "History", icon: <FaHistory />},
    { label: "Studio", icon: <FaTv />},
    { label: "Commons", icon: <FaArrowRight />},
    { label: "Help", icon: <FaQuestion className="custom-size-question" />}
  ];

  const { pathname } = useLocation();

  return (
    <ul className="wd-kanbas-navigation">
      {links.map((link, index) => (
        <li key={index} className={pathname.includes(link.label) ? "wd-active" : ""}>
          <Link to={`/Kanbas/${link.label}`}> {link.icon} {link.label} </Link>
        </li>
      ))}
    </ul>
  );
}
export default KanbasNavigation;
