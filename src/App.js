import './App.css';
import HomePage from './pages/HomePage';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom"
import AboutPage from "./pages/AboutPage"
import ArticlesList from "./pages/ArticlesList"
import ArticlesPage from "./pages/ArticlesPage"
import NavBar from './NavBar';

function App() {
  return (
    <Router>
      <div className="App">
        <div id="page-body">
          <NavBar />
          <Route path="/" component={HomePage} exact />
          <Route path="/about" component={AboutPage} />
          <Route path="/articles-list" component={ArticlesList} />
          <Route path="/article" component={ArticlesPage} />
        </div>
      </div>
    </Router>
  );
}

export default App;
