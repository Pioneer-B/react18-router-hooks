import React, { PureComponent } from "react";
import { useNavigate, Outlet } from "react-router-dom";

export function Page1() {
  const navigate = useNavigate();
  function navTo(path) {
    navigate(path);
  }
  function navTo2(path) {
    navigate(`${path}`);
  }

  return (
    <div>
      <h2>页面 page1</h2>
      <button onClick={(e) => navTo("/page1/page1_1")}>page1_1</button>
      <button onClick={(e) => navTo2("/page1/page1_2")}>page1_2</button>

      {/* 占位的组件 */}
      <Outlet />
    </div>
  );
}

export default Page1;
