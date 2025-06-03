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
import UseEffect from './hooks/UseEffect';
import ToogleButton from './hooks/ToogleButton';
import UserList from './hooks/UserList';
import GitHub from './hooks/GitHub';
import MiniProject from './miniProject/MiniProject';


function App() {
  return (
    <div className="App">
      <h5>React is now Back !!!!</h5>
      <MiniProject/>
      <GitHub/>
      <UserList/>
      <ToogleButton/>
      <Welcome name = "mark"/>
      <Counter />
      <NameForm/>
      <h5>Lesson 3: This is a contact Form </h5>
      <ContactForm/>
      <CondRendering/>
      <ListRendering/>
      <ObjectRendering/>
      <Style/>
      <CssModuleDemo/>
      <Parent/>
      {/* <UseEffect/> */}


    </div>
  );
}

export default App;
