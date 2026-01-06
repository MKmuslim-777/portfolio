// Mock bcrypt implementation for client-side demo
// In production, password hashing should be done on the backend server

// Simple hash function for demo (NOT secure for production)
const simpleHash = async (password) => {
  // This is just for demo - use proper bcrypt on backend
  return btoa(password + 'mk_salt_demo');
};

const simpleCompare = async (password, hash) => {
  const expectedHash = await simpleHash(password);
  return expectedHash === hash;
};

import { getUsersCollection } from './mongodb'

export const registerUser = async (userData) => {
  try {
    const usersCollection = await getUsersCollection()
    
    // Check if user already exists
    const existingUser = await usersCollection.findOne({ email: userData.email })
    if (existingUser) {
      return {
        success: false,
        message: 'User already exists with this email'
      };
    }

    // Hash password (using simple hash for demo)
    const hashedPassword = await simpleHash(userData.password);

    // Create user object
    const newUser = {
      email: userData.email,
      password: hashedPassword,
      userRole: 'user', // Default role
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }

    // Insert user into database
    const result = await usersCollection.insertOne(newUser)
    
    if (result.insertedId) {
      return {
        success: true,
        message: 'User registered successfully',
        userId: result.insertedId
      }
    } else {
      throw new Error('Failed to register user')
    }
  } catch (error) {
    console.error('Registration error:', error)
    return {
      success: false,
      message: error.message || 'Registration failed'
    }
  }
}

export const loginUser = async (email, password) => {
  try {
    const usersCollection = await getUsersCollection()
    
    // Find user by email
    const user = await usersCollection.findOne({ email })
    if (!user) {
      return {
        success: false,
        message: 'User not found'
      };
    }

    // Verify password (using simple compare for demo)
    const isPasswordValid = await simpleCompare(password, user.password);
    if (!isPasswordValid) {
      return {
        success: false,
        message: 'Invalid password'
      };
    }

    // Return user data (without password)
    return {
      success: true,
      user: {
        id: user._id,
        email: user.email,
        userRole: user.userRole,
        createdAt: user.createdAt
      }
    }
  } catch (error) {
    console.error('Login error:', error)
    return {
      success: false,
      message: error.message || 'Login failed'
    }
  }
}

export const getUserByEmail = async (email) => {
  try {
    const usersCollection = await getUsersCollection()
    const user = await usersCollection.findOne({ email })
    return user
  } catch (error) {
    console.error('Get user error:', error)
    return null
  }
}