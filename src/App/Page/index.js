import Top from './Home/Top'
import About from './Home/About'
import Blog from './Home/Blog'
import Contact from './Home/Contact'
import Plan from './Home/Plan'
import Team from './Home/Team'
import Works from './Home/Works'

import PeopleContainer from './People'
import AboutContainer from './About'

import { Route, Switch } from 'react-router-dom'

let PageHome = () => (
    <>
        <Top />
        <About />
        <Blog />
        <Contact />
        <Plan />
    </>
)

let RouterContainer = () => {
    return (
        <>
            <Switch>
                <Route exact path='/' component={PageHome} />
                <Route path='/people' component={PeopleContainer} />
                <Route path='/about' component={AboutContainer} />
            </Switch>
        </>


    )
}
export default RouterContainer;