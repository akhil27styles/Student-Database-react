import React from 'react'
import Navbar from './components/layout/Navbar'
import Students from './components/students/Students'
import Student from './components/students/Student'
import Studentform from './components/students/Studentform'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import { Provider} from 'react-redux'
import store,{rrfProps} from './Store'
import {ReactReduxFirebaseProvider} from 'react-redux-firebase'
import Login from './components/pages/Login'
import PrivateRoute from './components/routes/PrivateRoute'
const App = () => {
  return (
   <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
    <BrowserRouter>
    <div className="App">
      <PrivateRoute component={Navbar}/>
    {/* <Navbar/> */}
    <Switch>
      <Route exact path="/" component={Students}/>
      <Route exact path="/student/:id" component={Student}/>
      <Route exact path="/studentform/:id?" component={Studentform}/>
      <Route exact path="/login" component={Login}/>
    </Switch>
    </div>
    </BrowserRouter>
    </ReactReduxFirebaseProvider>
   </Provider>
  )
}

export default App
