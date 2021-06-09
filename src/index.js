import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import moment from 'moment';
import reportWebVitals from './reportWebVitals';
import 'antd-mobile/dist/antd-mobile.css';
import { Toast, Card, Flex, Icon, WhiteSpace, WingBlank } from 'antd-mobile'
import { PageHeader, Table, DatePicker, message, Input, Form,Button } from 'antd';

const { RangePicker } = DatePicker;

function PlusSec(props) {
  return (
    <Button
      onClick={props.onClick}
    >
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
      type="dashed">
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

const columns = [
  {
    title: 'todo',
    dataIndex: 'desc',
    key: 'desc',
  },
  {
    title: '死线',
    dataIndex: 'ddl',
    render: (name, { ddl }) => ([
      <DatePicker
        value={moment(ddl)}
        format="MM-DD-HH:mm"
        disabled
      > </DatePicker>
    ])
  },
];

const todoColumns = [
  {
    title: 'todo',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: '死线',
    dataIndex: 'ddl',
    render: (name, { ddl }) => ([
      <DatePicker
        value={moment(ddl)}
        format="MM-DD HH:mm"
        disabled
      > </DatePicker>
    ])
  },
  {
    title: '进展',
    dataIndex: 'done',
    key: 'done',
    render: (name, { done }) => ([
      done===true&&(
        <label>已完成</label>
      ),
      done===false&&(
        <Button>未完成</Button>
      )
    ])
  },
];

class TimeDOM extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timeSum: 0,
      cur: 0,
      counting: false,
      hours: 0,
      mins: 0,
      ss: 0,
      old_hours: 0,
      old_mins: 0,
      old_ss: 0,
      start: 0,
      end: 0,
      cached: false,
      ddl_time: '02-08 09:30',
      dataSource: [
        {
          ddl: '2021-05-17T17:46:56+08:00',
          desc: '这是写死的实例一',
        },
        {
          ddl: 'Mon May 17 2021 17:46:56 GMT+0800',
          desc: 'Mon May 17 2021 17:46:56 GMT+0800',
        },
        {
          ddl: '2013-02-08 09:30:26',
          desc: 'moment().format()',
        },
      ],
      todoSource:[],

    };
  }

  componentDidMount() {
    this.load();
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  load() {
    var collection = localStorage.getItem("todo");
    if (collection != null) {
      var data = JSON.parse(collection);
    } else var data = [];
    this.setState({todoSource:data});
  }

  /* loadData() {
    var collection = localStorage.getItem("todo");
    if (collection != null) {
      return JSON.parse(collection);
    } else return [];
  }

  saveData(data) {
    localStorage.setItem("todo", JSON.stringify(data));
  }

  load() {
    var todolist = document.getElementById("todolist");
    var donelist = document.getElementById("donelist");
    var collection = localStorage.getItem("todo");
    if (collection != null) {
      var data = JSON.parse(collection);
      var todoCount = 0;
      var doneCount = 0;
      var todoString = "";
      var doneString = "";
      for (var i = data.length - 1; i >= 0; i--) {
        if (data[i].done) {
          doneString += "<li draggable='true'><input type='checkbox' onchange='update(" + i + ",\"done\",false)' checked='checked' />" +
          "<p id='p-" + i + "' onclick='edit(" + i + ")'>" + data[i].title + "</p>" +
          "<a href='javascript:remove(" + i + ")'>-</a></li>";
          doneCount++;
        } else {
          todoString += "<li draggable='true'><input type='checkbox' onchange='update(" + i + ",\"done\",true)' />" +
          "<p id='p-" + i + "' onclick='edit(" + i + ")'>" + data[i].title + "</p>" +
          "<a href='javascript:remove(" + i + ")'>-</a></li>";
          todoCount++;
        }
      };
      alert("if");
      todocount.innerHTML = todoCount;
      todolist.innerHTML = todoString;
      donecount.innerHTML = doneCount;
      donelist.innerHTML = doneString; 
    } else {

      alert("else");
      todocount.innerHTML = 0;
      todolist.innerHTML = "";
      donecount.innerHTML = 0;
      donelist.innerHTML = ""; 
    }
  }

  postaction1() {
    // 获取title节点
    var title = document.getElementById("title");
    if (title.value.trim() == "") {
        alert("内容不能为空");
    } else {
        var data = this.loadData();
        var todo = { "title": title.value, "done": false };
        data.push(todo);
        this.saveData(data);
        var form = document.getElementById("form");
        form.reset();
        this.load();
      }
    } */

  onFinish=(values) =>{
    console.log(values);
    var collection = localStorage.getItem("todo");
    if (collection != null) {
      var data = JSON.parse(collection);
    } else var data = [];
    console.log('data:', data);
    var todo = { "title": values.detail, "done": false, "ddl": values.time };
    data.push(todo);
    console.log('data:', data);
    localStorage.setItem("todo", JSON.stringify(data));
    this.setState({todoSource:data});
  }

  onFinishFailed(errorInfo) {
    console.log('Failed:', errorInfo);
  };

  /* onTimeChange(value, dateString) {
    console.log('onOk: ', value);
    let ddl_time=value.format("MM-DD HH:mm");
    console.log(typeof(ddl_time),ddl_time);
    this.setState({ddl_time:ddl_time});
  } */

  tick() {
    if (this.state.counting === true) {
      let cur = this.state.cur;
      if (cur > 0) {
        cur -= 1;
        const mins = Math.floor(cur / 60);
        const ss = cur % 60;
        this.setState({ cur, mins, ss });
      } else if (cur == 0 && this.state.counting == true) {
        const sum = this.state.timeSum;
        const old_hours = Math.floor(sum / 3600);
        const old_mins = Math.floor(sum / 60);
        const old_ss = sum % 60;
        // if(window.Notification && Notification.permission !== "denied") {
        //   Notification.requestPermission(function(status) {
        //     //var n = new Notification('通知标题', { body: '这里是通知内容！' }); 
        //     var n = new Notification('时间到！', { body: old_mins+'分'+ old_ss+'秒计时结束'}); 
        //   });
        // } else 
        {
          Toast.fail("Toast！该浏览器不允许通知!" + old_mins + "分" + old_ss + "秒计时时间到", 2);
          message.error("Error！该浏览器不允许通知!" + old_mins + "分" + old_ss + "秒计时时间到");
        }
        this.setState({
          counting: false,
          cached: true,
          old_hours, old_mins, old_ss
        });
      }
    }
  }


  handleClick(i) {
    let sum = this.state.timeSum;
    sum = (sum + i >= 0) ? sum + i : 0;
    const hours = Math.floor(sum / 3600);
    const mins = Math.floor(sum / 60);
    const ss = sum % 60;
    if (this.state.counting == false && this.state.cached == false) {
      this.setState({ timeSum: sum, hours, mins, ss });
      console.log(typeof (this.state.timeSum), this.state.timeSum);
      console.log(this.state.mins, this.state.ss);
    }
  }

  start = () => {
    console.log("start!");
    console.log(this.state.timeSum);
    const sum = this.state.timeSum;
    if (sum > 0 && this.state.counting == false) {
      var start = moment().format();
      var end = moment().add(sum, 'seconds')//找到的好函数！ 
      console.log(moment().toString());
      console.log(start);
      var dur = moment.duration(sum, 'seconds'),
        hours = dur.get('hours'),
        mins = dur.get('minutes'),
        ss = dur.get('seconds');
      const count = true;
      this.setState({ counting: count, cur: sum });
    }
  }

  resume = () => {
    const cached = false;
    const sum = this.state.timeSum;
    const hours = Math.floor(sum / 3600);
    const mins = Math.floor(sum / 60);
    const ss = sum % 60;
    this.setState({ cached, hours, mins, ss });
  }

  reset = () => {
    if (this.state.counting === true) {//停止计时，时间下次可以利用
      const cached = true;
      const cur = 0;
      const sum = this.state.timeSum;
      const hours = Math.floor(sum / 3600);
      const mins = Math.floor(sum / 60);
      const ss = sum % 60;
      this.setState({ cached, counting: false, cur, hours, mins, ss });
    } else if (this.state.counting === false) {
      const timeSum = 0, cur = 0, hours = 0, mins = 0, ss = 0;
      const cached = false;
      this.setState({ timeSum, cur, cached, hours, mins, ss });
    }
  }

  stop = () => {
    const cached = true;
    const sum = this.state.timeSum;
    const old_hours = Math.floor(sum / 3600);
    const old_mins = Math.floor(sum / 60);
    const old_ss = sum % 60;
    this.setState({ cached, counting: false, old_hours, old_mins, old_ss });
  }

  render() {
    return (
      <div className="App">
        <PageHeader
          className="site-page-header"
          onBack={() => null}
          title="废宅养肝宝"
          subTitle="憋玩了，学习去吧"
        />
        <WingBlank size="lg">
          <WhiteSpace />
          <Card>
            <Card.Header
              title={<span >连肝计时器</span>}
              thumb={
                <svg t="1621233122743" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2395" width="30" height="30"><path d="M472.32 562.3808m-393.4208 0a393.4208 393.4208 0 1 0 786.8416 0 393.4208 393.4208 0 1 0-786.8416 0Z" fill="#80B7F9" p-id="2396"></path><path d="M953.9072 499.8144c-18.6368-226.9696-199.6288-407.9616-426.5984-426.5984-20.9408-1.7408-38.7584 15.104-38.7072 36.096 0.2048 125.184 1.4336 256.1024 1.5872 393.1136 0.0512 19.9168 16.1792 36.096 36.096 36.096h391.5776c20.992 0 37.7344-17.8176 36.0448-38.7072z" fill="#80B7F9" p-id="2397"></path><path d="M488.7552 169.3696c0.4096 106.8544 1.28 217.7536 1.4336 333.056 0.0512 19.9168 16.1792 36.096 36.096 36.096h338.6368c-11.9808-200.7552-174.4384-360.8576-376.1664-369.152z" fill="#3E8BF8" p-id="2398"></path></svg>
              }
            />
            <Card.Body>
              <Flex justify="center">
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
              <Flex justify="center" >
                <Flex.Item>
                  <SecTimer
                    time={-10}
                    onClick={i => this.handleClick(i)}
                  />
                </Flex.Item>
                <Flex.Item>
                  <SecTimer
                    time={-15}
                    onClick={i => this.handleClick(i)}
                  />
                </Flex.Item>
              </Flex>
              <WhiteSpace />
              <Flex justify="center">
                <Flex.Item>
                  <MinTimer
                    time={1}
                    onClick={i => this.handleClick(i)}
                  />
                </Flex.Item>
                <Flex.Item>
                  <MinTimer
                    time={5}
                    onClick={i => this.handleClick(i)}
                  />
                </Flex.Item>
                <Flex.Item>
                  <MinTimer
                    time={10}
                    onClick={i => this.handleClick(i)}
                  />
                </Flex.Item>
              </Flex>
              <Flex justify="center" >
                <Flex.Item>
                  <MinTimer
                    time={-1}
                    onClick={i => this.handleClick(i)}
                  />
                </Flex.Item>
                <Flex.Item>
                  <MinTimer
                    time={-5}
                    onClick={i => this.handleClick(i)}
                  />
                </Flex.Item>
                <Flex.Item>
                  <MinTimer
                    time={-10}
                    onClick={i => this.handleClick(i)}
                  />
                </Flex.Item>
              </Flex>

              <WhiteSpace />
              {
                this.state.counting === true && (
                  <div>
                    <Button disabled>倒计时{this.state.mins}'{this.state.ss}''</Button>
                    <Button onClick={() => this.stop()}>停止计时</Button>
                  </div>
                )
              }
              {
                this.state.counting === false && this.state.cached === false && (
                  <div>
                    <Button
                      onClick={() => this.start()}
                      type="primary"
                    >
                      {this.state.mins}'{this.state.ss}''开始计时
                      </Button>
                    <Button
                      onClick={() => this.reset()}
                    >
                      重置
                      </Button>
                  </div>

                )
              }
              {
                this.state.counting === false && this.state.cached === true && (
                  <div>
                    <Button onClick={() => this.resume()} type="primary">激活上次计时时长 {this.state.old_mins}'{this.state.old_ss}''</Button>
                    <Button onClick={() => this.reset()}>重置</Button>
                  </div>

                )
              }
            </Card.Body>
          </Card>

          <WhiteSpace />

          <Card>
            <Card.Header
              title={<span >todo倒计时</span>}
              thumb={
                <svg t="1621233024225" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1829" width="30" height="30"><path d="M713.3184 905.2672h-482.816c-73.5232 0-133.12-59.5968-133.12-133.12V267.4176c0-73.5232 59.5968-133.12 133.12-133.12h503.296c73.5232 0 133.12 59.5968 133.12 133.12v484.3008c0 84.7872-68.8128 153.5488-153.6 153.5488z" fill="#80B7F9" p-id="1830"></path><path d="M695.296 729.4464m-234.752 0a234.752 234.752 0 1 0 469.504 0 234.752 234.752 0 1 0-469.504 0Z" fill="#80B7F9" p-id="1831"></path><path d="M866.9184 757.6576v-188.5696c-42.8544-45.824-103.8336-74.5472-171.52-74.5472-129.6896 0-234.752 105.1136-234.752 234.752 0 70.0928 30.7712 132.9664 79.4624 175.9744h179.1488c81.5104 0 147.6608-66.0992 147.6608-147.6096z" fill="#3E8BF8" p-id="1832"></path><path d="M308.5824 230.5536c-21.76 0-39.3728-17.6128-39.3728-39.3728V97.6896c0-21.76 17.6128-39.3728 39.3728-39.3728s39.3728 17.6128 39.3728 39.3728v93.4912c0 21.7088-17.664 39.3728-39.3728 39.3728zM659.3024 230.5536c-21.76 0-39.3728-17.6128-39.3728-39.3728V97.6896c0-21.76 17.6128-39.3728 39.3728-39.3728s39.3728 17.6128 39.3728 39.3728v93.4912c0 21.7088-17.664 39.3728-39.3728 39.3728z" fill="#80B7F9" p-id="1833"></path><path d="M269.2096 134.2976v56.8832c0 21.76 17.6128 39.3728 39.3728 39.3728s39.3728-17.6128 39.3728-39.3728V134.2976H269.2096zM619.9296 134.2976v56.8832c0 21.76 17.6128 39.3728 39.3728 39.3728s39.3728-17.6128 39.3728-39.3728V134.2976h-78.7456z" fill="#3E8BF8" p-id="1834"></path><path d="M757.0944 371.2512H207.104c-22.6304 0-40.96-18.3296-40.96-40.96s18.3296-40.96 40.96-40.96h549.9904c22.6304 0 40.96 18.3296 40.96 40.96s-18.3296 40.96-40.96 40.96zM273.5104 559.7184H207.104c-22.6304 0-40.96-18.3296-40.96-40.96s18.3296-40.96 40.96-40.96h66.4064c22.6304 0 40.96 18.3296 40.96 40.96s-18.3296 40.96-40.96 40.96zM463.7184 559.7184H397.312c-22.6304 0-40.96-18.3296-40.96-40.96s18.3296-40.96 40.96-40.96h66.4064c22.6304 0 40.96 18.3296 40.96 40.96s-18.3808 40.96-40.96 40.96zM666.4704 838.4512c-11.1616 0-21.8112-4.5568-29.5424-12.5952l-65.4848-68.1984a40.93952 40.93952 0 0 1 1.1776-57.9072 40.93952 40.93952 0 0 1 57.9072 1.1776l35.0208 36.5056 93.6448-103.4752a40.96 40.96 0 0 1 57.856-2.8672 40.91904 40.91904 0 0 1 2.8672 57.856l-123.136 136.0384a40.96 40.96 0 0 1-29.7472 13.4656h-0.5632z" fill="#FFFFFF" p-id="1835"></path></svg>
              }
            />
            <Card.Body>
              <Form
                onFinish={this.onFinish}
                onFinishFailed={this.onFinishFailed}
                name="basic"
              >
                <Form.Item
                  label="ddl"
                  name="time"
                  placeholder="添加ToDo"
                >
                  <DatePicker
                    showTime={{ format: 'HH:mm' }}
                    format="MM-DD HH:mm"
                  />
                </Form.Item>
                <Form.Item
                  label="事务描述"
                  name="detail"
                  placeholder="添加ToDo"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your todo!',
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item>
                  <Button type="primary" htmlType="submit">
                    添加
                  </Button>
                </Form.Item>
              </Form>

              <Flex justify="center">
                <Table dataSource={this.state.todoSource} columns={todoColumns} />
              </Flex>
              <Flex justify="center">
                <Table dataSource={this.state.dataSource} columns={columns} />
              </Flex>
            </Card.Body>
          </Card>
        </WingBlank>
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