// eslint-disable-next-line @typescript-eslint/no-unused-vars

import Calexa from 'calexa/Module';
import NxWelcome from './nx-welcome';

export function App() {
  return (
    <div>
      <NxWelcome title="access-manager" />
      <Calexa />
    </div>
  );
}

export default App;
