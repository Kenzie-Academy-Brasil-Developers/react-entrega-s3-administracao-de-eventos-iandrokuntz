import './App.css';
import Routes from "./routes";
import { ProductProvider } from './providers/products';
import { GraduationProvider } from './providers/graduation';
import { ConfraternizationProvider } from './providers/confraternization';
import { WeddingProvider } from './providers/wedding';

function App() {

  return (
    <div className="App">
      <GraduationProvider>
        <ConfraternizationProvider>
          <WeddingProvider>
            <ProductProvider>
              <Routes/>
            </ProductProvider>
          </WeddingProvider>
        </ConfraternizationProvider>
      </GraduationProvider>
    </div>
  );
}

export default App;
