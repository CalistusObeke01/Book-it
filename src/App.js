import React, {Suspense, lazy} from 'react'
import { Route, Switch } from "react-router-dom"
import Header from './components/Header'
import Footer from './components/Footer'
// import logo from './logo.svg';
import './App.css';


const Home = lazy(() => import('./routes/Home'))
const Pricing  = lazy(() => import('./routes/Pricing'))
const Features = lazy(() => import('./routes/Features'))
const Contact  = lazy(() => import('./routes/Contact'))
const SignIn = lazy(() => import('./routes/SignIn'))
const PageNotFound = lazy(() => import('./routes/PageNotFound'))
function App() {
  return (
    <>
      <Header />
      <Suspense fallback="Loading...">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/pricing" component={Pricing} />
          <Route path="/features" component={Features} />
          <Route path="/contact" component={Contact} />
          <Route path="/signin" component={SignIn} />
          <Route path="*" component={PageNotFound} /> 
        </Switch>
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
