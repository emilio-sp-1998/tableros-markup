import { Menu } from "antd";
import { HomeOutlined, AreaChartOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import './Sidebar.css'

const navigation = [
    {
        nameKey: "home",
        name: "Home",
        href: "/"
    },
    {
        nameKey: "tablero",
        name: "Tablero",
        href: "/tablero"
    }
]

const MenuList = () => {
    return(
        <Menu theme="dark" mode="inline" className="menu-bar">
            {navigation.map((item) => {
                return(<Menu.Item key={item.nameKey} icon={item.nameKey === "home" ? <HomeOutlined/> : <AreaChartOutlined/>}
                >
                    <Link to={item.href}>{item.name}</Link>
                </Menu.Item>)
            })}
        </Menu>
    )
}
export default MenuList;