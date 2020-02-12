import React, {Suspense, lazy} from 'react';
import {Route, Switch } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Loading from './components/Loading';
import './App.css';

const Home = lazy(() => import('./routes/Home'));
const BookVenue = lazy(() => import('./routes/BookVenue'));
const PageNotFound = lazy(() => import('./routes/PageNotFound'));
const Conference = lazy(() => import('./components/Confrence'));
 
function App() {
  return (
    <>
      <Header />
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/book-venue" component={BookVenue} />
          <Route path="/confrence" component={Conference} />
          <Route path="*" component={PageNotFound} /> 
        </Switch>
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
