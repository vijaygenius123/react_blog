import React from "react";
import HomePage from "./pages/HomePage";
import {BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';
import AboutPage from "./pages/AboutPage";
import ArticlesList from "./pages/ArticlesList";
import ArticlePage from "./pages/ArticlePage";
import Navbar from "./components/Navbar";

function App() {
    return (
        <Router>
            <Navbar />
            <div className="App">
                <Route path="/" exact component={HomePage}/>
                <Route path="/about" component={AboutPage}/>
                <Route path="/articles-list" component={ArticlesList}/>
                <Route path="/article" component={ArticlePage}/>
            </div>
        </Router>
    );
}

export default App;
