import { MongoClient } from 'mongodb'

const uri = process.env.MONGODB_URI
const options = {
  // Remove deprecated options - they're now defaults in newer MongoDB driver
}

let client
let clientPromise

if (process.env.NODE_ENV === 'development') {
  // In development mode, use a global variable so that the value
  // is preserved across module reloads caused by HMR (Hot Module Replacement).
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options)
    global._mongoClientPromise = client.connect()
  }
  clientPromise = global._mongoClientPromise
} else {
  // In production mode, it's best to not use a global variable.
  client = new MongoClient(uri, options)
  clientPromise = client.connect()
}

// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
export default clientPromise

// Helper function to get database
export async function getDatabase() {
  const client = await clientPromise
  return client.db(process.env.MONGODB_DB || 'mkPortfolio')
}

// Helper function to get users collection
export async function getUsersCollection() {
  const db = await getDatabase()
  return db.collection('user')
}

// Helper function to get projects collection
export async function getProjectsCollection() {
  const db = await getDatabase()
  return db.collection('projects')
}

// Helper function to get skills collection
export async function getSkillsCollection() {
  const db = await getDatabase()
  return db.collection('skills')
}