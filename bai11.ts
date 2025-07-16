type PromiseType<T> = 
  T extends Promise<infer U> 
    ? U 
    : T;

interface Todo {
  title: string;
  meta: {
    author: string;
    tags: string[];
  };
}

type DeepReadonly<T> = 
  T extends object 
    ? { readonly [K in keyof T]: DeepReadonly<T[K]> }
    : T;


interface Todo {
  title: string;
  meta: {
    author: string;
    tags: string[];
  };
}

type ReadonlyTodo = DeepReadonly<Todo>;

