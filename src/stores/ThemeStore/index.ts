import { makeAutoObservable } from 'mobx';

type ThemeStyle = 'light' | 'dark';

export default function ThemeStore() {
  return makeAutoObservable({
    theme: 'light',
    setTheme(newTheme: ThemeStyle) {
      this.theme = newTheme;
    },
  });
}
