import logo from './logo.svg';
import './App.css';
import Header from './header'
import UnAuthorizedPage from './UnAuthorizedPage';
import Footer from './pages/footer/footer';
import EventType from './pages/EventTypes/EventType';
import SignUpForm from './pages/LoginForm/SignUpForm';
import EventOrganizer from './pages/EventOrganizer/EventOrganizer';
import Home from './pages/Components/Home/Home';
import ConcertPage from './pages/ConcertPage/ConcertPage';
function App() {
  return (
    <div className="App">
      <Header/>
      {/* <Home/> */}
      {/* <EventType/> */}
      {/* <EventOrganizer/> */}
      <ConcertPage/>
      {/* <UnAuthorizedPage/> */}
      {/* <SignUpForm/> */}
      <Footer/>
    </div>
  );
}

export default App;
