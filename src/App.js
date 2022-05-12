import { ThemeProvider } from '@mui/material/styles';
import {useSelector} from 'react-redux'
import themes from './themes/index';
import {Fragment} from 'react'
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import { publicRouters } from './routers';
import DefaultLayout from './component/Layout/DefaultLayout/index'
function App() {
  const customization = useSelector(state => state.customization)
  return (
    <ThemeProvider theme= {themes(customization)}>
        <BrowserRouter>
          <div className="App">
            <Routes>
              {publicRouters.map((router,index) =>{
                const Layout = router.layout === null? Fragment: DefaultLayout
                const Page = router.component
                return (
                  <Route
                    key={index}
                    path={router.path}
                    element={
                      <Layout>
                        <Page/>
                      </Layout>}/>
                )
              })}
            </Routes>
          </div>
        </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
