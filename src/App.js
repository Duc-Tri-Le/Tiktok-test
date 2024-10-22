import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from "./routes";
import { DefaultLayout } from "./componnents/Layout";
import { Fragment } from "react";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            //Page set
            const Page = route.component;
            //Layout set
            let Layout = DefaultLayout;
            if(route.layout ){
              Layout = route.layout;
            }else if(route.layout === null){
              Layout = Fragment;
            }

            return <Route 
                  key={index} 
                  path={route.path} 
                  element={
                    <Layout>
                      <Page />
                    </Layout>
                } 
              />;
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
