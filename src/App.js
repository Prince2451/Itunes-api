import "./App.css";
import "antd/dist/antd.css";
import SearchBox from "./components/searchbox";
import { Row, Col, Layout } from "antd";
import SearchResult from "./components/searchResults";
const { Header, Content } = Layout;

function App() {
  return (
    <Layout>
      <Header>
        <h1 style={{ color: "#fff" }}>Itunes API</h1>
      </Header>
      <Content>
        <Row justify="center" align="middle" style={{ marginTop: "50px" }}>
          <Col span={12}>
            <SearchBox />
          </Col>
          <Col span={24}>
            <SearchResult />
          </Col>
        </Row>
      </Content>
    </Layout>
  );
}

export default App;
