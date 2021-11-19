import React from "react";
import { NavLink } from "react-router-dom";
import { Route } from "react-router-dom";
import { Button, Nav } from "reactstrap";

import PerfectScrollbar from "perfect-scrollbar";

import logo from "../../assets/img/logo.png";
import { logUserOut } from "apollo";

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
      data-color={props.bgColor}
      data-active-color={props.activeColor}
    >
      <div className="logo">
        <a href="/" className="simple-text logo-mini">
          <div className="logo-img">
            <img src={logo} alt="react-logo" />
          </div>
        </a>
        <a href="/" className="simple-text logo-normal">
          케어코리아
        </a>
      </div>
      <div className="flex side-bar-btn-box">
        <Button
          onClick={() => {
            logUserOut();
          }}
        >
          로그아웃
        </Button>
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
