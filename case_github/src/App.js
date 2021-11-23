import Routess from './Routes';
import { ContextProvider } from './context';

const App = () => (
    <ContextProvider>
         <Routess />
    </ContextProvider>
);

export default App;