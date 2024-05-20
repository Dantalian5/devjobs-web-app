import { useColorSchemeStore } from '@/store/colorScheme.store';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AppRoutes from '@/routes';

const queryClient = new QueryClient();
function App() {
  const { colorScheme } = useColorSchemeStore();
  return (
    <div className={`main-container theme-${colorScheme}`}>
      <QueryClientProvider client={queryClient}>
        <AppRoutes />
      </QueryClientProvider>
    </div>
  );
}

export default App;
