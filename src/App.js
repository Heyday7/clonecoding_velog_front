import React from 'react'
import {Route, Switch} from 'react-router-dom'
import About from './containers/About'
import LoginFormContainer from './containers/account/LoginFormContainer'
import SignUpFormContainer from './containers/account/SignUpFormContianer'
import HeaderContainer from './containers/common/HeaderContainer'
import Post from './containers/post/Post'
import PostDetail from './containers/post/PostDetail'
import PostFormContainer from './containers/post/PostFormContainer'
import Series from './containers/series/Series'
import SeriesDetail from './containers/series/SeriesDetail'

function App() {
  return (
    <div className="App">
      <Route path='/' component={HeaderContainer}/>
      <Switch>
        <Route exact path='/' component={Post}/>
        <Route exact path='/series' component={Series}/>
        <Route path='/series/:id' component={SeriesDetail}/>
        <Route path='/about' component={About}/>
        <Route exact path='/post/:id' component={PostDetail}/>
        <Route exact path='/post/:id/edit' component={PostFormContainer}/>
        <Route exact path='/create-post/' component={PostFormContainer}/>
        <Route exact path='/signup/' component={SignUpFormContainer}/>
        <Route exact path='/login/' component={LoginFormContainer}/>
      </Switch>
    </div>
  );
}

export default App;
