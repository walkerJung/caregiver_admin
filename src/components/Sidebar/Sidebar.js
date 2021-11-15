import React from "react";
import { NavLink } from "react-router-dom";
import { Route, Link } from "react-router-dom";
import { Nav } from "reactstrap";

import PerfectScrollbar from "perfect-scrollbar";

import logo from "../../assets/img/logo.png";

var ps;

function Sidebar(props) {
  const sidebar = React.useRef();
  const activeRoute = (routeName) => {
    return props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  };
  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(sidebar.current, {
        suppressScrollX: true,
        suppressScrollY: false,
      });
    }
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
      }
    };
  });
  return (
    <div
      className="sidebar"
      data-color="white"
      data-active-color={props.activeColor}
    >
      <div className="logo">
        <a href="/" className="simple-text logo-mini">
          <div className="logo-img">
            <img src={logo} alt="react-logo" />
          </div>
        </a>
        <a href="/" className="simple-text logo-normal">
          간병인 협동조합
        </a>
      </div>
      <div className="sidebar-wrapper" ref={sidebar}>
        <Nav>
          {props.routes.map((item, index) => {
            return (
              <Route
                key={index}
                path={item.path}
                children={({ match }) => {
                  return (
                    <li className={activeRoute(item.path[0])} key={index}>
                      <NavLink
                        to={item.layout + item.path[0]}
                        className="nav-link"
                        activeClassName="active"
                      >
                        <i className={item.icon} />
                        <p>{item.name}</p>
                      </NavLink>
                    </li>
                  );
                }}
              />
            );
          })}
        </Nav>
      </div>
    </div>
  );
}

export default Sidebar;
