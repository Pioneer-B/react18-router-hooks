import { useNavigate, useRoutes } from "react-router-dom";
import routes from "./router";

function App() {
  const navigate = useNavigate();
  function navTo(path) {
    navigate(path);
  }
  function navTo2(path) {
    navigate(`${path}/985`);
  }
  function navTo3(path) {
    // navigate({
    //   pathname: path,
    //   search: "id=20",
    // });
    navigate(`${path}?id=20`);
  }
  return (
    <div>
      <div className="header">
        <span>header</span>
        <div className="nav">
          <button onClick={(e) => navTo("/page1")}>跳转page1</button>
          <button onClick={(e) => navTo2("/page2")}>
            跳转page2 URL传递参数（动态路由参数）
          </button>
          <button onClick={(e) => navTo3("/page3")}>
            跳转page3 search传递参数
          </button>
        </div>
        <hr />
      </div>

      <div className="content">{useRoutes(routes)}</div>
    </div>
  );
}

export default App;
