import { useQuery } from '@tanstack/react-query'
import getAllProjects from '../queries/getAllProjects'

export default function Home({data}) {
  
  const projectQuery = useQuery({
    queryKey: ['allProjects'],
    queryFn: getAllProjects,
    initialData: data,
  })

  // console.log(`data: ${JSON.stringify(data)}`)

  if (projectQuery.isLoading) return <p>Loading...</p>
  if (projectQuery.isError) return <p>Error</p>

  return (
    <>
      {projectQuery.data.data.map((tool) => {
        return (
        <p key={tool._id}>{tool.name}</p>
        )
      })}
    </>
  )
}

export async function getServerSideProps() {
  const data = await getAllProjects();
  return {
    props: {
      data,
    }
  }
}

