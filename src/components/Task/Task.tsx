import React, { useState } from 'react';
import { Flex, Button, Typography } from 'antd';
import * as styles from '../componentsStyles';
import { CheckOutlined } from '@ant-design/icons';
import { ITask } from '../Board/Board';

const { Text } = Typography;

interface TaskProps {
  item: ITask;
  onToggleDone: (id: string | undefined, done: boolean) => void;
}

const Task: React.FC<TaskProps> = ({ item, onToggleDone }) => {
  const [done, setDone] = useState<boolean | undefined>(item.done);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  const onChangeDone = () => {
    const newDone = !done;
    setDone(newDone);
    onToggleDone(item.id, newDone);
  };

  return (
    <Flex data-testid={item.title} justify='flex-start' align='flex-start'>
      <Button
        shape='circle'
        onClick={onChangeDone}
        style={{
          border: `${done ? '1px solid cadetblue' : ''}`,
          color: `${isHovered ? '#4096ff' : ''}`,
          borderColor: `${isHovered ? '#4096ff' : ''}`,
          background: '#ffffff',
        }}
        data-testid={'circle'}
        icon={
          done && (
            <CheckOutlined
              style={{ color: `${done ? 'green' : ''}` }}
              data-testid={'check-outlined'}
            />
          )
        }
      />
      <Text
        style={{
          ...styles.boardTextStyles,
          textAlign: 'left',
          textDecoration: `${done ? 'line-through' : 'none'}`,
          color: `${done ? '#dedede' : 'black'}`,
          opacity: `${isHovered ? '0.6' : '1'}`,
          cursor: `${isHovered ? 'pointer' : 'default'}`,
        }}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        onClick={onChangeDone}
      >
        {item.title}
      </Text>
    </Flex>
  );
};

export default Task;
