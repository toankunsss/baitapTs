// REST client: Interface + generic fetch
interface ApiResponse<T> {
  status: string;
  data: T;
}

async function fetchJson<T>(url: string): Promise<ApiResponse<T>> {
  const res = await fetch(url);
  if (!res.ok) throw new Error('Network error');
  const json = await res.json();
  return json as ApiResponse<T>;
}

// Example usage
interface User {
  id: number;
  name: string;
}


// Mini form validator
interface FormSchema {
  [key: string]: 'string' | 'number' | 'boolean';
}

// Validation function
function validateForm<T extends Record<string, any>>(
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

const userSchema: FormSchema = {
  id: 'number',
  name: 'string',
};

// Correct usage
const validUser = validateForm(userSchema, { id: 1, name: 'Alice' });


console.log(validUser);
