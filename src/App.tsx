import { useColorSchemeStore } from '@/store/colorScheme.store';
import AppRoutes from '@/routes';

function App() {
  const { colorScheme } = useColorSchemeStore();
  return (
    <div className={`main-container theme-${colorScheme}`}>
      <AppRoutes />
    </div>
  );
}

export default App;
