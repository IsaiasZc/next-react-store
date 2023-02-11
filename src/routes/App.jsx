import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@containers/Layout";
import Login from "@pages/Login";
import RecoveryPassword from "@pages/RecoveryPassword";
import Home from "@pages/Home";
import NotFound from "@pages/NotFound";
import SendEmail from "@pages/SendEmail";
import "@styles/global.css";
import MyAccount from "@pages/MyAccount";
import NewPassword from "@pages/NewPassword";
import CreateAccount from "@pages/CreateAccount";
import AppContext from "@context/AppContext";
import CheckOut from "@pages/CheckOut";
import useInitialState from "@hooks/useInitialState";


const App = () => {
  const initialState = useInitialState();


  return (
    <AppContext.Provider value={initialState}> {/* Creo el entorno global de mi aplicacion  */}
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/recovery" element={<RecoveryPassword />} />
            <Route path="/send-email" element={<SendEmail />}/>
            <Route path="/account" element={<MyAccount />}/>
            <Route path="/new-password" element={<NewPassword />}/>
            <Route path="/signup" element={<CreateAccount />}/>
            <Route path="/checkout" element={<CheckOut />}/>
            {/*<Route path="/orders" element={Orders}/> */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;
