import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FilterBy from './FilterBy';
import CapacityBar from './CapacityBar';
import Title from './Title';
import Drawer from './Drawer';
import '../../../style/Home.css';
import { drawerClose, drawerOpen } from '../../../features/creative-title/titleSlice';
import useMouseDownOutside from '../../../hooks/useMouseDownOutside';

// Home Page parent component
const Home = () => {
  const { isDrawerOpen, titles, filteredTitles } = useSelector((state) => state.title);
  const dispatch = useDispatch();
  let asideRef = useRef(null);
  // close the drawer when clicked outside of it using custom hook
  asideRef = useMouseDownOutside(asideRef, drawerClose);
  return (
    <>
      <main>
        <section className="filter">
          <FilterBy />
        </section>
        <section className="capacity-bar">
          <CapacityBar />
          <button
            type="button"
            className="add-creative-btn"
            onClick={() => dispatch(drawerOpen())}
            disabled={isDrawerOpen}
          >
            + Add Creative
          </button>
        </section>
        <section className="title-container">
          {
            (filteredTitles || titles)
            && (filteredTitles || titles).map((item) => (
              <Title
                key={item.title}
                title={item.title}
                subTitle={item.subTitle}
                backgroundColor={item.backgroundColor}
              />
            ))
          }
        </section>
      </main>
      <aside ref={asideRef} style={{ right: isDrawerOpen ? '0' : '-35%' }}>
        <Drawer />
      </aside>
    </>
  );
};

export default Home;
