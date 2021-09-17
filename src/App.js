import styled from "styled-components";
import Home from "./Pages/Home";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import Aboutus from "./Pages/Aboutus";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <AppStyled>
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/aboutus" exact component={Aboutus} />
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
