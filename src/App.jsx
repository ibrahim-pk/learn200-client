import { Route, Routes } from "react-router-dom";
import HomeScreen from "./Screen/Home/HomeScreen";
import { Layout } from "./Layout/Layout";
import Login from "./Screen/User/Login";
import Register from "./Screen/User/Register";
import Myclass from "./Screen/Myclass/Myclass";
import AllCourse from "./Screen/AllCourse/AllCourse";
import MyclassReg from "./Screen/Myclass/MyclassReg";
import UserProfile from "./Screen/Profile/UserProfile";
import HireUs from "./Screen/Hire/HireUs";
import Dynamic from "./Component/Dynamic/Daynamic";
import CourseDetails from "./Screen/CourseDetails/CourseDetails";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <HomeScreen />
            </Layout>
          }
        />
        <Route
          path="/user/login"
          element={
            <Layout>
              <Login />
            </Layout>
          }
        />
        <Route
          path="/user/register"
          element={
            <Layout>
              <Register />
            </Layout>
          }
        />
        <Route
          path="/my/class"
          element={
            <Layout>
              <MyclassReg />
            </Layout>
          }
        />
        <Route
          path="/my/class/:id"
          element={
            <Layout>
              <Myclass />
            </Layout>
          }
        />
        <Route
          path="/all/course"
          element={
            <Layout>
              <AllCourse />
            </Layout>
          }
        />
        <Route
          path="/course/details/:id"
          element={
            <Layout>
              <CourseDetails />
            </Layout>
          }
        />
        <Route
          path="/user/profile"
          element={
            <Layout>
              <UserProfile />
            </Layout>
          }
        />
        <Route
          path="/hire"
          element={
            <Layout>
              <HireUs />
            </Layout>
          }
        />

       <Route
          path="/dynamic/router/:idx"
          element={
            <Layout>
              <Dynamic />
            </Layout>
          }
        />

      </Routes>
    </>
  );
}

export default App;
