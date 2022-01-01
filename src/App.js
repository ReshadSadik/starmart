import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AddProducts from "./components/Dashboard/AddProducts/AddProducts";
import AddReview from "./components/Dashboard/AddReview/AddReview";
import DashboardContainer from "./components/Dashboard/DashboardContainer/DashboardContainer";
import MakeAdmin from "./components/Dashboard/makeAdmin/MakeAdmin";
import MakePayment from "./components/Dashboard/MakePayment/MakePayment";
import ManageOrders from "./components/Dashboard/ManageOrders/ManageOrders";
import ManageProducts from "./components/Dashboard/ManageProducts/ManageProducts";
import ManageReviews from "./components/Dashboard/ManageReviews/ManageReviews";
import MyOrders from "./components/Dashboard/MyOrders/MyOrders";
import Wellcome from "./components/Dashboard/Wellcome/Wellcome.js";
import HomepageContainer from "./components/Homepage/HomePageContainer/HomepageContainer";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          {/* <h2 className="text-primary">this is startmart</h2>

          <h1 className="text-green-500">test</h1> */}
          <Route
            path="/"
            element={<HomepageContainer></HomepageContainer>}
          ></Route>
          <Route
            path="/home"
            element={<HomepageContainer></HomepageContainer>}
          ></Route>
          <Route
            path="/dashboard"
            element={<DashboardContainer></DashboardContainer>}
          >
            <Route path="/dashboard" element={<Wellcome></Wellcome>}></Route>

            <Route
              path={`/dashboard/myOrders`}
              element={<MyOrders></MyOrders>}
            ></Route>

            <Route
              path={`/dashboard/makePayment`}
              element={<MakePayment></MakePayment>}
            ></Route>

            <Route
              path={`/dashboard/addReview`}
              element={<AddReview></AddReview>}
            ></Route>

            <Route
              path={`/dashboard/makeAdmin`}
              element={<MakeAdmin></MakeAdmin>}
            ></Route>
            <Route
              path={`/dashboard/manageOrders`}
              element={<ManageOrders></ManageOrders>}
            ></Route>
            <Route
              path={`/dashboard/manageProducts`}
              element={<ManageProducts></ManageProducts>}
            ></Route>
            <Route
              path={`/dashboard/addProducts`}
              element={<AddProducts></AddProducts>}
            ></Route>
            <Route
              path={`/dashboard/manageReviews`}
              element={<ManageReviews></ManageReviews>}
            ></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
