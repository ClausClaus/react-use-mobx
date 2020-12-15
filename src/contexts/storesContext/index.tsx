import React from 'react';
import { CounterStore, ThemeStore } from '../../stores';

const storesContext = React.createContext({
  counterStore: CounterStore(),
  themeStore: ThemeStore(),
});

export default storesContext;
