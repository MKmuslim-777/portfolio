import { NextResponse } from 'next/server'

// Dynamic import to prevent build-time MongoDB connection
async function getProjectsCollection() {
  try {
    const { getProjectsCollection } = await import('../../lib/mongodb')
    return await getProjectsCollection()
  } catch (error) {
    console.error('MongoDB connection error:', error)
    return null
  }
}

// GET - Fetch all projects
export async function GET() {
  try {
    const projectsCollection = await getProjectsCollection()
    if (!projectsCollection) {
      return NextResponse.json(
        { success: false, message: 'Database connection failed' },
        { status: 500 }
      )
    }
    
    const projects = await projectsCollection.find({}).sort({ createdAt: -1 }).toArray()
    
    return NextResponse.json({
      success: true,
      projects: projects.map(project => ({
        ...project,
        id: project._id.toString(),
        _id: project._id.toString()
      }))
    })
  } catch (error) {
    console.error('Fetch projects error:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to fetch projects' },
      { status: 500 }
    )
  }
}

// POST - Create new project
export async function POST(request) {
  try {
    const projectData = await request.json()
    
    // Validate required fields
    const { title, description, technologies, image, liveUrl, githubUrl } = projectData
    
    if (!title || !description || !technologies || !image) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields' },
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
    
    const newProject = {
      title,
      description,
      technologies: Array.isArray(technologies) ? technologies : [technologies],
      image,
      liveUrl: liveUrl || '',
      githubUrl: githubUrl || '',
      featured: projectData.featured || false,
      status: projectData.status || 'completed',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }

    const result = await projectsCollection.insertOne(newProject)
    
    if (result.insertedId) {
      return NextResponse.json({
        success: true,
        message: 'Project created successfully',
        project: {
          ...newProject,
          id: result.insertedId.toString(),
          _id: result.insertedId.toString()
        }
      })
    } else {
      throw new Error('Failed to create project')
    }

  } catch (error) {
    console.error('Create project error:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to create project' },
      { status: 500 }
    )
  }
}