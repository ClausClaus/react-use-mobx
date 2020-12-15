import { makeAutoObservable } from 'mobx';

export default function CounterStore() {
  return makeAutoObservable({
    count: 0,
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
    get doubleCount() {
      return this.count * 2;
    },
  });
}
