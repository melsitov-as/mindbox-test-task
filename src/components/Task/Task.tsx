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

  const onChangeDone = () => {
    const newDone = !done;
    setDone(newDone);
    onToggleDone(item.id, newDone);
  };

  return (
    <Flex justify='flex-start' align='flex-start'>
      <Button
        shape='circle'
        onClick={onChangeDone}
        style={{ border: `${done ? '1px solid cadetblue' : ''}` }}
        icon={
          done && <CheckOutlined style={{ color: `${done ? 'green' : ''}` }} />
        }
      />
      <Text
        style={{
          ...styles.boardTextStyles,
          textAlign: 'left',
          textDecoration: `${done ? 'line-through' : 'none'}`,
          color: `${done ? '#dedede' : 'black'}`,
        }}
      >
        {item.title}
      </Text>
    </Flex>
  );
};

export default Task;
