import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import {
  BarChartOutlined,
  TableOutlined
} from "@ant-design/icons";
import Dashboard from "./pages/Dashboard";
import Logs from "./pages/Logs";

const { Header, Content } = Layout;

const App = () => {
  return (
    <BrowserRouter>
      <Layout style={{ minHeight: "100vh" }}>
        <Header style={{ display: "flex", alignItems: "center" }}>
          <div style={{ color: "#fff", fontWeight: 600, marginRight: "2rem" }}>
            Error Analytics
          </div>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["dashboard"]}
            items={[
              {
                key: "dashboard",
                icon: <BarChartOutlined />,
                label: <Link to="/">Dashboard</Link>
              },
              {
                key: "logs",
                icon: <TableOutlined />,
                label: <Link to="/logs">Logs</Link>
              }
            ]}
          />
        </Header>
        <Content style={{ padding: "1.5rem" }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/logs" element={<Logs />} />
          </Routes>
        </Content>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
