import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "@/components/Header";
import PublicRoutes from "@/routes/public.routes.tsx";
import {useThemeStore} from "@/store/color.store.ts";


function App() {
  const {defineInitialColor, color} = useThemeStore()
  useEffect(() => {
    defineInitialColor()
  }, []);



  return (
    <div className={`main-container theme-${color}`}>
      <BrowserRouter basename="/">
        <Header/>
        <PublicRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
