import folderData from './data/folderData';
import Folder from './components/Folder';
import './App.css';

function App() {
  return (
    <div >
      <Folder explorer={folderData}/>
    </div>
  );
}

export default App;
