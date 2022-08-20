import { Col, Row, Input, Typography, Radio, Select, Tag } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
// import { filterTodo, filterStatus, filterPriority } from "../../redux/action";
import filterReducer from "./filterSlide";

const { Search } = Input;

export default function Filters() {
  const [searchText, setSearchText] = useState("");
  const [searchStatus, setFilterStatus] = useState("All");
  const [searchPriority, setFilterPriority] = useState([]);
  const dispatch = useDispatch();
  const handleFilterSearch = (e) => {
    setSearchText(e.target.value);
    dispatch(filterReducer.actions.filterSeach(e.target.value));
  };
  const handleStatus = (e) => {
    setFilterStatus(e.target.value);
    dispatch(filterReducer.actions.filterStatus(e.target.value));
  };
  const handlePriority=(value)=>{
    setFilterPriority(value);
    dispatch(filterReducer.actions.filterPriority(value))
  }
  return (
    <Row justify="center">
      <Col span={24}>
        <Typography.Paragraph
          style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
        >
          Search
        </Typography.Paragraph>
        <Search
          value={searchText}
          onChange={handleFilterSearch}
          placeholder="input search text"
        />
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
        >
          Filter By Status
        </Typography.Paragraph>
        <Radio.Group value={searchStatus} onChange={handleStatus}>
          <Radio value="All">All</Radio>
          <Radio value="Completed">Completed</Radio>
          <Radio value="Todo">To do</Radio>
        </Radio.Group>
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
        >
          Filter By Priority
        </Typography.Paragraph>
        <Select
          value={searchPriority}
          onChange={handlePriority}
          mode="multiple"
          allowClear
          placeholder="Please select"
          style={{ width: "100%" }}
        >
          <Select.Option value="High" label="High">
            <Tag color="red">High</Tag>
          </Select.Option>
          <Select.Option value="Medium" label="Medium">
            <Tag color="blue">Medium</Tag>
          </Select.Option>
          <Select.Option value="Low" label="Low">
            <Tag color="gray">Low</Tag>
          </Select.Option>
        </Select>
      </Col>
    </Row>
  );
}
