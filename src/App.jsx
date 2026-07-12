import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { personal } from './data'
import Layout from './components/Layout/Layout'
import Home from './pages/Home/Home'
import Blogs from './pages/Blogs/Blogs'
import BlogPost from './pages/BlogPost/BlogPost'
import Projects from './pages/Projects/Projects'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout personal={personal} />}>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:slug" element={<BlogPost />} />
          <Route path="/projects" element={<Projects />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
