import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'

// Dynamic import to prevent build-time MongoDB connection
async function getUsersCollection() {
  try {
    const { getUsersCollection } = await import('../../../lib/mongodb')
    return await getUsersCollection()
  } catch (error) {
    console.error('MongoDB connection error:', error)
    return null
  }
}

export async function POST(request) {
  try {
    const { email, password } = await request.json()

    // Validate input
    if (!email || !password) {
      return NextResponse.json(
        { success: false, message: 'Email and password are required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: 'Please enter a valid email address' },
        { status: 400 }
      )
    }

    // Validate password length
    if (password.length < 6) {
      return NextResponse.json(
        { success: false, message: 'Password must be at least 6 characters long' },
        { status: 400 }
      )
    }

    // Get users collection with error handling
    const usersCollection = await getUsersCollection()
    if (!usersCollection) {
      return NextResponse.json(
        { success: false, message: 'Database connection failed' },
        { status: 500 }
      )
    }

    // Check if user already exists
    const existingUser = await usersCollection.findOne({ email })
    if (existingUser) {
      return NextResponse.json(
        { success: false, message: 'User already exists with this email' },
        { status: 409 }
      )
    }

    // Hash password
    const saltRounds = 12
    const hashedPassword = await bcrypt.hash(password, saltRounds)

    // Create new user
    const newUser = {
      email,
      password: hashedPassword,
      userRole: 'user', // Default role
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }

    // Insert user into database
    const result = await usersCollection.insertOne(newUser)

    if (result.insertedId) {
      return NextResponse.json({
        success: true,
        message: 'User registered successfully',
        userId: result.insertedId.toString()
      })
    } else {
      throw new Error('Failed to register user')
    }

  } catch (error) {
    console.error('Registration error:', error)
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    )
  }
}