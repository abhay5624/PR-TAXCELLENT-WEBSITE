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
        </Switch>
        <Footer />
      </Router>
    </AppStyled>
  );
}
const AppStyled = styled.div`
  margin: 0%;
  padding: 0%;
  box-sizing: border-box;
  overflow: hidden;
  font-family: "Bona Nova", serif;
`;
export default App;
