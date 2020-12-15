import React from 'react';
import { observer } from 'mobx-react';
import { useStores } from '../../hooks';

const Counter: React.FC = () => {
  const { counterStore } = useStores();

  return (
    <>
      <div>{counterStore.count}</div>
      <button onClick={() => counterStore.increment()}>++</button>
      <button onClick={() => counterStore.decrement()}>--</button>
    </>
  );
};

export default observer(Counter);
