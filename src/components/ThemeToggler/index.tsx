import { observer } from 'mobx-react';
import { useStores } from '../../hooks';

const ThemeToggler = observer(() => {
  const { themeStore } = useStores();

  return (
    <>
      <div>{themeStore.theme}</div>
      <button onClick={() => themeStore.setTheme('light')}>白天</button>
      <button onClick={() => themeStore.setTheme('dark')}>黑夜</button>
    </>
  );
});
export default ThemeToggler;
