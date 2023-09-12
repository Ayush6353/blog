import { BrowserRouter, Route, Routes } from 'react-router-dom'
import React from 'react'
import { fetchAllBlog, fetchAllCollection } from '../src/pages/api/blog'
import Resource from './components/pages-partials/resources';
import About from './components/pages-partials/about';
import Home from './pages/Home';
import Contactus from './components/pages-partials/contactUs';
import Terms from './pages/terms';
import Privacy from './pages/privacy';
import Api from './ApiSecond';
// import Blog from './pages/blog/[id]';
function App(allBlogInfo, allCollectionInfo) {
  // const allBlogData = JSON.parse(allBlogInfo);
  // const allCollectionData = JSON.parse(allCollectionInfo);
  return (
    <>
      <BrowserRouter>
      {/* <Api/>
        <Resource
          // allBlogInfo={allBlogData}
          // allCollectionInfo={allCollectionData}
        /> */}
       {/* <Blog/> */}
        <Routes>
          <Route path='/' element={<Resource/>}></Route>
          <Route path='/Home' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/contact' element={<Contactus/>}></Route>
          <Route path='/terms' element={<Terms/>}></Route>
          <Route path='/privacy' element={<Privacy/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

// export async function getServerSideProps(context) {
//   const blogResponse = await fetchAllBlog()
//   console.log(blogResponse,"blogResponse===>")
//   const collectionResponse = await fetchAllCollection()
//   return {
//     props: {
//       allBlogInfo: JSON.stringify(blogResponse),
//       allCollectionInfo: JSON.stringify(collectionResponse),
//     },
//   }
// }

export default App
