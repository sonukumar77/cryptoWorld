import React,{useState,useEffect} from "react";
import {Link} from "react-router-dom";
import {Button,Menu,Typography,Avatar} from "antd";
import {HomeOutlined,MoneyCollectOutlined,BulbOutlined,FundOutlined,MenuOutlined} from "@ant-design/icons";
import icon from "../images/cryptocurrency-icon.webp";

const Navbar = () => {

    const [activeMenu,setActiveMenu] = useState(true);
    const [screenSize,setScreenSize] = useState(null);

    useEffect(() => {
        const handleResize = () => setScreenSize( window.innerWidth);
        window.addEventListener("resize",handleResize);
        handleResize();

        return () => window.removeEventListener("resize",handleResize);

    },[]);

    useEffect(() => {
        if(screenSize < 768 )
        {
            setActiveMenu(false);
        }else{
            setActiveMenu(true);
        }
    },[screenSize])



    // function getItem(label, key, icon, children, type) {
    //     return {
    //       key,
    //       icon,
    //       children,
    //       label,
    //       type,
    //     };
    //   }
    //   const items = [
    //     getItem('Option 1', '1', <HomeOutlined />),
    //     getItem('Option 2', '2', <FundOutlined />),
    //     getItem('Option 3', '3', <MoneyCollectOutlined />),
      
    //   ];

    const menuItems = [
        {
          path: "/",
          icon:<HomeOutlined />,
          label:<Link to="/">Home</Link>
        },
        {
          path: "/cryptocurrencies",
          icon:<FundOutlined />,
          label:<Link to="/cryptocurrencies">Cryptocurrencies</Link>
        },
        {
          path: "/exchanges",
          icon:<MoneyCollectOutlined />,
          label:<Link to="/exchanges">Exchanges</Link>
          
        },
        {
          path: "/news",
          icon:<BulbOutlined />,
          label:<Link to="/news">News</Link>
        },
       
      ];
  
    return(
        <div className="nav-container">
            <div className="logo-container">
                <Avatar src={icon} size="large"/>
                <Typography.Title level={2} className="logo" >
                    <Link to="/">CryptoWorld</Link>
                </Typography.Title>
                <Button className="menu-control-container" onClick={() => setActiveMenu(!activeMenu)}>
                    <MenuOutlined />
                </Button>

            </div>
            {activeMenu && (
                
                //  <Menu theme="dark" > 
                //     <Menu.Item icon={<HomeOutlined />}>
                //         <Link to="/">Home</Link>
                //     </Menu.Item> 
                //     <Menu.Item icon={<FundOutlined />}>
                //         <Link to="/cryptocurrencies">Cryptocurrencies</Link>
                //     </Menu.Item>
                //     <Menu.Item icon={<MoneyCollectOutlined />}>
                //         <Link to="/exchanges">Exchanges</Link>
                //     </Menu.Item>
                //     <Menu.Item icon={<BulbOutlined />}>
                //         <Link to="/news">News</Link>
                //     </Menu.Item> 
                 
                // </Menu>

                <Menu theme="dark"  items={menuItems}  /> 
                
             
               
            )}

           {/* <Menu
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            theme="dark"
            inlineCollapsed={collapsed}
            items={items}
        /> */}

        </div>
    )
}

export default Navbar;