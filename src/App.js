import React from 'react';
import Counter from './Containers/Counter/Counter';
import Result from './Containers/Result/Result';

class App extends React.Component {
  render = () => {
    return (
      <div>
        <Counter />
        <Result />
      </div>
    );
  };
}

 

export default App;
