import logo from './logo.svg';
import './App.css';
import Todos from './components/todos';
import SignIn from './components/signin';
import {useAuthState} from 'react-firebase-hooks/auth'
import { auth } from './firebase_config';

function App() {
  const [user]=useAuthState(auth)

  return user?<Todos/>:<SignIn/>
}

export default App;
