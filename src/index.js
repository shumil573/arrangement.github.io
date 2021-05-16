import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import moment from 'moment';
import reportWebVitals from './reportWebVitals';
import { Button, Flex, WhiteSpace} from 'antd-mobile';
import { Col, Row} from 'antd';

function PlusSec(props) {
  return (
    <Button
      onClick={props.onClick}
      type="primary">
      +{props.value}s
    </Button>
  );
}

function MinusSec(props) {
  return (
    <Button
      onClick={props.onClick}
      >
      {props.value}s
    </Button>
  );
}

function PlusMin(props) {
  return (
    <Button
      onClick={props.onClick}
      type="primary">
      +{props.value}min
    </Button>
  );
}

function MinusMin(props) {
  return (
    <Button
      onClick={props.onClick}
      >
      {props.value}min
    </Button>
  );
}

class SecTimer extends React.Component {
  renderSeconds(i) {
    if (i >= 0) {
      return (
        <PlusSec
          value={i}
          onClick={() => this.props.onClick(i)}
        />
      )
    } else {
      return (
        <MinusSec
          value={i}
          onClick={() => this.props.onClick(i)}
        />
      )
    }
  }

  render() {
    return (
      this.renderSeconds(this.props.time)
    )
  }
}

class MinTimer extends React.Component {
  renderMinutes(i) {
    if (i >= 0) {
      return (
        <PlusMin
          value={i}
          onClick={() => this.props.onClick(i * 60)}
        />
      )
    } else {
      return (
        <MinusMin
          value={i}
          onClick={() => this.props.onClick(i * 60)}
        />
      )
    }
  }

  render() {
    return (
      this.renderMinutes(this.props.time)
    )
  }
}

class TimeDOM extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      ClickTime:new Date(),
      timeSum: 0,
      cur: 0,
      counting: false,
      higher: 0,
      lower: 0,
      cached: false,
    };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  tick(){
    if(this.state.counting===true){
      let cur=this.state.cur;
      if(cur>0){
        cur-=1;
        const higher = Math.floor(cur / 60);
        const lower = cur % 60;
        this.setState({ cur,higher, lower });
      }else{
        this.setState({
          counting:false,
          cached:true,
        })
      }
    }
  }

  handleClick(i) {
    let sum = this.state.timeSum;
    sum = (sum + i >= 0) ? sum + i : 0;
    const higher = Math.floor(sum / 60);
    const lower = sum % 60;
    this.setState({ timeSum: sum, higher, lower });
    console.log(typeof (this.state.timeSum), this.state.timeSum);
    console.log(this.state.higher, this.state.lower);
  }

  start = () => {
    console.log("start!");
    console.log(this.state.timeSum);
    const sum = this.state.timeSum;
    if (sum > 0) {
      const count = true;
      this.setState({ counting:count, cur:sum });
    }
  }

  resume = () => {
    const cached = false;
    const sum=this.state.timeSum;
    const higher = Math.floor(sum / 60);
    const lower = sum % 60;
    this.setState({ cached,higher,lower});
  }

  reset = () => {
    if (this.state.counting === true) {//停止计时，时间下次可以利用
      const cached = true;
      const cur=0;
      const sum=this.state.timeSum;
      const higher = Math.floor(sum / 60);
      const lower = sum % 60;
      this.setState({ cached, counting: false,cur,higher,lower });
    } else if (this.state.counting === false) {
      const timeSum = 0, cur = 0,higher=0,lower=0;
      const cached = false;
      this.setState({ timeSum, cur, cached,higher,lower });
    }
  }

  render() {
    return (
      <div className="App">
        <Row >
          <Col>
            <SecTimer
              time={10}
              onClick={i => this.handleClick(i)}
            />
          </Col>
          <Col>
            <SecTimer
              time={15}
              onClick={i => this.handleClick(i)}
            />
          </Col>
        </Row>
        <Flex >
          <Flex.Item>
            <SecTimer
              time={10}
              onClick={i => this.handleClick(i)}
            />
          </Flex.Item>
          <Flex.Item>
            <SecTimer
              time={15}
              onClick={i => this.handleClick(i)}
            />
          </Flex.Item>
        </Flex>
        <WhiteSpace />
        <Flex justify="center" >
          <Flex.Item span="4" >
            <SecTimer
              time={-10}
              onClick={i => this.handleClick(i)}
            />
          </Flex.Item>
          <Flex.Item span="4" >
            <SecTimer
              time={-15}
              onClick={i => this.handleClick(i)}
            />
          </Flex.Item>
        </Flex>
        <WhiteSpace />
        <Flex justify="center" style={{marginTop:"16px"}}>
          <Flex.Item span="4" >
            <MinTimer
              time={1}
              onClick={i => this.handleClick(i)}
            />
          </Flex.Item>
          <Flex.Item span="4" >
            <MinTimer
              time={5}
              onClick={i => this.handleClick(i)}
            />
          </Flex.Item>
          <Flex.Item span="4" >
            <MinTimer
              time={10}
              onClick={i => this.handleClick(i)}
            />
          </Flex.Item>
        </Flex>
        <WhiteSpace />
        <Flex justify="center" >
          <Flex.Item span="4" >
            <MinTimer
              time={-1}
              onClick={i => this.handleClick(i)}
            />
          </Flex.Item>
          <Flex.Item span="4" >
            <MinTimer
              time={-5}
              onClick={i => this.handleClick(i)}
            />
          </Flex.Item>
          <Flex.Item span="4" >
            <MinTimer
              time={-10}
              onClick={i => this.handleClick(i)}
            />
          </Flex.Item>
        </Flex>

        {
          this.state.counting === true && (
            <div>
              <WhiteSpace />
              <Flex justify="center" style={{marginTop:"16px"}}>
                <Button type="default">倒计时{this.state.higher}'{this.state.lower}''</Button>
              </Flex>
              <Flex justify="center" >
                <Button onClick={() => this.reset()} type="dashed">停止计时</Button>
              </Flex>
            </div>
          )
        }
        {
          this.state.counting === false && this.state.cached === false && (
            <div>
              <WhiteSpace />
              <Flex justify="center" style={{marginTop:"16px"}}>
                <Button
                  onClick={() => this.start()}
                  type="primary"
                >
                  {this.state.higher}'{this.state.lower}''开始计时
                </Button>
              </Flex>
              <Flex justify="center" >
                <Button onClick={() => this.reset()} type="dashed">重置</Button>
              </Flex>
            </div>
            
          )
        }
        {
          this.state.counting === false && this.state.cached === true && (
            <div>
              <WhiteSpace />
              <Flex justify="center" style={{marginTop:"16px"}}>
                <Button onClick={() => this.resume()} type="primary">激活上次计时时长 {this.state.higher}'{this.state.lower}''</Button>
              </Flex>
              <Flex justify="center" >
                <Button onClick={() => this.reset()} type="dashed">重置</Button>
              </Flex>
            </div>
            
          )
        }

      </div>
    )
  }
}

ReactDOM.render(
  <TimeDOM />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
