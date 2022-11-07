import { useState, useEffect } from "react"
import ProfileList from "./ProfileList"
import Pagination from "./Pagination"
import './App.css';



function App() {
  const [items, setItems] = useState([])
  // Change this to any username whose repositories you want to get
  const [user] = useState("Devraph07")
   const [currentPage, setCurrentPage]=useState(1);
   const [postsPerPage]= useState(1);

  useEffect(() => {
    const fetchRepos = async () => {
      const res = await fetch(
        `https://api.github.com/users/${user}/repos?per_page=2&sort=updated`
      )
      const data = await res.json()
      setItems(data)
      console.log(data)
    }

    fetchRepos()
  }, [user])

  //get current post
  const indexOfLastPost= currentPage * postsPerPage;
  const indexOfFirstPost= indexOfLastPost - postsPerPage;
  const currentPosts= items.slice(indexOfFirstPost, indexOfLastPost);

  //change page 
  const paginate =(pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div className="">
        <h2 className="">
          Viewing {user}'s repositories
        </h2>
      </div>
    <ProfileList items={currentPosts} />
    <Pagination postsPerPage={postsPerPage} totalPosts={items.length} paginate={paginate}/>
    </>
    
  )
}


export default App
