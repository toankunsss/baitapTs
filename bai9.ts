interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

type partialTodo = Partial<Todo>

type readonlyTodo = Readonly<Todo>


type TodoPreview = Pick<Todo, 'id' | 'title'>;

type TodoWithoutCompleted = Omit<Todo, 'completed'>;
