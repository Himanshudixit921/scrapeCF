import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
const router = createBrowserRouter([{ path: "/", element: <Home></Home> }]);
function App() {
  // const [data, setdata] = useState({
  //   name: "",
  //   age: 0,
  //   date: "",
  //   programming: "",
  // });
  // useEffect(() => {
  //   const runPythonScript = async () => {
  //     try {
  //       const res = await axios.get("http://localhost:5000/data");
  //       const { data } = res;
  //       setdata({
  //         name: data.Name,
  //         age: data.Age,
  //         date: data.Date,
  //         programming: data.programming,
  //       });
  //       console.log(res.data, "Hello");
  //     } catch (error) {
  //       console.error("Error:", error);
  //     }
  //     console.log(data);
  //   };
  //   runPythonScript();
  //   // eslint-disable-next-line
  // }, []);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
