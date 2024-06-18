import { useState } from 'react'
import reactLogo from './assets/react.svg'
import {Route, Routes} from 'react-router-dom'
import viteLogo from '/vite.svg'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { Button, Layout } from "antd";
import Logo from './assets/components/common/Logo';
import './App.css'
import MenuList from './assets/components/common/MenuList';
import Home from './assets/components/pages/frontend/Home'
import Tablero from './assets/components/pages/frontend/Tablero'

const {Header, Sider} = Layout

function App() {

  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout>
      {/* <Routes>
      </Routes> */}
      <Sider collapsed={collapsed} collapsible className='sidebar'>
        <Logo/>
        <MenuList/>
      </Sider>
      <Layout>
        <Header className='header'
        >
          <Button
            type='text'
            className='toggle'
            onClick={() => setCollapsed(!collapsed)}
            icon={collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}
          >

          </Button>
        </Header>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/tablero" element={<Tablero/>}/>
        </Routes>
      </Layout>
    </Layout>
  )
}

export default App
