import React from 'react'
import { Route, HashRouter, Switch, BrowserRouter } from 'react-router-dom'

import Home from './components/Home/Home'
import Team from './components/Team'
import Blogs from './components/Blogs'
import Chat from './components/Chat'
import Projects from './components/Projects'
import ScrollToTop from './components/ScrollTop'
import Sample from './components/Sample';
import ProjectDetail from './components/projects/ProjectDetail'

export default props => (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <ScrollToTop>
        <Switch>
          <Route exact path='/' component={ Home } />
          <Route exact path="/team" component={Team} />
          <Route exact path="/blogs" component={Blogs}/>
          <Route exact path="/projects" component={Projects}/>
          <Route exact path="/sample" component={Sample}/>
          <Route path="/projects/AppetizerDetail" render={(props) => <ProjectDetail {...props} index={0} />}/>
          <Route path="/projects/MusicDnaDetail" render={(props) => <ProjectDetail {...props} index={1} />}/>
          <Route path="/projects/CampusBuddyDetail" render={(props) => <ProjectDetail {...props} index={2} />}/>
          <Route path="/projects/SplitterDetail" render={(props) => <ProjectDetail {...props} index={3} />}/>
          <Route path="/projects/TEDxDetail" render={(props) => <ProjectDetail {...props} index={4} />}/>
          <Route path="/chat" component={Chat} />}/>

          
        </Switch>
      </ScrollToTop>
    </BrowserRouter>
  )