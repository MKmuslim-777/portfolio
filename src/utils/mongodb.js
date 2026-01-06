// Mock MongoDB implementation for client-side demo
// In production, this should be replaced with API calls to a backend server

// Simulate database with localStorage
const USERS_KEY = 'mkPortfolio_users';

// Helper function to get users from localStorage
const getStoredUsers = () => {
  try {
    const users = localStorage.getItem(USERS_KEY);
    return users ? JSON.parse(users) : [];
  } catch (error) {
    console.error('Error reading users from localStorage:', error);
    return [];
  }
};

// Helper function to save users to localStorage
const saveStoredUsers = (users) => {
  try {
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
    return true;
  } catch (error) {
    console.error('Error saving users to localStorage:', error);
    return false;
  }
};

// Mock database connection
export const connectToDatabase = async () => {
  // Simulate connection delay
  await new Promise(resolve => setTimeout(resolve, 100));
  console.log('Connected to Mock Database (localStorage)');
  return true;
};

// Mock users collection
export const getUsersCollection = async () => {
  await connectToDatabase();
  
  return {
    findOne: async (query) => {
      const users = getStoredUsers();
      if (query.email) {
        return users.find(user => user.email === query.email) || null;
      }
      return null;
    },
    
    insertOne: async (userData) => {
      const users = getStoredUsers();
      const newUser = {
        ...userData,
        _id: Date.now().toString(), // Simple ID generation
      };
      
      users.push(newUser);
      const saved = saveStoredUsers(users);
      
      if (saved) {
        return { insertedId: newUser._id };
      } else {
        throw new Error('Failed to save user');
      }
    }
  };
};

// Note: In production, replace this with actual backend API calls
// Example backend endpoints:
// POST /api/auth/register
// POST /api/auth/login
// GET /api/users/:email