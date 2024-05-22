import { useParams } from "react-router-dom";

export function Page2() {
  const params = useParams();
  console.log(params); // {id: '985'}

  return (
    <div>
      <h4>页面 page2, 携带参数是 id:{params.id}</h4>
    </div>
  );
}

export default Page2;
