import React from 'react';
import { List, Form, Input, Typography, Button, Flex } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import * as styles from './boardStyles';
<DownOutlined />;
const { Text } = Typography;

const tasks = [
  { title: '' },
  { title: 'Тестовое задание', status: 'in-process' },
  { title: 'Прекрасный код', status: 'done' },
  { title: 'Покрытие тестами', status: 'in-process' },
];

const Board: React.FC = () => {
  return (
    <>
      <List
        style={styles.listStyles}
        bordered
        dataSource={tasks}
        renderItem={(item, index) => (
          <List.Item>
            {index === 0 ? (
              <>
                <Button
                  shape='circle'
                  style={{
                    border: 'none',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    boxShadow: 'none',
                  }}
                >
                  {/* <CheckOutlined /> */}
                  <DownOutlined
                    style={{
                      marginTop: '4px',
                      fontSize: '18px',
                      color: '#dedede',
                    }}
                  />
                </Button>
                <Form name={`taskForm`} layout='inline'>
                  <Form.Item name='task-field'>
                    {' '}
                    <Input
                      style={{
                        ...styles.inputStyles,
                      }}
                      placeholder='What needs to be done?'
                    />
                  </Form.Item>
                </Form>
              </>
            ) : (
              <Flex justify='flex-start' align='flex-start'>
                <Button shape='circle' />
                <Text style={{ ...styles.boardTextStyles, textAlign: 'left' }}>
                  {item.title}
                </Text>
              </Flex>
            )}
          </List.Item>
        )}
      />
    </>
  );
};

export default Board;
