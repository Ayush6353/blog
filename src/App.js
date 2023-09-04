import { BrowserRouter } from 'react-router-dom'
import React from 'react'
import { fetchAllBlog, fetchAllCollection } from '../src/pages/api/blog'
import Resource from './components/pages-partials/resources'
import About from './components/pages-partials/about'
import Blog from './pages/blog/[id]'

function App(allBlogInfo, allCollectionInfo) {
  // const allBlogData = JSON.parse(allBlogInfo);
  // const allCollectionData = JSON.parse(allCollectionInfo);
  return (
    <>
      <BrowserRouter>
        <Resource
          // allBlogInfo={allBlogData}
          // allCollectionInfo={allCollectionData}
        />
        {/* <Blog/> */}
      </BrowserRouter>
    </>
  )
}

export async function getServerSideProps(context) {
  const blogResponse = await fetchAllBlog()
  console.log(blogResponse,"blogResponse===>")
  const collectionResponse = await fetchAllCollection()
  return {
    props: {
      allBlogInfo: JSON.stringify(blogResponse),
      allCollectionInfo: JSON.stringify(collectionResponse),
    },
  }
}

export default App
