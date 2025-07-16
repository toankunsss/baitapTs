type TypeName<T> = 
  T extends string ? 'string' :
  T extends number ? 'number' :
  T extends boolean ? 'boolean' :
  T extends undefined ? 'undefined' :
  T extends Function ? 'function' :
  T extends null ? 'null' :
  'object';

type TypeNameOfString = TypeName<string>; // 'string'

type Flatten<T> = 
  T extends Array<infer U> 
    ? Flatten<U> 
    : T;

type A = Flatten<number[]>;