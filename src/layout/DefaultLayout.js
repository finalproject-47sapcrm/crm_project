import React from 'react'
import {Header} from "./partials/Header.comp"
import { Footer } from './partials/Footer.comp'

export const DefaultLayout = ({children}) => {
  return (
    <div>
    <div className ="default-layout">   
    <Header className ="header mb-5" >   
      <Header />
    </Header>
    <main className ="main">{children}</main>
    <Footer className ="footer">   
      
    <Footer />
    </Footer>

    </div>
    </div>
  );
};
