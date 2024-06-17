import { useState } from 'react'
import reactLogo from './assets/react.svg'
import {Route, Routes} from 'react-router-dom'
import viteLogo from '/vite.svg'
import { Layout } from "antd";
import './App.css'

const {Header, Sider} = Layout

function App() {

  return (
    <Layout>
      {/* <Routes>
      </Routes> */}
      <Sider className='sidebar'>sidebar</Sider>
    </Layout>
  )
}

export default App
