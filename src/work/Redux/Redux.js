import { Typography, Divider } from 'antd';
import TodoList from './TodoList';
import Filters from './Filters';
import './Redux.css';

const { Title } = Typography;

function Redux() {
    return (
        <div
            style={{
                width: 500,
                margin: '0 auto',
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: 'white',
                padding: 20,
                borderRadius: 5,
                height: '90vh',
            }}
        >
            <Title style={{ textAlign: 'center' }}>DAILY TASKS</Title>
            <Filters />
            <Divider />
            <TodoList />
        </div>
    );
}

export default Redux;
