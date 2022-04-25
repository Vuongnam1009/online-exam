import { ThemeProvider } from '@mui/material/styles';
import {useSelector} from 'react-redux'
import Layout from './containers/layout/index';
import themes from './themes/index';
function App() {
  const customization = useSelector(state => state.customization)
  return (
    <ThemeProvider theme= {themes(customization)}>
        <div className="App">
          <Layout/>
        </div>
    </ThemeProvider>
  );
}

export default App;
