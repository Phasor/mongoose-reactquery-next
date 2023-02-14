export default async function getAllProjects() {
    const response = await fetch('http://localhost:3001/api/tools')
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    return response.json()
  }

