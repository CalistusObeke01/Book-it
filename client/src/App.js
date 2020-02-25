import React, {Suspense, lazy} from 'react';
import {Route, Switch } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Loading from './components/Loading';
import './App.css';



const Home = lazy(() => import('./routes/Home'));
const Confrence = lazy(() => import('./components/Confrence'));
const BookVenue = lazy(() => import('./routes/BookVenue'));
const PageNotFound = lazy(() => import('./routes/PageNotFound'));
function App() {
  return (
    <>
      <Header />
      <Suspense fallback={<Loading />}>
        
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/book-venue" component={BookVenue} />
            <Route path="/confrence" component={Confrence} />
            <Route path="*" component={PageNotFound} />
          </Switch>
        
      </Suspense>
      <Footer />
    </>
  );
}

export default App;