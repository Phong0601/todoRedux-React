import { Row, Tag, Checkbox, Button } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { checkedBox } from "../../redux/action";
import todoListReducer from "../TodoList/todoListSlide";

const priorityColorMapping = {
  High: "red",
  Medium: "blue",
  Low: "gray",
};

export default function Todo({ id, name, prioriry, completed }) {
  const [checked, setChecked] = useState(completed);
  const dispatch = useDispatch();
  const toggleCheckbox = () => {
    setChecked(!checked);
    dispatch(todoListReducer.actions.checkedBox(id));
  };
  const handleDelete=(id)=>{
      dispatch(todoListReducer.actions.delete(id))
  } 
  return (
    <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
    <Row
      justify="space-between"
      align="top"
      style={{
        width:'70%',
        marginBottom: 3,
        ...(checked ? { opacity: 0.5, textDecoration: "line-through" } : {}),
      }}
    >
      <Checkbox checked={checked} onChange={toggleCheckbox}>
        {name}
      </Checkbox>

      <Tag color={priorityColorMapping[prioriry]} >
        {prioriry}
      </Tag>
    </Row>
    <Button type="primary" danger  onClick={()=>{handleDelete(id)}} style={{margin:'5px 0',height:'30px'}}>Delete</Button>
    </div>
  );
}
