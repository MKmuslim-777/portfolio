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

    if (!email || !password) {
      return NextResponse.json(
        { success: false, message: 'Email and password are required' },
        { status: 400 }
      )
    }

    // Check for admin credentials
    if (email === 'mk777@admin.com' && password === '017772') {
      return NextResponse.json({
        success: true,
        user: {
          id: 'admin',
          email: 'mk777@admin.com',
          userRole: 'admin',
          createdAt: new Date().toISOString()
        }
      })
    }

    // Get users collection with error handling
    const usersCollection = await getUsersCollection()
    if (!usersCollection) {
      return NextResponse.json(
        { success: false, message: 'Database connection failed' },
        { status: 500 }
      )
    }
    
    // Find user by email
    const user = await usersCollection.findOne({ email })
    if (!user) {
      return NextResponse.json(
        { success: false, message: 'User not found' },
        { status: 404 }
      )
    }

    // Verify password
    const isPasswordValid = await bcrypt.compare(password, user.password)
    if (!isPasswordValid) {
      return NextResponse.json(
        { success: false, message: 'Invalid password' },
        { status: 401 }
      )
    }

    // Return user data (without password)
    return NextResponse.json({
      success: true,
      user: {
        id: user._id.toString(),
        email: user.email,
        userRole: user.userRole,
        createdAt: user.createdAt
      }
    })

  } catch (error) {
    console.error('Login error:', error)
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    )
  }
}