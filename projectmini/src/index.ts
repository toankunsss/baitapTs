import { fetchJson } from './api/client';
import { validateForm } from './validation/formValidator';
import { User, FormSchema } from './types';

// Example REST client usage
async function fetchUserExample() {
  try {
    const user = await fetchJson<User[]>('https://67dc40ade00db03c40676ed4.mockapi.io/user');
    console.log('Fetched user:', user);
  } catch (error) {
    console.error('Error fetching user:', error);
  }
}

// Example form validation usage
function validateUserExample() {
  const userSchema: FormSchema = {
    id: 'number',
    name: 'string',
  };

  try {
    // Valid case
    const validUser = validateForm(userSchema, { id: 1, name: 'Alice' });
    console.log('Valid user:', validUser);

  } catch (error) {
    console.error('Validation error:', error);
  }
}

// Run examples
fetchUserExample();
validateUserExample();
