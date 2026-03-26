import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { gql } from '@apollo/client'
import { useQuery } from '@apollo/client/react'

const query = gql`
query GetTodosWithUser {
  getTodos {
    id
    title
    completed
user {
  id 
  name
}
  }
}
`

function App() {
  const { data, loading } = useQuery(query)

  if (loading) return <h1>Loading...</h1>

  return (
    <>
      <div className='App'>
        {JSON.stringify(data)}
      </div>
      <div>Hari</div>
    </>
  )
}

export default App
