import styled from "styled-components";
import Home from "./Pages/Home";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import Aboutus from "./Pages/Aboutus";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Indurstries from "./Pages/Indurstries";
import Contact from "./Pages/Contact";
import Resource from "./Pages/Resource";
import Servicespage from "./Pages/Servicespage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import Termscondition from "./Pages/Termscondition";
import Query from "./Pages/Query";
function App() {
  return (
    <AppStyled>
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/aboutus" exact component={Aboutus} />
          <Route path="/industries" exact component={Indurstries} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/resources" exact component={Resource} />
          <Route path="/services" exact component={Servicespage} />
          <Route
            path="/Terms-and-conditions"
            exact
            component={Termscondition}
          />
          <Route path="/query" exact component={Query} />
        </Switch>
        <Footer />
      </Router>
      <Whatsapp>
        <a href="https://wa.me/919310070808">
          <FontAwesomeIcon
            icon={faWhatsapp}
            size="3x"
            style={{
              backgroundColor: "#6de059",
              width: "1.2em",
              height: "1.2em",
              borderRadius: "50%",
            }}
          />
        </a>
      </Whatsapp>
    </AppStyled>
  );
}
const Whatsapp = styled.div`
  width: min-content;
  height: min-content;
  padding: 15px;
  position: fixed;
  right: 0%;
  bottom: 0%;

  color: white;
  border-radius: 50%;
  a {
    color: white;
    text-decoration: none;
  }
`;
const AppStyled = styled.div`
  margin: 0%;
  padding: 0%;
  box-sizing: border-box;
  overflow: hidden;
  font-family: "Bona Nova", serif;
`;
export default App;
