import { ITask } from '../../interfaces/interfaces';
import '@testing-library/jest-dom';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Board from './Board';

const mockTasks: ITask[] = [
  { id: '1', title: 'Task 1', done: false },
  { id: '2', title: 'Task 2', done: true },
  { id: '3', title: 'Task 3', done: false },
];

// const setup = (initialTasks = mockTasks) => {
// render(<Board tasks={initialTasks} />);
// expect(screen.getByText('Test Task')).toBeInTheDocument();
// return {
// getInput: () => screen.getByPlaceholderText('What needs to be done?'),
// getAddTaskButton: () => screen.getByRole('button', { name: /add/i }), // Предполагаем, что у Form есть кнопка Submit
// getTaskItem: (title: string) => screen.getByText(title),
// getTaskCheckbox: (title: string) =>
//   screen
//     .getByText(title)
//     .closest('li')
//     ?.querySelector(
//       'button[aria-label="Toggle Todo"]'
//     ) as HTMLButtonElement, // Замените на фактический селектор кнопки Task
// getAllFilterButton: () => screen.getByRole('button', { name: /all/i }),
// getActiveFilterButton: () =>
//   screen.getByRole('button', { name: /active/i }),
// getCompletedFilterButton: () =>
//   screen.getByRole('button', { name: /completed/i }),
// getClearCompletedButton: () =>
//   screen.getByRole('button', { name: /clear completed/i }),
// getItemsLeft: () => screen.getByText(/item\(s\) left/i),
// getListToggleButton: () =>
//   screen.getByRole('button', { name: /toggle list/i }), // Вам может потребоваться добавить aria-label на эту кнопку в компоненте
// };
// };

// describe('Board Component', () => {
//   it('renders initial tasks', () => {
//     const { getTaskItem } = setup();
//     expect(getTaskItem('Task 1')).toBeInTheDocument();
//     expect(getTaskItem('Task 2')).toBeInTheDocument();
//     expect(getTaskItem('Task 3')).toBeInTheDocument();
//   });

//   // it('allows adding a new task', () => {
//   //   const { getInput, getAddTaskButton, getTaskItem } = setup();
//   //   fireEvent.change(getInput(), { target: { value: 'New Task' } });
//   //   fireEvent.submit(getInput().closest('form')!); // Отправляем форму
//   //   expect(getTaskItem('New Task')).toBeInTheDocument();
//   //   expect(getInput()).toHaveValue('');
//   // });

//   // it('toggles task completion status and updates items left', () => {
//   //   const { getTaskCheckbox, getItemsLeft } = setup();
//   //   expect(getItemsLeft()).toHaveTextContent('2 items left');
//   //   fireEvent.click(getTaskCheckbox('Task 1'));
//   //   expect(getItemsLeft()).toHaveTextContent('1 item left');
//   //   fireEvent.click(getTaskCheckbox('Task 1'));
//   //   expect(getItemsLeft()).toHaveTextContent('2 items left');
//   // });

//   // it('filters tasks by "Active"', () => {
//   //   const { getActiveFilterButton, getTaskItem } = setup();
//   //   fireEvent.click(getActiveFilterButton());
//   //   expect(getTaskItem('Task 1')).toBeInTheDocument();
//   //   expect(getTaskItem('Task 2')).not.toBeInTheDocument();
//   //   expect(getTaskItem('Task 3')).toBeInTheDocument();
//   // });

//   // it('filters tasks by "Completed"', () => {
//   //   const { getCompletedFilterButton, getTaskItem } = setup();
//   //   fireEvent.click(getCompletedFilterButton());
//   //   expect(getTaskItem('Task 1')).not.toBeInTheDocument();
//   //   expect(getTaskItem('Task 2')).toBeInTheDocument();
//   //   expect(getTaskItem('Task 3')).not.toBeInTheDocument();
//   // });

//   // it('filters tasks by "All"', () => {
//   //   const { getActiveFilterButton, getAllFilterButton, getTaskItem } = setup();
//   //   fireEvent.click(getActiveFilterButton()); // Сначала применяем другой фильтр
//   //   fireEvent.click(getAllFilterButton());
//   //   expect(getTaskItem('Task 1')).toBeInTheDocument();
//   //   expect(getTaskItem('Task 2')).toBeInTheDocument();
//   //   expect(getTaskItem('Task 3')).toBeInTheDocument();
//   // });

//   // it('clears completed tasks', () => {
//   //   const { getClearCompletedButton, getTaskItem } = setup();
//   //   fireEvent.click(getClearCompletedButton());
//   //   expect(getTaskItem('Task 1')).toBeInTheDocument();
//   //   expect(getTaskItem('Task 2')).not.toBeInTheDocument();
//   //   expect(getTaskItem('Task 3')).toBeInTheDocument();
//   // });

//   // it('updates items left correctly after clearing completed', () => {
//   //   const { getClearCompletedButton, getItemsLeft } = setup();
//   //   expect(getItemsLeft()).toHaveTextContent('2 items left');
//   //   fireEvent.click(getClearCompletedButton());
//   //   expect(getItemsLeft()).toHaveTextContent('2 items left'); // Task 2 была удалена
//   // });

//   // it('toggles the list visibility', () => {
//   //   const { getTaskItem, getListToggleButton } = setup();
//   //   expect(getTaskItem('Task 1')).toBeInTheDocument();
//   //   fireEvent.click(getListToggleButton());
//   //   expect(getTaskItem('Task 1')).not.toBeInTheDocument();
//   //   fireEvent.click(getListToggleButton());
//   //   expect(getTaskItem('Task 1')).toBeInTheDocument();
//   // });
// });

describe('Board Component', () => {
  it('renders all tasks with their titles', () => {
    render(<Board tasks={mockTasks} />);
    mockTasks.forEach((task) => {
      if (task.title) {
        expect(screen.getByText(task.title)).toBeInTheDocument();
      } else {
        // Обработка случая, когда title отсутствует (например, пропустить проверку или выдать ошибку теста)
        console.warn('Task без title:', task);
        // expect(true).toBe(false); // Можно заставить тест упасть, если отсутствие title недопустимо
      }
    });
  });
});
