import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './index.less';
import moment from 'moment';
import reportWebVitals from './reportWebVitals';
import 'antd-mobile/dist/antd-mobile.css';
import { Toast, Card, Flex, Tabs, WhiteSpace, WingBlank, } from 'antd-mobile'
import { PageHeader, Table, Radio, DatePicker, Modal, message, Input, Form, Button, Row, Col, Slider, Timeline, Tooltip } from 'antd';
import {
  CloseCircleTwoTone, createFromIconfontCN
} from '@ant-design/icons';
import 'bootstrap/dist/css/bootstrap.css'
import { ProgressBar } from "react-bootstrap";
import TypeIcon from './typeIcon';


const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_2928730_c0q7n33ntiq.js',
});

const { RangePicker } = DatePicker;

const tabs2 = [
  { title: '时间', sub: '1' },
  { title: '库存', sub: '2' },
  { title: '子弹', sub: '3' },
];

const types = [
  { title: '普通', NO: 0 },
  { title: '待办', NO: 1 },
  { title: '星星', NO: 2 },
  { title: '注意', NO: 3 },
  { title: '完成', NO: 4 },
  { title: '延后', NO: 5 },
  { title: '提前', NO: 6 },
  { title: '惊叹', NO: 7 },
  { title: '时限', NO: 8 },
  { title: '点子', NO: 9 },
  { title: '进行中', NO: 10 },
  { title: '生活小窍门', NO: 11 },
]

const secList = [
  10, 15, -10, -15
]

const minPlusList = [
  1,5,10
]

const minMinusList = [
  -1,-5,-10
]

const addTypeList = [
  1,2,3,4,5,6,7,8,10,12,15,16,18,20,50
]

function PlusSec(props) {
  return (
    <Button
      onClick={props.onClick}
      type="primary"
      block
    >
      +{props.value}s
    </Button>
  );
}

function MinusSec(props) {
  return (
    <Button
      onClick={props.onClick}
      block
    >
      {props.value}s
    </Button>
  );
}

function PlusMin(props) {
  return (
    <Button
      onClick={props.onClick}
      type="primary"
      block
    >
      +{props.value}min
    </Button>
  );
}

