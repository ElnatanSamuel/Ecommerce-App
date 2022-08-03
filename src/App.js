import "./App.css";
import { useState, useEffect } from "react";
import Home from "./pages/homepage/homepage";
import NavBar from "./components/navbar/navbar";
import Basket from "./pages/basket/basket";
import Favorite from "./pages/favorite/favorite";
import Products from "./pages/products/products";
import ShopNoPage from "./components/nopage/nopage";
import BlogNoPage from "./components/nopage/nopageblog";
import SignUp from "./pages/signup/signup";
import { BlockLoading, NineCellLoading } from "react-loadingg";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const Loading = () => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };

  useEffect(() => {
    Loading();
  }, []);

  return (
    <Router>
      <div className="App">
        {isLoading ? (
          <Container>
            <BlockLoading color="#000" />
          </Container>
        ) : (
          <>
            <NavBar />
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/basket">
                <Basket />
              </Route>
              <Route exact path="/favorites">
                <Favorite />
              </Route>
              <Route exact path="/products">
                <Products />
              </Route>
              <Route path="/shop">
                <ShopNoPage />
              </Route>
              <Route path="/blog">
                <BlogNoPage />
              </Route>
              <Route path="/signup">
                <SignUp />
              </Route>
            </Switch>
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
