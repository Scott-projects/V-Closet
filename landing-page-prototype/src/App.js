import Main from './components/Main';
import { AuthUserProvider } from './firebase/authentication';
function App() {
  return (
    <div className="App">
      <AuthUserProvider>
        <Main />
      </AuthUserProvider>
    </div>
  );
}

export default App;