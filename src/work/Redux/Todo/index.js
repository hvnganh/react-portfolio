import { Row, Tag, Checkbox, Button } from 'antd';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import todosSlice from '../TodoList/todosSlice';

const priorityColorMapping = {
    High: 'red',
    Medium: 'blue',
    Low: 'gray',
};

export default function Todo({ name, priority, completed, id }) {
    const [checked, setChecked] = useState(completed);
    const dispatch = useDispatch();

    const toggleCheckbox = () => {
        dispatch(todosSlice.actions.toggleTodoStatus(id));
        setChecked(!checked);
    };

    return (
        <Row
            justify="space-between"
            style={{
                marginBottom: 3,
                ...(checked ? { opacity: 0.5, textDecoration: 'line-through' } : {}),
            }}
        >
            <Checkbox checked={checked} onChange={toggleCheckbox}>
                {name}
            </Checkbox>
            <div>
                <Tag color={priorityColorMapping[priority]} style={{ marginRight: '5px' }}>
                    {priority}
                </Tag>
                <Button onClick={() => dispatch(todosSlice.actions.deleteTodos(id))} size="small" danger>
                    X
                </Button>
            </div>
        </Row>
    );
}
