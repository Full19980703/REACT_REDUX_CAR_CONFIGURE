
import React from 'react' ;
import { Switch , Route , Redirect, BrowserRouter as Router} from 'react-router-dom' ;

import Car from './components/Contents/Car/Car' ;
import Exterior from './components/Contents/Exterior/Exterior' ;
import Summary from './components/Contents/Summary/Summary' ;
import Footer from './components/Footer/Footer' ;
import Header from './components/Header/Header' ;

const App = () => {
  return(
    <>
      <Router>
        <Header />
        <Switch>
              <Route exact path="/car" component={Car}/>
              <Route path="/exterior" component={Exterior} />
              <Route path="/summary" component={Summary} />
              <Redirect from="/" to="/car" />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}
export default App;