function MinusMin(props) {
  return (
    <Button
      onClick={props.onClick}
      type="dashed"
      block
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

function AddLine(props) {
  return (
    <Timeline.Item
      color="green"
    >
      {props.value}
    </Timeline.Item>
  );
}

function OutOfLine(props) {
  return (
    <Timeline.Item
      color="yellow"
    >
      {props.value}
    </Timeline.Item>
  );
}

function ChangeLine(props) {
  return (
    <Timeline.Item
    >
      {props.value}
    </Timeline.Item>
  );
}


class MyTimeLine extends React.Component {
  renderMytlitem(line) {
    if (line[6] === "加" && line[7] === "入") {
      return (
        <AddLine
          value={line}
        />
      )
    } else if (line[6] === "超" && line[7] === "棒") {
      return (
        <OutOfLine
          value={line}
        />
      )
    } else {
      return (
        <ChangeLine
          value={line}
        />
      )
    }
  }

  render() {
    var tool = this.props.source.slice();
    return tool.reverse().map((line) => this.renderMytlitem(line));
  }
}

class MyBtiLine extends React.Component {
  renderMybtiitem(line) {
    if (line.ddl == null) {
      return (
        <Timeline.Item
          dot={<TypeIcon value={line.type} />}
        >
          {<p class={(line.type === 4) ? "xtimelineP" : "normalP"} >
          {line.bti}
          <button class="transButton" ><CloseCircleTwoTone /></button>
        </p>}
        </Timeline.Item>
      )
    } else return (
      <Timeline.Item
        dot={<button class="transButton" ><TypeIcon value={line.type} /></button>}
        label={'-\xa0\xa0\xa0' + this.props.formatBtiTime(line.ddl)}
      >
        {<p class={(line.type === 4) ? "xtimelineP" : "normalP"} >
          {line.bti}
          <button class="transButton" ><CloseCircleTwoTone /></button>
        </p>}
      </Timeline.Item>
    )
  }

  render() {
    var tool = this.props.source.slice();
    return tool.reverse().map((line) => this.renderMybtiitem(line));
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
      type: 0,
      cur_type: 0,
      addingSum:0,
      mode: 'left',
      cached: false,
      reverse: false,
      isModalVisible: false,
      isAddStackModalVisible:false,
      isDeleteModalVisible: false,
      isDeleteAllModalVisible: false,
      btiLineOnChange: null,
      todoSource: [],
      stackSource: [],
      timelineSource: [],
      btilineSource: [],
    };
    this.todoColumns = [
      {
        title: 'todo',
        dataIndex: 'title',
        key: 'title',
        ellipsis: {
          showTitle: false,
        },
        render: (name, { title, done }) => ([
          (!done && <Tooltip placement="topLeft" title={title}>
            {title}
          </Tooltip>),
          (done && <Tooltip placement="topLeft" title={title}>
            {
              <p class="xtimelineP">{title}</p>
            }
          </Tooltip>)
        ]),
      },
      {
        title: '死线',
        dataIndex: 'ddl',
        key: 'ddl',
        width: '70px',
        render: (name, { ddl }) => ([
           this.formatBtiTime(ddl)
        ])
      },
      {
        title: '进展',
        dataIndex: 'done',
        key: 'done',
        width: '50px',
        render: (name, { done, id }) => ([
          done === true && (
            <Button
              shape="circle"
              onClick={() => this.end(id)}
            >
              完
            </Button>
          ),
          done === false && (
            <Button
              shape="circle"
              type="primary"
              onClick={() => this.comple(id)}
            >
              未
            </Button>
          )
        ])
      },
    ];
    this.stackColumns = [
      {
        title: '进展',
        dataIndex: 'cur',
        onFilter: (value, record) => record.cur.indexOf(value) === 0,
        sorter: (a, b) => ((a.cur / a.sum) - (b.cur / b.sum)),
        defaultSortOrder: 'ascend',
        key: 'cur',
        render: (name, { changing, title, cur, sum, id }) => ([
          (cur === 0 && changing === 0) && (
            <ProgressBar animated striped variant="warning" now={100} label={`${title}囤积未使用`} />
          ),
          (cur !== 0 && changing === 0 && sum !== 100 && cur === sum) && (
            <ProgressBar animated striped now={100} label={`${sum}*${title}已用完 超棒！`} />
          ),
          (cur !== 0 && changing === 0 && sum === 100 && cur === sum) && (
            <ProgressBar animated striped now={100} label={`一份${title}已用完 超棒！`} />
          ),
          (cur !== 0 && changing === 0 && sum !== 100 && (cur / sum * 100) > 25 && cur !== sum) && (
            <ProgressBar animated striped variant="info" now={cur / sum * 100} label={`${title} ${cur}/${sum}`} />

          ),
          (cur !== 0 && changing === 0 && sum === 100 && cur > 25 && cur !== sum) && (
            <ProgressBar animated striped variant="info" now={cur} label={`${title} ${cur}%`} />
          ),
          (cur !== 0 && changing === 0 && sum !== 100 && (cur / sum * 100) <= 25 && cur !== sum) && (
            <div>
              <ProgressBar>
                <ProgressBar animated striped variant="info" now={cur / sum * 100} label={`${cur}/${sum}`} key={1} />
                <ProgressBar now={100 - cur / sum * 100} variant="warning" label={`${title}`} key={2} />
              </ProgressBar>
            </div>
          ),
          (cur !== 0 && changing === 0 && sum === 100 && cur <= 25 && cur !== sum) && (
            <div>
              <ProgressBar>
                <ProgressBar animated striped variant="info" now={cur} label={`${cur}%`} key={1} />
                <ProgressBar now={100 - cur} variant="warning" label={`${title}`} key={2} />
              </ProgressBar>
            </div>

          ),
          (changing === 1) && (
            <div>
              <Slider
                min={0}
                max={sum}
                defaultValue={cur}
                onChange={this.onStackChange}
                tooltipVisible />
            </div>

          ),
        ])
      },
      {
        title: '\xa0\xa0\xa0更新',
        dataIndex: 'done',
        key: 'done',
        width: '70px',
        render: (name, { changing, id, cur, sum, pinned }) => ([
          (pinned===true)&&(<button
            class="stackButton"
            style={{backgroundColor: '#d9f7be'}}
            onClick={() => this.pinAndAddS(id)}
          >
            <IconFont style={{ color: "#092b00", fontSize:"12px",position: "relative",top: "-3px"}} type="icon-cangku_kucunxiangqing"></IconFont>
          </button>),
          (pinned!==true)&&(<button
            class="stackButton"
            style={{backgroundColor: '#bae7ff'}}
            onClick={() => this.pinS(id)}
          >
            <IconFont style={{ color: "#fff", fontSize:"12px",position: "relative",top: "-3px" }} type="icon-dingzhu"></IconFont>
          </button>),
          (cur === sum) && (<Button
            type="danger"
            shape="circle"
            size='small'
            style={{margin:"2px"}}
            onClick={() => this.deleteS(id)}
          >
            忘
          </Button>),
          (changing === 0 && cur !== sum) && (<Button
            shape="circle"
            size='small'
            style={{margin:"2px"}}
            onClick={() => this.ready(id, cur)}
          >
            改
          </Button>),
          (changing === 1 && cur !== sum) && (<Button
            shape="circle"
            size='small'
            type="primary"
            style={{margin:"2px"}}
            onClick={() => this.update(id)}
          >
            定
          </Button>)

        ])
      },
    ];
  }



  componentDidMount() {
    this.load();
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentDidUpdate() {
    if (this.formRefT.current !== null) {
        this.formRefT.current.resetFields();
    }
    if (this.formRefS.current !== null) {
      this.formRefS.current.resetFields();
  }
  if (this.formRefB.current !== null) {
    this.formRefB.current.resetFields();
}
}

  formRefT = React.createRef()
  formRefS = React.createRef()
  formRefB = React.createRef()

  comple = (id) => {
    var collection = localStorage.getItem("todo");
    if (collection != null) {
      var data = JSON.parse(collection);
      data[id - 1]["done"] = true;
    } else return;
    this.setState({ todoSource: data });
    localStorage.setItem("todo", JSON.stringify(data));
  }

  end = (id) => {
    var collection = localStorage.getItem("todo");
    if (collection != null) {
      var data = JSON.parse(collection);
      var data_end = [];
      for (var i = 0; i < id - 1; i++) {
        data_end.push(data[i]);
      }
      for (var j = id; j < data.length; j++) {
        data[j]["id"] = data[j]["id"] - 1;
        data_end.push(data[j]);
      }
    } else return;
    this.setState({ todoSource: data_end });
    localStorage.setItem("todo", JSON.stringify(data_end));
  }

  load() {
    var collection = localStorage.getItem("todo");
    if (collection != null) {
      var data = JSON.parse(collection);
    } else var data = [];
    console.log('data:', data);
    this.setState({ todoSource: data });

    var collection1 = localStorage.getItem("stack");
    if (collection1 != null) {
      var data1 = JSON.parse(collection1);
    } else var data1 = [];
    console.log('data1:', data1);
    this.setState({ stackSource: data1 });

    var collection2 = localStorage.getItem("timeline");
    if (collection2 != null) {
      var data2 = JSON.parse(collection2);
    } else var data2 = [];
    console.log('data2:', data2);
    this.setState({ timelineSource: data2 });

    var collection3 = localStorage.getItem("bulletins");
    if (collection3 != null) {
      var data3 = JSON.parse(collection3);
    } else var data3 = [];
    console.log('data3:', data3);
    this.setState({ btilineSource: data3 });
  }

  clear() {
    var collection = localStorage.getItem("todo");
    if (collection != null) {
      var data = [];
    }
    localStorage.setItem("todo", JSON.stringify(data));
    this.setState({ todoSource: data });
  }

  sclear() {
    var collection = localStorage.getItem("timeline");
    let tool = JSON.parse(collection);
    if (tool != null && tool.length > 10) {
      var data = tool.slice(tool.length - 10, tool.length);
    } else {
      var data = JSON.parse(collection);
    }
    localStorage.setItem("timeline", JSON.stringify(data));
    this.setState({ timelineSource: data });
  }

  stackClear() {
    var collection = localStorage.getItem("stack");
    let tool = JSON.parse(collection);
    if (tool != null) {
      var data = [];
    }
    localStorage.setItem("stack", JSON.stringify(data));
    this.setState({ stackSource: data });
  }

  stackRE() {
    var collection = localStorage.getItem("stack");
    let tool = JSON.parse(collection);
    var data = [];
    for(var i=0;i<tool.length;i++) {
      tool[i]["changing"] = 0;
      tool[i]["id"]=i+1;
      tool[i]["pinned"]=false;
      data.push(tool[i]);
    }
    localStorage.setItem("stack", JSON.stringify(data));
    this.setState({ stackSource: data });
  }

  bclear() {
    var collection = localStorage.getItem("bulletins");
    let tool = JSON.parse(collection);
    if (tool != null) {
      var data = [];
    }
    localStorage.setItem("bulletins", JSON.stringify(data));
    this.setState({ btilineSource: data });
  }

  ready = (id, cur) => {
    var collection = localStorage.getItem("stack");
    if (collection != null) {
      var data = JSON.parse(collection);
      data[id - 1]["changing"] = 1;
    } else return;
    this.setState({ stackSource: data, new_cur: cur });
    localStorage.setItem("stack", JSON.stringify(data));
  }

  onStackChange = value => {
    this.setState({ new_cur: value });
  }

  onTypeChange = value => {
    this.setState({ cur_type: value.target.value });
  }

  onModeChange = value => {
    this.setState({ mode: value.target.value });
  }

  handleAddModalOk = value => {
    var id=this.state.stackOnAdding;
    var collection = localStorage.getItem("stack");
    if (collection != null) {
      var data = JSON.parse(collection);
      var data_added = [];
      for (var i = 0; i < id - 1; i++) {
        data_added.push(data[i]);
      }
      var tool=data[ id - 1];
      tool["sum"]=tool["sum"]+this.state.addingSum;
      data_added.push(tool);
      for (var j = id; j < data.length; j++) {
        data_added.push(data[j]);
      }
    } else return;
    this.setState({ stackSource: data_added ,isAddStackModalVisible: false,addingSum:0});
    localStorage.setItem("stack", JSON.stringify(data_added));
  }

  handleAddModalCancel = value => {
    this.setState({ isAddStackModalVisible: false,addingSum:0 });
  }

  handleAddTypeClick= i => {
    var tool=Number(i.target.innerHTML);
    this.setState({ addingSum: tool });
  }

  handleModalOk = value => {
    var tool = this.state.btilineSource;
    var id = this.state.btiLineOnChange;
    var index = tool.findIndex((line) => line.id === id);
    tool[index].type = this.state.cur_type;
    this.setState({ btilineSource: tool, isModalVisible: false });
    localStorage.setItem("bulletins", JSON.stringify(tool));
  }

  handleModalCancel = value => {
    this.setState({ isModalVisible: false });
  }

  handleDeleteModalOk = value => {
    var tool = this.state.btilineSource;
    var id = this.state.btiLineOnChange;
    var data_deleted = [];
    for (var i = 0; i < id - 1; i++) {
      data_deleted.push(tool[i]);
    }
    for (var j = id; j < tool.length; j++) {
      tool[j]["id"] = tool[j]["id"] - 1;
      data_deleted.push(tool[j]);
    }
    this.setState({ btilineSource: data_deleted, isDeleteModalVisible: false });
    localStorage.setItem("bulletins", JSON.stringify(data_deleted));
  }

  handleDeleteAllModalOk = value => {
    this.bclear();
    this.setState({ isDeleteAllModalVisible: false });
  }

  handleDeleteModalCancel = value => {
    this.setState({ isDeleteModalVisible: false });
  }

  handleDeleteAllModalCancel = value => {
    this.setState({ isDeleteAllModalVisible: false });
  }

  update = (id) => {
    var collection = localStorage.getItem("stack");
    var collection2 = localStorage.getItem("timeline");
    if (collection != null) {
      var data = JSON.parse(collection);
      var log1 = this.state.new_cur - data[id - 1]["cur"];
      data[id - 1]["cur"] = this.state.new_cur;
      data[id - 1]["changing"] = 0;
    } else return;
    if (data[id - 1]["cur"] === data[id - 1]["sum"]) {
      var line = moment().format("MM-DD").toString() + " 超棒 " + data[id - 1]["title"] + "全部用完";
      var data2 = JSON.parse(collection2);
      data2.push(line);
      localStorage.setItem("timeline", JSON.stringify(data2));
      this.setState({ timelineSource: data2 });
    } else if (log1 !== 0) {
      if (data[id - 1]["sum"] === 100) {
        var line = moment().format("MM-DD").toString() + " 消耗 " + log1 + "%" + data[id - 1]["title"];
      } else {
        var line = moment().format("MM-DD").toString() + " 消耗 " + log1 + "/" + data[id - 1]["sum"] + data[id - 1]["title"];
      }
      var data2 = JSON.parse(collection2);
      data2.push(line);
      localStorage.setItem("timeline", JSON.stringify(data2));
      this.setState({ timelineSource: data2 });
    }
    this.setState({ stackSource: data });
    localStorage.setItem("stack", JSON.stringify(data));
  }

  deleteS = (id) => {
    var collection = localStorage.getItem("stack");
    if (collection != null) {
      var data = JSON.parse(collection);
      var data_deleted = [];
      for (var i = 0; i < id - 1; i++) {
        data_deleted.push(data[i]);
      }
      for (var j = id; j < data.length; j++) {
        data[j]["id"] = data[j]["id"] - 1;
        data_deleted.push(data[j]);
      }
    } else return;
    this.setState({ stackSource: data_deleted });
    localStorage.setItem("stack", JSON.stringify(data_deleted));
  }

  pinS = (id) => {
    var collection = localStorage.getItem("stack");
    if (collection != null) {
      var data = JSON.parse(collection);
      var data_pinned = [];
      for (var i = 0; i < id - 1; i++) {
        data_pinned.push(data[i]);
      }
      //对第ID个做PIN处理
      var tool=data[id-1];
      tool["pinned"]=true;
      data_pinned.push(tool);
      for (var j = id; j < data.length; j++) {
        data_pinned.push(data[j]);
      }
    } else return;
    this.setState({ stackSource: data_pinned });
    localStorage.setItem("stack", JSON.stringify(data_pinned));
  }

  pinAndAddS = (id) => {
    this.setState({isAddStackModalVisible:true, stackOnAdding: id});
  }
  

  changeType = (value) => {
    this.setState({ isModalVisible: true, btiLineOnChange: value.id, cur_type: value.type });
  }

  deleteBti = (value) => {
    this.setState({ isDeleteModalVisible: true, btiLineOnChange: value.id });
  }

  deleteAllBti = () => {
    this.setState({ isDeleteAllModalVisible: true});
  }

  formatBtiTime = (value) => {
    if (value === undefined || !moment(value).isValid()||!value) {
      return null;
    } else if (moment(value).subtract(1, 'days').format("YYYY MM-DD").toString() === moment().format("YYYY MM-DD").toString()) {
      return '明天 ' + moment(value).format("HH:mm").toString();
    } else if (moment(value).format("YYYY MM-DD").toString() === moment().format("YYYY MM-DD").toString()) {
      return '今天 ' + moment(value).format("HH:mm").toString();
    } else if (moment(value).format("YYYY MM-DD").toString() < moment().format("YYYY MM-DD").toString()) {
      return '过去 ' + moment(value).format("MM-DD HH:mm").toString();
    } else {
      return moment(value).format("MM-DD HH:mm").toString();
    }
  }

  onFinish = (values) => {
    if (values.sum !== undefined) {//-----sum-----用于tab2库存-----------
      var collection = localStorage.getItem("stack");
      var collection2 = localStorage.getItem("timeline");
      if (collection != null) {
        var data = JSON.parse(collection);
      } else var data = [];
      if (collection2 != null) {
        var data2 = JSON.parse(collection2);
      } else var data2 = [];
      var seq = Object.keys(data).length;
      var todo = { "id": seq + 1, "title": values.sdetail, "sum": parseInt(values.sum), "cur": 0, "changing": 0 };
      data.push(todo);
      var line = moment().format("MM-DD").toString() + " 加入 " + values.sdetail;
      data2.push(line);
      localStorage.setItem("stack", JSON.stringify(data));
      localStorage.setItem("timeline", JSON.stringify(data2));
      this.setState({ stackSource: data, timelineSource: data2 });
      this.onResetT();
    } else if (values.bulletin === undefined) {//-----bti-----用于tab1时间-----------
      var collection = localStorage.getItem("todo");
      if (collection != null) {
        var data = JSON.parse(collection);
      } else var data = [];
      var seq = Object.keys(data).length;
      var todo = { "id": seq + 1, "title": values.detail, "done": false, "ddl": values.time };
      data.push(todo);
      localStorage.setItem("todo", JSON.stringify(data));
      this.setState({ todoSource: data });
      this.onResetS();
    } else {//-----bti-----用于tab3子弹-----------
      var collection3 = localStorage.getItem("bulletins");
      if (collection3 != null) {
        var data3 = JSON.parse(collection3);
      } else var data3 = [];
      var seq3 = Object.keys(data3).length;
      var bti = { "id": seq3 + 1, "bti": values.bulletin, "type": 0, "ddl": values.btiTime };
      data3.push(bti);
      localStorage.setItem("bulletins", JSON.stringify(data3));
      this.setState({ btilineSource: data3 });
      this.onResetB();
    }
  }

  onFinishFailed(errorInfo) {
    console.log('Failed:', errorInfo);
  };

  onResetT = () => {
    this.formRefT.current.resetFields();
  };
  onResetS = () => {
    this.formRefS.current.resetFields();
  };
  onResetB = () => {
    this.formRefB.current.resetFields();
  };

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
        if (window.Notification && Notification.permission !== "denied") {
          if (Notification.permission == "granted") {
            Notification.requestPermission(function (status) {
              //var n = new Notification('通知标题', { body: '这里是通知内容！' }); 
              var n = new Notification('时间到！', { body: old_mins + '分' + old_ss + '秒计时结束' });
            });
          } else {
            Toast.fail("Toast！该浏览器不允许通知!" + old_mins + "分" + old_ss + "秒计时时间到", 2);
            message.error("Error！该浏览器不允许通知!" + old_mins + "分" + old_ss + "秒计时时间到");
          }
        } else {
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
    }
  }

  start = () => {
    const sum = this.state.timeSum;
    if (sum > 0 && this.state.counting == false) {
      var start = moment().format();
      var end = moment().add(sum, 'seconds')//找到的好函数！ 
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
        {/* <WingBlank size="lg"> */}
          <Tabs tabs={tabs2}
            initialPage={2}
            renderTab={tab => <span>{tab.title}</span>}
          >
            <div style={{ display: 'block', alignItems: 'center', justifyContent: 'center', height: '100%', backgroundColor: '#fff' }}>
              <Card>
                <Card.Header
                  title={<span >连肝计时器</span>}
                  thumb={
                    <svg t="1621233122743" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2395" width="30" height="30"><path d="M472.32 562.3808m-393.4208 0a393.4208 393.4208 0 1 0 786.8416 0 393.4208 393.4208 0 1 0-786.8416 0Z" fill="#80B7F9" p-id="2396"></path><path d="M953.9072 499.8144c-18.6368-226.9696-199.6288-407.9616-426.5984-426.5984-20.9408-1.7408-38.7584 15.104-38.7072 36.096 0.2048 125.184 1.4336 256.1024 1.5872 393.1136 0.0512 19.9168 16.1792 36.096 36.096 36.096h391.5776c20.992 0 37.7344-17.8176 36.0448-38.7072z" fill="#80B7F9" p-id="2397"></path><path d="M488.7552 169.3696c0.4096 106.8544 1.28 217.7536 1.4336 333.056 0.0512 19.9168 16.1792 36.096 36.096 36.096h338.6368c-11.9808-200.7552-174.4384-360.8576-376.1664-369.152z" fill="#3E8BF8" p-id="2398"></path></svg>
                  }
                />
                <Card.Body>
                  <Flex justify="center">
                    {
                      secList.map((sec) =>
                        <Flex.Item>
                          <SecTimer
                            time={sec}
                            onClick={i => this.handleClick(i)}
                          />
                        </Flex.Item>
                      )
                    }
                  </Flex>
                  <WhiteSpace />
                  <Flex justify="center">
                  {
                      minPlusList.map((min) =>
                        <Flex.Item>
                          <MinTimer
                            time={min}
                            onClick={i => this.handleClick(i)}
                          />
                        </Flex.Item>
                      )
                    }
                  </Flex>
                  <Flex justify="center" >
                  {
                      minMinusList.map((min) =>
                        <Flex.Item>
                          <MinTimer
                            time={min}
                            onClick={i => this.handleClick(i)}
                          />
                        </Flex.Item>
                      )
                    }
                  </Flex>

                  <WhiteSpace />
                  {
                    this.state.counting === true && (
                      <div>
                        <Row>
                          <Col span={16}>
                            <Button disabled block>倒计时{this.state.mins}'{this.state.ss}''</Button>
                          </Col>
                          <Col span={8}>
                            <Button block onClick={() => this.stop()}>停止计时</Button>
                          </Col>
                        </Row>
                      </div>
                    )
                  }
                  {
                    this.state.counting === false && this.state.cached === false && (
                      <div>
                        <Row>
                          <Col span={16}>
                            <Button
                              onClick={() => this.start()}
                              type="primary"
                              block
                            >
                              {this.state.mins}'{this.state.ss}''开始计时
                            </Button>
                          </Col>
                          <Col span={8}>
                            <Button
                              onClick={() => this.reset()}
                              block
                            >
                              重置
                            </Button>
                          </Col>
                        </Row>
                      </div>
                    )
                  }
                  {
                    this.state.counting === false && this.state.cached === true && (
                      <div>
                        <Row>
                          <Col span={16}>
                            <Button block onClick={() => this.resume()} type="primary">激活上次计时时长 {this.state.old_mins}'{this.state.old_ss}''</Button>
                          </Col>
                          <Col span={8}>
                            <Button block onClick={() => this.reset()}>重置</Button>
                          </Col>
                        </Row>
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
                    ref={this.formRefT}
                    name="time"
                  >

                    <Row>
                      <Col span={6}>
                        <Form.Item
                          name="time"
                          placeholder="添加ToDo"
                        >
                          <DatePicker
                            showTime={{ format: 'HH:mm' }}
                            format="MM-DD HH:mm"
                          />
                        </Form.Item>
                      </Col>
                      <Col span={12}>
                        <Form.Item
                          name="detail"
                          placeholder="添加ToDo"
                          rules={[
                            {
                              required: true,
                              message: 'Please input your todo!',
                            },
                          ]}
                        >
                          <Input block />
                        </Form.Item>
                      </Col>
                      <Col span={6}>
                        <Form.Item>
                          <Button type="primary" htmlType="submit" block>
                            添加
                          </Button>
                        </Form.Item>
                      </Col>
                    </Row>

                  </Form>

                  <Flex justify="center">
                    <Table dataSource={this.state.todoSource} columns={this.todoColumns} />
                  </Flex>

                  <Button
                    onClick={() => this.clear()}
                    type="primary"
                  >
                    清空缓存
                  </Button>
                </Card.Body>

              </Card>
            </div>
            <div style={{ display: 'block', alignItems: 'center', justifyContent: 'center', height: '100%', backgroundColor: '#fff' }} >
              <Card>
                <Card.Body>

                  <Form
                    onFinish={this.onFinish}
                    onFinishFailed={this.onFinishFailed}
                    ref={this.formRefS}
                    name="stack"
                  >

                    <Row>
                      <Col span={4}>
                        <Form.Item
                          name="sum"
                          placeholder="总量"
                          rules={[
                            {
                              required: true,
                              message: '请输入物体描述性总数!',
                            },
                          ]}
                        >
                          <Input block />
                        </Form.Item>
                      </Col>
                      <Col span={14}>
                        <Form.Item
                          name="sdetail"
                          placeholder="待入库"
                          rules={[
                            {
                              required: true,
                              message: '请输入描述!',
                            },
                          ]}
                        >
                          <Input block />
                        </Form.Item>
                      </Col>
                      <Col span={6}>
                        <Form.Item>
                          <Button type="primary" htmlType="submit" block>
                            添加
                          </Button>
                        </Form.Item>
                      </Col>
                    </Row>


                  </Form>

                  <Flex justify="center"  >
                    <Table dataSource={this.state.stackSource} columns={this.stackColumns} style={{ width: '100%' }} />
                  </Flex>

                  <Modal
                    title={"本次添加库存："+this.state.addingSum}
                    visible={this.state.isAddStackModalVisible}
                    onOk={this.handleAddModalOk}
                    onCancel={this.handleAddModalCancel}
                  >
                    {
                      addTypeList.map((i) =>
                        <button onClick={i => this.handleAddTypeClick(i)}>{i}</button>
                      )
                    }
                  </Modal>

                  <Timeline reverse={this.state.reverse}>
                    <MyTimeLine
                      source={this.state.timelineSource}
                    />
                  </Timeline>

                  <Button
                    onClick={() => this.sclear()}
                    type="primary"
                  >
                    精简缓存
                  </Button>

                  <Button
                    onClick={() => this.stackClear()}
                    danger
                  >
                    清空缓存
                  </Button>

                  <Button
                    onClick={() => this.stackRE()}
                    type="primary"
                  >
                    问题修复
                  </Button>
                  <p>问题修复：修复pin功能导致的“部分操作对不上号”，“无法退出修改状态”等问题。
                    同时会将所有货物修改回“非入库状态”。这个耻辱的，不优雅的回档按钮，将在两个版本之后删除。</p>

                </Card.Body>

              </Card>
            </div>

            <div style={{ display: 'block', alignItems: 'center', justifyContent: 'center', height: '100%', backgroundColor: '#fff' }}>
              <Card>
                <Card.Body>
                  {
                    (this.state.mode !== "null") && (<Timeline
                      mode={this.state.mode}
                    >
                      {this.state.btilineSource.map((line) =>
                      (<Timeline.Item
                        dot={<button class="transButton" onClick={() => this.changeType(line)} ><TypeIcon value={line.type} /></button>}
                        label={this.formatBtiTime(line.ddl)}
                      >
                        {<p class={(line.type === 4) ? "xtimelineP" : "normalP"} >
                          {line.bti}
                          <button class="transButton" onClick={() => this.deleteBti(line)} ><CloseCircleTwoTone /></button>
                        </p>}
                        { }
                      </Timeline.Item>)
                      )}
                    </Timeline>)
                  }
                  {//------------------靠边模式，无法修改和删除-----------------------
                    (this.state.mode === "null") && (
                      <Timeline
                      >
                        <MyBtiLine
                          source={this.state.btilineSource}
                          formatBtiTime={(value) => this.formatBtiTime(value)}
                        />
                      </Timeline>
                    )
                  }

                  <Modal title="修改事件种类" visible={this.state.isModalVisible} onOk={this.handleModalOk} onCancel={this.handleModalCancel}>
                    <Radio.Group onChange={this.onTypeChange} value={this.state.cur_type}>
                      {types.map((type) => <Radio value={type.NO} name={type.NO}>{type.title + ' '}<TypeIcon value={type.NO} /></Radio>)}
                    </Radio.Group>
                  </Modal>
                  <Modal
                    title="确定删除吗？"
                    visible={this.state.isDeleteModalVisible}
                    onOk={this.handleDeleteModalOk}
                    onCancel={this.handleDeleteModalCancel}>
                  </Modal>
                  <Modal
                    title="确定删除全部子弹便签吗？"
                    visible={this.state.isDeleteAllModalVisible}
                    onOk={this.handleDeleteAllModalOk}
                    onCancel={this.handleDeleteAllModalCancel}>
                  </Modal>
                  <WhiteSpace />
                  <Form
                    onFinish={this.onFinish}
                    onFinishFailed={this.onFinishFailed}
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    ref={this.formRefB}
                    name="bullet"
                  >
                    <Form.Item
                      name="bulletin"
                      placeholder="添加子弹事件"
                      rules={[
                        {
                          required: true,
                          message: '内容描述不可为空',
                        },
                      ]}
                    >
                      <Input.TextArea rows={4} />
                    </Form.Item>
                    <Row>
                      <Col span={16}>
                        <Form.Item
                          name="btiTime"
                          placeholder="子弹事件失效时间"
                        >
                          <DatePicker
                            showTime={{ format: 'MM-DD HH:mm' }}
                            format="MM-DD HH:mm"
                          />
                        </Form.Item>
                      </Col>

                      <Col span={8}>
                        <Form.Item>
                          <Button type="primary" htmlType="submit">
                            + 子弹便签
                          </Button>
                        </Form.Item>
                      </Col>
                    </Row>

                  </Form>
                  <WhiteSpace />
                  <Radio.Group
                    onChange={this.onModeChange}
                    value={this.state.mode}
                    style={{
                      marginBottom: 20,
                    }}
                  >
                    <Radio value="left">时间在左</Radio>
                    <Radio value="right">时间在右</Radio>
                    <Radio value="alternate">轮流</Radio>
                    <Radio value="null">靠边（无法修改和删除）</Radio>
                  </Radio.Group>
                  <Button
                    danger
                    onClick={() => this.deleteAllBti()}
                    type="primary"
                  >
                    慎 删除全部子弹便签
                  </Button>

                </Card.Body>
              </Card>
            </div>
          </Tabs>
        {/* </WingBlank> */}
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