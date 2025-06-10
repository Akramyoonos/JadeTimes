import React from 'react';
import {Route,createBrowserRouter,createRoutesFromElements,RouterProvider} from 'react-router-dom';
import MainLayout from './Main-pages/MainLayout';
import First from "./components/First.jsx";
import UserLogin from './Login-pages/UserLogin.jsx';
import AdminLogin from './Login-pages/AdminLogin.jsx';
import Adminpage from './Main-pages/Adminpage';
import Userpage from './Main-pages/Userpage';
import UserDashboard from './User/UserDashBoard';
import ContributorsArticle from './Admin/ContributorsArticle';
import Reports from './Admin/Reports';
import UserAttendence from './User/UserAttendence';
import UserLeaves from './User/UserLeaves';
import UserProfile from './User/UserProfile';
import HeadEmployeesView from './Admin/HeadEmployeesView';
import HeadmanageArticles from './Admin/HeadmanageArticles';
import HeadAttendence from './Admin/HeadAttendence';
import ManageHeadLeaves from './Admin/ManageHeadLeaves';
import AdminPanel from './Admin/AdminPanel';
import ManageUser from "./Admin/ManageUser";
import ManageAttendence from "./Admin/ManageAttendence";
import ManageArticles from "./Admin/ManageArticles.jsx";
import ManageLeaves from "./Admin/ManageLeaves";
import ManageReports from "./Admin/ManageReports";
import ManageStaff from "./Admin/ManageStaff";
import ManagePositions from "./Admin/ManagePositions";
import AdminAttendence from "./Admin/AdminAttendence";
import AdminLeaves from "./Admin/AdminLeaves";
import ManageFeedback from "./Admin/ManageFeedback";
import Adminprofile from "./Admin/Adminprofile";
import ForgotPassword from './components/ForgotPassword.jsx';

const router = createBrowserRouter(
createRoutesFromElements(
<Route path='/' element={<MainLayout/>}>
<Route index element={<First/>} />
<Route path='/UserLogin' element={<UserLogin/>} />
<Route path='/AdminLogin' element={<AdminLogin/>} />
<Route path='/ForgotPassword' element={<ForgotPassword/>} />
<Route path='/UserDashBoard' element={<UserDashboard/>} />
<Route path='/ContributorsArticle' element={<ContributorsArticle/>} />
<Route path='/Reports' element={<Reports/>} />
<Route path='/UserAttendence' element={<UserAttendence/>} />
<Route path='/UserLeaves' element={<UserLeaves/>} />
<Route path='/UserProfile' element={<UserProfile/>} />
<Route path='/HeadEmployeesView' element={<HeadEmployeesView/>} />
<Route path='/HeadmanageArticles' element={<HeadmanageArticles/>} />
<Route path='/HeadAttendence' element={<HeadAttendence/>} />
<Route path='/ManageHeadLeaves' element={<ManageHeadLeaves/>} />
<Route path='/AdminPanel' element={<AdminPanel/>} />
<Route path='/ManageUser' element={<ManageUser/>} />
<Route path='/ManageAttendence' element={<ManageAttendence/>} />
<Route path='/ManageArticles' element={<ManageArticles/>} />
<Route path='/ManageLeaves' element={<ManageLeaves/>} />
<Route path='/ManageReports' element={<ManageReports/>} />
<Route path='/ManageStaff' element={<ManageStaff/>} />
<Route path='/ManagePositions' element={<ManagePositions/>} />
<Route path='/AdminAttendence' element={<AdminAttendence/>} />
<Route path='/AdminLeaves' element={<AdminLeaves/>} />
<Route path='/ManageFeedback' element={<ManageFeedback/>} />
<Route path='/Adminprofile' element={<Adminprofile/>} />
</Route>

)
);

const App = () => {
  return <RouterProvider router={router}/>;
};

export default App;