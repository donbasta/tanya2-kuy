import { SocketContext, socketContext } from './context/SocketContext';
import Router from './router/Router';

function App() {
  return (
    <SocketContext.Provider value={socketContext}>
      <Router />
    </SocketContext.Provider>
  );
}

export default App;
