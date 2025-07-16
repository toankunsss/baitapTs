// API Types
export interface ApiResponse<T> {
  status: string;
  data: T;
}

export interface User {
  id: number;
  name: string;
}

export interface FormSchema {
  [key: string]: 'string' | 'number' | 'boolean';
}
