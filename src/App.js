import "./app.scss";
import { HomeRoute, RoomDetail, SearchResultRoute } from "./routes/routes";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Header, Footer } from "./components";
import { Provider } from "react-redux";
import { createStore } from "redux";
import FilterSlice from "./Redux/features/Filter/FilterSlice";

function App() {
  const store = createStore(FilterSlice);
  return (
    <Router>
      <header>
        <Header />
      </header>
      <Switch>
        <Provider store={store}>
          <Route path="/room">
            <RoomDetail />
          </Route>
          <Route path="/search">
            <SearchResultRoute />
          </Route>
          <Route path="/">
            <HomeRoute />
          </Route>
        </Provider>
      </Switch>
      <footer>
        <Footer />
      </footer>
    </Router>
  );
}

/// Router bi cai gi roi
// Toi ::
////// LAM XONG FILTER
////// CATEGORY PAGE
///// Elastic Search
///// CMS Theme

export default App;
