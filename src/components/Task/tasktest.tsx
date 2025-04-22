// import { ITask } from '../../interfaces/interfaces';
// import '@testing-library/jest-dom';
// import React from 'react';
// import { render, screen, fireEvent } from '@testing-library/react';
// import Task from './Task';

// export const mockTask: ITask = {
//   id: '1',
//   title: 'Test Task',
//   done: false,
// };

// const mockOnToggleDone = jest.fn();

// describe('Task Component', () => {
//   beforeEach(() => {
//     jest.clearAllMocks();
//   });

//   it('отображает заголовок задачи', () => {
//     render(<Task item={mockTask} onToggleDone={mockOnToggleDone} />);
//     expect(screen.getByText('Test Task')).toBeInTheDocument();
//   });

//   it('отображает кнопку с круглой формой', () => {
//     render(<Task item={mockTask} onToggleDone={mockOnToggleDone} />);
//     const buttonElement = screen.getByRole('button');
//     expect(buttonElement).toBeInTheDocument();
//     // expect(buttonElement.dataset.key).toBe('circle');
//     expect(screen.getByTestId('circle')).toBeInTheDocument();
//   });

//   it('не отображает иконку CheckOutlined, если задача не выполнена', () => {
//     render(<Task item={mockTask} onToggleDone={mockOnToggleDone} />);
//     expect(screen.queryByTestId('check-outlined')).toBeNull();
//   });

//   it('отображает иконку CheckOutlined, если задача выполнена', () => {
//     render(
//       <Task
//         item={{ ...mockTask, done: true }}
//         onToggleDone={mockOnToggleDone}
//       />
//     );
//     expect(screen.getByTestId('check-outlined')).toBeInTheDocument();
//   });

//   it('вызывает onToggleDone с правильными аргументами при клике на кнопку', () => {
//     render(<Task item={mockTask} onToggleDone={mockOnToggleDone} />);
//     const buttonElement = screen.getByRole('button');
//     fireEvent.click(buttonElement);
//     expect(mockOnToggleDone).toHaveBeenCalledTimes(1);
//     expect(mockOnToggleDone).toHaveBeenCalledWith('1', true);
//   });

//   it('вызывает onToggleDone с правильными аргументами при клике на текст задачи', () => {
//     render(<Task item={mockTask} onToggleDone={mockOnToggleDone} />);
//     const textElement = screen.getByText('Test Task');
//     fireEvent.click(textElement);
//     expect(mockOnToggleDone).toHaveBeenCalledTimes(1);
//     expect(mockOnToggleDone).toHaveBeenCalledWith('1', true);
//   });

//   it('изменяет состояние done и вызывает onToggleDone при нескольких кликах', () => {
//     render(<Task item={mockTask} onToggleDone={mockOnToggleDone} />);
//     const buttonElement = screen.getByRole('button');

//     fireEvent.click(buttonElement);
//     expect(mockOnToggleDone).toHaveBeenCalledTimes(1);
//     expect(mockOnToggleDone).toHaveBeenCalledWith('1', true);

//     fireEvent.click(buttonElement);
//     expect(mockOnToggleDone).toHaveBeenCalledTimes(2);
//     expect(mockOnToggleDone).toHaveBeenCalledWith('1', false);
//   });

//   it('при наведении мыши на текст, текст становится полупрозрачным', () => {
//     render(<Task item={mockTask} onToggleDone={mockOnToggleDone} />);
//     const textElement = screen.getByText('Test Task');
//     fireEvent.mouseOver(textElement);
//     expect(textElement).toHaveStyle('opacity: 0.6');
//   });

//   it('при уходе мыши с текста, текст возвращает обычную прозрачность', () => {
//     render(<Task item={mockTask} onToggleDone={mockOnToggleDone} />);
//     const textElement = screen.getByText('Test Task');
//     fireEvent.mouseOver(textElement);
//     fireEvent.mouseOut(textElement);
//     expect(textElement).toHaveStyle('opacity: 1');
//   });

//   it('при наведении мыши на текст, курсор становится "pointer"', () => {
//     render(<Task item={mockTask} onToggleDone={mockOnToggleDone} />);
//     const textElement = screen.getByText('Test Task');
//     fireEvent.mouseOver(textElement);
//     expect(textElement).toHaveStyle('cursor: pointer');
//   });

//   it('при уходе мыши с текста, курсор становится "default"', () => {
//     render(<Task item={mockTask} onToggleDone={mockOnToggleDone} />);
//     const textElement = screen.getByText('Test Task');
//     fireEvent.mouseOver(textElement);
//     fireEvent.mouseOut(textElement);
//     expect(textElement).toHaveStyle('cursor: default');
//   });

//   it('когда задача выполнена, текст зачеркивается и становится серым', () => {
//     render(
//       <Task
//         item={{ ...mockTask, done: true }}
//         onToggleDone={mockOnToggleDone}
//       />
//     );
//     const textElement = screen.getByText('Test Task');
//     expect(textElement).toHaveStyle(
//       'text-decoration: line-through; color: #dedede;'
//     );
//   });

//   it('когда задача не выполнена, текст не зачеркивается и остается черным', () => {
//     render(<Task item={mockTask} onToggleDone={mockOnToggleDone} />);
//     const textElement = screen.getByText('Test Task');
//     expect(textElement).toHaveStyle('text-decoration: none; color: black;');
//   });

//   it('при наведении на кнопку, меняется цвет границы', () => {
//     render(<Task item={mockTask} onToggleDone={mockOnToggleDone} />);
//     const buttonElement = screen.getByRole('button');
//     fireEvent.mouseOver(buttonElement);
//     expect(buttonElement).toHaveStyle('border-color: #4096ff;');
//   });

//   it('при уходе мыши с кнопки, цвет границы возвращается к исходному (пустому, если не выполнена)', () => {
//     render(<Task item={mockTask} onToggleDone={mockOnToggleDone} />);
//     const buttonElement = screen.getByRole('button');
//     fireEvent.mouseOver(buttonElement);
//     fireEvent.mouseOut(buttonElement);
//     expect(buttonElement).toHaveStyle('border-color: #d9d9d9'); // Ожидаем пустую строку, так как задача не выполнена
//   });

//   it('при наведении на кнопку, меняется цвет текста иконки (если есть)', () => {
//     render(
//       <Task
//         item={{ ...mockTask, done: true }}
//         onToggleDone={mockOnToggleDone}
//       />
//     );
//     const buttonElement = screen.getByRole('button');
//     const checkOutlinedIcon = screen.getByTestId('check-outlined');
//     fireEvent.mouseOver(buttonElement);
//     expect(buttonElement).toHaveStyle('color: #4096ff;');
//     expect(checkOutlinedIcon).toHaveStyle('color: green;');
//   });
// });

// module.exports = { presets: ['@babel/preset-env'] };
