import { React, useContext } from "react";
import { Link } from "react-scroll";

import { NavContext } from "../../App";

import "./NavItem.css";

export default function NavItem({
  code,
  nameen,
  nameel,
  toggleNav,
  scrollOffset,
}) {
  const language = useContext(NavContext).language;

  return (
    <li className={"nav-item text-end my-1 pe-3"}>
      <Link
        activeClass="active"
        to={code}
        onClick={() => toggleNav()}
        spy={true}
        offset={scrollOffset}
        smooth={true}
        duration={250}>
        {language === "el" ? nameel : nameen}
      </Link>
    </li>
  );
}
