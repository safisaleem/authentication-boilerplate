import axios from 'axios';

const signIn = async (formData) => {
  try {
    const response = await axios.post('http://localhost:3001/auth/signin', formData);
    
    if (!response.data.token) {
      throw new Error('Sign-in failed');
    }

    return response.data.token;
  } catch (error) {
    throw new Error('Error occurred while signing in');
  }
};

const signUp = async (formData) => {
    try {
      const response = await axios.post('http://localhost:3001/auth/signup', formData);

      return response.data;
    } catch (error) {
      throw new Error('Error occurred while signing up');
    }
  };
  

export { 
    signIn,
    signUp,
 };
