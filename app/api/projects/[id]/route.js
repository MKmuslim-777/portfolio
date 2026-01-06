import { NextResponse } from 'next/server'

// Dynamic import to prevent build-time MongoDB connection
async function getProjectsCollection() {
  try {
    const { getProjectsCollection } = await import('../../../lib/mongodb')
    return await getProjectsCollection()
  } catch (error) {
    console.error('MongoDB connection error:', error)
    return null
  }
}

// GET - Fetch single project
export async function GET(request, { params }) {
  try {
    const { id } = params
    
    // Dynamic import ObjectId to prevent build-time issues
    const { ObjectId } = await import('mongodb')
    
    if (!ObjectId.isValid(id)) {
      return NextResponse.json(
        { success: false, message: 'Invalid project ID' },
        { status: 400 }
      )
    }

    const projectsCollection = await getProjectsCollection()
    if (!projectsCollection) {
      return NextResponse.json(
        { success: false, message: 'Database connection failed' },
        { status: 500 }
      )
    }
    
    const project = await projectsCollection.findOne({ _id: new ObjectId(id) })
    
    if (!project) {
      return NextResponse.json(
        { success: false, message: 'Project not found' },
        { status: 404 }
      )
    }

    return NextResponse.json({
      success: true,
      project: {
        ...project,
        id: project._id.toString(),
        _id: project._id.toString()
      }
    })
  } catch (error) {
    console.error('Fetch project error:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to fetch project' },
      { status: 500 }
    )
  }
}

// PUT - Update project
export async function PUT(request, { params }) {
  try {
    const { id } = params
    const updateData = await request.json()
    
    // Dynamic import ObjectId to prevent build-time issues
    const { ObjectId } = await import('mongodb')
    
    if (!ObjectId.isValid(id)) {
      return NextResponse.json(
        { success: false, message: 'Invalid project ID' },
        { status: 400 }
      )
    }

    const projectsCollection = await getProjectsCollection()
    if (!projectsCollection) {
      return NextResponse.json(
        { success: false, message: 'Database connection failed' },
        { status: 500 }
      )
    }
    
    const updatedProject = {
      ...updateData,
      updatedAt: new Date().toISOString()
    }

    const result = await projectsCollection.updateOne(
      { _id: new ObjectId(id) },
      { $set: updatedProject }
    )
    
    if (result.matchedCount === 0) {
      return NextResponse.json(
        { success: false, message: 'Project not found' },
        { status: 404 }
      )
    }

    return NextResponse.json({
      success: true,
      message: 'Project updated successfully'
    })

  } catch (error) {
    console.error('Update project error:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to update project' },
      { status: 500 }
    )
  }
}

// DELETE - Delete project
export async function DELETE(request, { params }) {
  try {
    const { id } = params
    
    // Dynamic import ObjectId to prevent build-time issues
    const { ObjectId } = await import('mongodb')
    
    if (!ObjectId.isValid(id)) {
      return NextResponse.json(
        { success: false, message: 'Invalid project ID' },
        { status: 400 }
      )
    }

    const projectsCollection = await getProjectsCollection()
    if (!projectsCollection) {
      return NextResponse.json(
        { success: false, message: 'Database connection failed' },
        { status: 500 }
      )
    }
    
    const result = await projectsCollection.deleteOne({ _id: new ObjectId(id) })
    
    if (result.deletedCount === 0) {
      return NextResponse.json(
        { success: false, message: 'Project not found' },
        { status: 404 }
      )
    }

    return NextResponse.json({
      success: true,
      message: 'Project deleted successfully'
    })

  } catch (error) {
    console.error('Delete project error:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to delete project' },
      { status: 500 }
    )
  }
}