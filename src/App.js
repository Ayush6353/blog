import { BrowserRouter } from 'react-router-dom'
import React from 'react'
import { fetchAllBlog, fetchAllCollection } from '../src/pages/api/blog'
import Resource from './components/pages-partials/resources'

function App() {
  // const allBlogData = JSON.parse(allBlogInfo);
  // const allCollectionData = JSON.parse(allCollectionInfo);
  return (
    <>
      <BrowserRouter>
        <Resource
          // allBlogInfo={allBlogData}
          // allCollectionInfo={allCollectionData}
        />
      </BrowserRouter>
    </>
  )
}

export async function getServerSideProps(context) {
  const blogResponse = await fetchAllBlog()
  // console.log(blogResponse,"blogResponse===>")
  const collectionResponse = await fetchAllCollection()
  return {
    props: {
      allBlogInfo: JSON.stringify(blogResponse),
      allCollectionInfo: JSON.stringify(collectionResponse),
    },
  }
}

export default App
