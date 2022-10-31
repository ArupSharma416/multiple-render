
import './App.css';
import ProjectList from './ProjectList';

function App() {
  return (
    <div className="App">
      <ProjectList name="html" description="e-commerce site"/>
      <ProjectList name="css" description="design platform"/>
      <ProjectList name="javascript" description="coaching app"/>
      <ProjectList name="react" description="online paper"/>
    </div>
  );
}

export default App;
