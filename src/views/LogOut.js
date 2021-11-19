import React, { useEffect } from "react";
import { logUserOut } from "apollo";

function LogOut() {
  useEffect(() => {
    logUserOut();
  }, []);
  return true;
}

export default LogOut;
