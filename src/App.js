import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import Profile from './components/Profile/Profile';
import EnquiryPage from './components/Enquiry/EnquiryPage';
import HomePage from './components/Home/HomePage';
import MoreInfo from './components/MoreInfoPage/MoreInfo';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/enquiry" element={<EnquiryPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/more-info" element={<MoreInfo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
