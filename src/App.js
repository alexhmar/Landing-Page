import Header from "./Components/Header.js";
import SignUp from "./Components/SignUp.js";
import EbookInfo from "./Components/EbookInfo.js";
import "./Styles/App.css";
import { validate } from "./Redux/SignUpThanks";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import ThankYou from "./Components/ThankYou.js";
import About from "./Components/About.js";
function App() {
  return (
    <div className="Container1" id="div2">
      <Router basename="/Landing-Page">
        <Header />
        <Routes>
          <Route exact path="Landing-Page/thankyou" element={<ThankYou />} />
          <Route
            exact
            path="/Landing-Page"
            element={
              <div className="Container">
                <SignUp validate={validate} />
                <EbookInfo />
              </div>
            }
          />
          <Route exact path="Landing-Page/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

// fetch("http://localhost:3000/").then(async (response) => {
//   try {
//     const data = await response.json();
//     console.log("response data?", data);
//   } catch (error) {
//     console.log("Error happened here!");
//     console.error(error);
//   }
// });

export default App;
