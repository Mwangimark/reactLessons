import Welcome from './Welcome';
import Counter from './Counter';
import NameForm from './NameForm';
import ContactForm from './ContactForm';
import CondRendering from './CondRendering';
import ListRendering from './ListRendering';
import ObjectRendering from './ObjectRendering';
import Style from './styling/Style';
import CssModuleDemo from './styling/CssModuleDemo';
import Parent from './props/Parent';
import ToogleButton from './hooks/ToogleButton';
import UserList from './hooks/UserList';
import GitHub from './hooks/GitHub';
import MiniProject from './miniProject/MiniProject';
import ConditionalRendering from './conditionalr/ConditionalRendering';
import LinkComponents from './links/LinkComponents';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h5>React is now Back !!!!</h5>
      <Router>
        <Routes>
          <Route path='/routers' element={<LinkComponents />} />
        </Routes>
        <ConditionalRendering />
        <MiniProject />
        <GitHub />
        <UserList />
        <ToogleButton />
        <Welcome name="mark" />
        <Counter />
        <NameForm />
        <h5>Lesson 3: This is a contact Form </h5>
        <ContactForm />
        <CondRendering />
        <ListRendering />
        <ObjectRendering />
        <Style />
        <CssModuleDemo />
        <Parent />
        {/* <UseEffect/> */}
      </Router>


    </div>
  );
}

export default App;
