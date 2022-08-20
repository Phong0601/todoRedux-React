import { Col, Row, Input, Button, Select, Tag, Form } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../redux/action";
import { v4 as v4uuid } from "uuid";
import Todo from "../Todo";
import { useState } from "react";
import { todoRemainingSelector } from "../../redux/selector";
import todoListReducer from "./todoListSlide";

export default function TodoList() {
  const dispatch = useDispatch();
  const todoList = useSelector(todoRemainingSelector);
  // const filterSearch = useSelector(selectorFilterSearch);

  const [todoName, setTodoName] = useState("");
  const [priority, setPriority] = useState("Medium");

  const handleAddBtn = () => {
    dispatch(
      todoListReducer.actions.addTodo({
        id: v4uuid(),
        name: todoName,
        priority: priority,
        completed: false,
      })
    );
    setTodoName("");
    setPriority("Medium");
  };
  const handleChange = (e) => {
    setTodoName(e.target.value);
  };
  const handlePriority = (value) => {
    setPriority(value);
  };
  return (
    <Row style={{ height: "calc(100% - 40px)" }}>
      <Col span={24} style={{ height: "calc(100% - 40px)", overflowY: "auto" }}>
        {todoList.map((item) => {
          return (
            <Todo
              key={item.id}
              id={item.id}
              name={item.name}
              prioriry={item.priority}
              completed={item.completed}
            />
          );
        })}
      </Col>
      <Col span={24}>
        <Form onFinish={handleAddBtn}>
          <Input.Group style={{ display: "flex" }} compact>
            <Input value={todoName} onChange={handleChange} />
            <Select
              value={priority}
              onChange={handlePriority}
              defaultValue="Medium"
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

            <Button htmlType="submit" type="primary">
              Add
            </Button>
          </Input.Group>
        </Form>
      </Col>
    </Row>
  );
}
