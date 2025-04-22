import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { List, Form, Input, Button, Flex } from 'antd';
import { DownOutlined } from '@ant-design/icons';

import * as styles from '../componentsStyles';
import Task from '../Task/Task';

type HandleType = (id: string) => void;

export interface ITask {
  id?: string;
  title?: string;
  done?: boolean;
}

interface BoardProps {
  tasks: ITask[];
}

const Board: React.FC<BoardProps> = ({ tasks: initialTasks }) => {
  const [listOpened, setListOpened] = useState(true);
  const [defaultTasks, setDefaultTasks] = useState<ITask[]>(initialTasks);
  const [filterType, setFilterType] = useState('all');
  const [filteredTasks, setFilteredTasks] = useState<ITask[]>(defaultTasks);
  const [inputValue, setInputValue] = useState('');
  const [itemsLeft, setItemsLeft] = useState(
    defaultTasks.filter((task: ITask) => !task.done).length
  );

  const handleListOpened = () => setListOpened(!listOpened);

  const handleFilterType: HandleType = (type) => {
    setFilterType(type);
  };

  const filterTasks = (filterType: string) => {
    switch (filterType) {
      case 'all':
        setFilteredTasks(defaultTasks);
        break;
      case 'active':
        setFilteredTasks(defaultTasks.filter((task: ITask) => !task.done));
        break;
      case 'completed':
        setFilteredTasks(defaultTasks.filter((task: ITask) => task.done));
        break;
      default:
        console.warn(`Неизвестный тип фильтра: ${filterType}`);
        break;
    }
  };

  const onClearCompleted = () => {
    setDefaultTasks(defaultTasks.filter((task: ITask) => !task.done));
  };

  const updateTaskStatus = (taskId: string | undefined, newDone: boolean) => {
    const updatedTasks = defaultTasks.map((task) =>
      task.id === taskId ? { ...task, done: newDone } : task
    );
    setDefaultTasks(updatedTasks);
  };

  const onAddTask = () => {
    if (inputValue.trim()) {
      const newTask: ITask = {
        id: nanoid(),
        title: inputValue.trim(),
        done: false,
      };
      setDefaultTasks([...defaultTasks, newTask]);
      setInputValue('');
    }
  };

  useEffect(() => {
    filterTasks(filterType);
    setItemsLeft(defaultTasks.filter((task: ITask) => !task.done).length);
  }, [filterType, defaultTasks]);
  return (
    <>
      <List
        bordered
        style={{ background: '#ffffff' }}
        header={
          <Flex justify='flex-start' align='center'>
            <Button
              shape='circle'
              icon={<DownOutlined />}
              style={{
                border: 'none',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                boxShadow: 'none',
                transform: `${listOpened ? 'none' : 'rotate(180deg)'}`,
              }}
              onClick={() => handleListOpened()}
            ></Button>
            <Form name={`taskForm`} layout='inline' onFinish={onAddTask}>
              <Form.Item>
                {' '}
                <Input
                  style={{
                    ...styles.inputStyles,
                  }}
                  placeholder='What needs to be done?'
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
              </Form.Item>
            </Form>
          </Flex>
        }
        footer={
          <Flex
            align={'center'}
            justify={'flex-start'}
            style={{ width: '100%' }}
          >
            <span>
              {itemsLeft} {`${itemsLeft === 1 ? 'item' : 'items'}`} left
            </span>
            <Button
              id='all'
              type={`${filterType === 'all' ? 'default' : 'text'}`}
              style={{ marginLeft: '15px' }}
              onClick={() => handleFilterType('all')}
            >
              All
            </Button>
            <Button
              id='active'
              type={`${filterType === 'active' ? 'default' : 'text'}`}
              style={{ marginLeft: '15px' }}
              onClick={() => handleFilterType('active')}
            >
              Active
            </Button>
            <Button
              id='completed'
              type={`${filterType === 'completed' ? 'default' : 'text'}`}
              style={{ marginLeft: '15px' }}
              onClick={() => handleFilterType('completed')}
            >
              Completed
            </Button>
            <Button
              id='clear-completed'
              type={'text'}
              style={{ marginLeft: 'auto' }}
              onClick={() => onClearCompleted()}
            >
              Clear completed
            </Button>
          </Flex>
        }
        dataSource={filteredTasks}
        renderItem={(item) =>
          listOpened && (
            <List.Item>
              <Task key={item.id} item={item} onToggleDone={updateTaskStatus} />
            </List.Item>
          )
        }
      ></List>
    </>
  );
};

export default Board;
