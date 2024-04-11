import React, { useEffect, useRef } from 'react'
import FilterBy from './FilterBy'
import CapacityBar from './CapacityBar'
import Title from './Title'
import Drawer from './Drawer'
import '../../../style/Home.css'
import { useDispatch, useSelector } from 'react-redux'
import { drawerClose, drawerOpen } from '../../../features/creative-title/titleSlice'

const Home = () => {
  const { isDrawerOpen, titles, filteredTitles } = useSelector((state) => state.title);
  const dispatch = useDispatch();

  const asideRef = useRef(null);
  useEffect(() => {
    const handleOutsideClick = (e) => {
      console.log("click")
      if (asideRef.current && !asideRef.current.contains(e.target)) {
        dispatch(drawerClose())
      }
    }
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [dispatch]);

  return (
    <>
      <main>
        <section className="filter">
          <FilterBy />
        </section>
        <section className="capacity-bar">
          <CapacityBar />
          <button
            className='add-creative-btn btn-page'
            onClick={() => dispatch(drawerOpen())}
            disabled={isDrawerOpen}
          >+ Add Creative</button>
        </section>
        <section className='title-container'>
          {(filteredTitles || titles) && (filteredTitles || titles).map((item) => <Title {...item} />)}
        </section>
      </main>
      <aside ref={asideRef} style={{ right: isDrawerOpen ? "0" : "-35%" }}>
        <Drawer />
      </aside>
    </>
  )
}

export default Home