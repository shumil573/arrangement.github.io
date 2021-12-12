import React from 'react';
import {
    ClockCircleOutlined, MinusOutlined, ExclamationOutlined, ArrowRightOutlined, ArrowLeftOutlined,
    CloseOutlined, EyeOutlined, StarOutlined,BulbOutlined
} from '@ant-design/icons';
import { createFromIconfontCN } from '@ant-design/icons';

const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_2928730_c0q7n33ntiq.js',
});

function TypeIcon(props) {
    if (props.value === 0) {
        return <IconFont type="icon-yuanquan1" style={{ color: "#1890ff" }}/>;
    } else if (props.value === 1) {
        return <IconFont type="icon-yuandianzhong" style={{ color: "#1890ff" }}/>
    } else if (props.value === 2) {
        return <StarOutlined className="timeline-clock-icon" style={{ color: "#eb2f96" }} />
    } else if (props.value === 3) {
        return <EyeOutlined className="timeline-clock-icon" style={{ color: "#faad14" }} />
    } else if (props.value === 4) {
        return <CloseOutlined className="timeline-clock-icon" style={{ color: "#1890ff" }}/>
    } else if (props.value === 5) {
        return <ArrowRightOutlined className="timeline-clock-icon" style={{ color: "#1890ff" }}/>
    } else if (props.value === 6) {
        return <ArrowLeftOutlined className="timeline-clock-icon" style={{ color: "#1890ff" }}/>
    } else if (props.value === 7) {
        return <IconFont type="icon-gantanhao" style={{ color: "#fff607" }}/>;
    } else if (props.value === 8) {
        return <ClockCircleOutlined className="timeline-clock-icon" style={{ color: "#dc3545" }}/>
    } else if (props.value === 9) {
        return <BulbOutlined className="timeline-clock-icon" style={{ color: "#ffc107" }}/>
    } else if (props.value === 10) {
        return <MinusOutlined className="timeline-clock-icon" style={{ color: "#1890ff" }}/>
    } else if (props.value === 11) {
        return <IconFont type="icon-youhuiquan" style={{ color: "#6c757d" }}/>
    } else {
        return <IconFont type="icon-yuanquan1" style={{ color: "#1890ff" }}/>;
    }

}

export default TypeIcon;