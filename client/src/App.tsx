import AuthWrapper from './components/spotify/auth-wrapper';
import './App.css';
import Header from './components/header/header';

function App() {

  return (
    <div className="App">
      <AuthWrapper>
        <Header />
      </AuthWrapper>
    </div>
  );
}

export default App;
