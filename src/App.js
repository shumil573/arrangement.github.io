import './App.css';
import { Button,Row, Col  } from 'antd';



function App() {
  return (
    <div className="App">
      <Row>
        <Col>
          <Button onclick="plus10" type="primary">+10s</Button>
          <Button>-10s</Button>
        </Col>
        <Col>
          <Button type="primary" onclick="plus15" >+15s</Button>
          <Button>-15s</Button>
        </Col>
      </Row>

      <Row>
        <Col>
          <Button type="primary" onclick="plus1m">+1min</Button>
          <Button type="dashed">-1min</Button>
        </Col>
        <Col>
          <Button onclick="plus5m">+5min</Button>
          <Button type="dashed">-5min</Button>
        </Col>
        <Col>
          <Button onclick="plus10m">+10min</Button>
          <Button type="dashed">-10min</Button>
        </Col>
      </Row>

      <Row>
        <Button onclick="begin">开始</Button>
        <Button onclick="reset" type="dashed">重置</Button>
      </Row>
    </div>
  );
}

export default App;
