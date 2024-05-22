import { useSearchParams } from "react-router-dom";

function Page3() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");

  console.log("id", id); // 20

  // const query= Object.fromEntries(searchParams) // {id: '20'}

  // Object.fromEntries作用: 将一个键值对的列表转换为一个对象,比如下面
  // const entries = [['foo', 'bar'], ['baz', 42]];
  // const obj = Object.fromEntries(entries);
  // console.log(obj); // { foo: 'bar', baz: 42 }
  return (
    <div>
      <h4>页面Page3，携带参数是 id:{id}</h4>
    </div>
  );
}

export default Page3;
