import './App.scss';
import { Routes, Route } from 'react-router-dom';
import { CoreLayout } from 'layouts';
import { Landing, Profile } from 'pages';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<CoreLayout />} >
          <Route path="/" element={<Landing />} />
          <Route path="/:profileId" element={<Profile />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;