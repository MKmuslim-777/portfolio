import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const formData = await request.formData()
    const image = formData.get('image')

    if (!image) {
      return NextResponse.json(
        { success: false, message: 'No image provided' },
        { status: 400 }
      )
    }

    // Convert image to base64
    const bytes = await image.arrayBuffer()
    const buffer = Buffer.from(bytes)
    const base64Image = buffer.toString('base64')

    // Upload to ImgBB
    const imgbbFormData = new FormData()
    imgbbFormData.append('image', base64Image)

    const imgbbResponse = await fetch(
      `https://api.imgbb.com/1/upload?key=${process.env.VITE_IMAGE_HOST_KEY}`,
      {
        method: 'POST',
        body: imgbbFormData,
      }
    )

    const imgbbResult = await imgbbResponse.json()

    if (imgbbResult.success) {
      return NextResponse.json({
        success: true,
        data: {
          url: imgbbResult.data.url,
          display_url: imgbbResult.data.display_url,
          delete_url: imgbbResult.data.delete_url,
          size: imgbbResult.data.size,
        }
      })
    } else {
      return NextResponse.json(
        { success: false, message: 'Failed to upload image to ImgBB' },
        { status: 500 }
      )
    }

  } catch (error) {
    console.error('Image upload error:', error)
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    )
  }
}