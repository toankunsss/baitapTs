import { FormSchema } from '../types';

export function validateForm<T extends Record<string, any>>(
  schema: FormSchema,
  data: T
): T {
  for (const key in schema) {
    if (!(key in data)) {
      throw new Error(`Missing required field: ${key}`);
    }
    if (typeof data[key] !== schema[key]) {
      throw new Error(`Field ${key} should be of type ${schema[key]}`);
    }
  }
  return data;
}
