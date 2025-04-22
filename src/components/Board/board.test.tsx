import { ITask } from '../../interfaces/interfaces';
import '@testing-library/jest-dom';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Board from './Board';
import { nanoid } from 'nanoid';
import { List } from 'antd';

const MockTask = jest.fn(({ item }) => (
  <div data-testid={item.title}>{item.title}</div>
));
import Task from '../Task/Task';

const initialTasks = [
  { id: nanoid(), title: 'Task-1', done: false },
  { id: nanoid(), title: 'Task-2', done: true },
  { id: nanoid(), title: 'Task-3', done: false },
];

jest.mock('../Task/Task', () => MockTask);

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

describe('AntD List Component with renderItem', () => {
  it('should render List.Item for each item in dataSource when listOpened is true', () => {
    render(
      <List
        dataSource={initialTasks}
        renderItem={(item) => (
          <List.Item>
            <Task key={item.id} item={item} onToggleDone={() => {}} />
          </List.Item>
        )}
      />
    );

    // Проверяем, что отрисовано правильное количество List.Item с правильными data-testid
    expect(screen.getByTestId('Task-1')).toBeInTheDocument();
    expect(screen.getByTestId('Task-2')).toBeInTheDocument();
    expect(screen.getByTestId('Task-3')).toBeInTheDocument();

    // Проверяем, что мок Task был вызван для каждого элемента
    expect(MockTask).toHaveBeenCalledTimes(initialTasks.length);
    expect(MockTask).toHaveBeenCalledWith(
      {
        item: initialTasks[0],
        onToggleDone: expect.any(Function), // Проверяем, что onToggleDone - это функция
      },
      undefined
    );
    expect(MockTask).toHaveBeenCalledWith(
      {
        item: initialTasks[1],
        onToggleDone: expect.any(Function), // Проверяем, что onToggleDone - это функция
      },
      undefined
    );
    expect(MockTask).toHaveBeenCalledWith(
      {
        item: initialTasks[2],
        onToggleDone: expect.any(Function), // Проверяем, что onToggleDone - это функция
      },
      undefined
    );
  });

  // it('should not render List.Item when listOpened is false', () => {
  //   render(
  //     <List
  //       dataSource={filteredTasks}
  //       renderItem={(item) => (
  //         false && ( // Симулируем listOpened === false
  //           <List.Item data-testid={item.title}>
  //             <Task key={item.id} item={item} onToggleDone={() => {}} />
  //           </List.Item>
  //         )
  //       )}
  //     />
  //   );

  //   // Проверяем, что ни один List.Item не отрисовался
  //   expect(screen.queryByTestId('Task 1')).toBeNull();
  //   expect(screen.queryByTestId('Task 2')).toBeNull();
  //   expect(screen.queryByTestId('Task 3')).toBeNull();

  //   // Проверяем, что мок Task не был вызван
  //   expect(MockTask).not.toHaveBeenCalled();
  // });

  // it('should render Task component inside each List.Item', () => {
  //   render(
  //     <List
  //       dataSource={filteredTasks}
  //       renderItem={(item) => (
  //         true && (
  //           <List.Item data-testid={item.title}>
  //             <Task key={item.id} item={item} onToggleDone={() => {}} />
  //           </List.Item>
  //         )
  //       )}
  //     />
  //   );

  //   // Проверяем, что внутри каждого List.Item отрисовался Task (по его data-testid)
  //   expect(screen.getByTestId('task-1')).toBeInTheDocument();
  //   expect(screen.getByTestId('task-2')).toBeInTheDocument();
  //   expect(screen.getByTestId('task-3')).toBeInTheDocument();
  // });
});
