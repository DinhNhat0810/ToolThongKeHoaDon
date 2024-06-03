import {
  HomeOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme, type MenuProps } from "antd";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
const { Header, Sider, Content } = Layout;

type Props = {
  children?: React.ReactNode;
};

type MenuItem = Required<MenuProps>["items"][number];

const Home = ({ children }: Props) => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedKey, setSelectedKey] = useState("/");
  const navigate = useNavigate();
  const location = useLocation();
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const items: MenuItem[] = [
    {
      key: "/",
      label: "Trang chủ",
      icon: <HomeOutlined />,
    },

    {
      key: "/log",
      label: "Nhật ký",
      icon: <HomeOutlined />,
    },

    {
      key: "/category",
      label: "Danh mục",
      icon: <HomeOutlined />,
    },
  ];

  useEffect(() => {
    setSelectedKey(location.pathname);
  }, [location]);

  return (
    <Layout hasSider>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        width={256}
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
          padding: 8,
        }}
      >
        {!collapsed ? (
          <h2
            style={{
              padding: "24px",
              margin: 0,
              fontSize: "1.5rem",
              fontWeight: "bold",
              color: "#fff",
              textAlign: "center",
              backgroundColor: "#001529",
            }}
          >
            NACENCOMN
          </h2>
        ) : (
          <div style={{ height: "84px" }}></div>
        )}
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[selectedKey]}
          items={items}
          onClick={(item) => {
            navigate(item.key);
          }}
        />
      </Sider>
      <Layout
        style={{
          marginLeft: !collapsed ? 256 : 80,
        }}
      >
        <Header
          style={{
            padding: "0 16px",
            background: colorBgContainer,
            display: "flex",
            alignItems: "center",
            position: "fixed",
            top: 0,
            height: 80,
            right: 0,
            left: collapsed ? 80 : 256,
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
            zIndex: 100,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              marginRight: "16px",
            }}
          />
          <h3 style={{ textTransform: "uppercase" }}>
            Nhật ký nhận truyền dữ liệu hóa đơn điện tử
          </h3>
        </Header>
        <Content
          style={{
            marginTop: "64px",
            padding: 24,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default Home;
