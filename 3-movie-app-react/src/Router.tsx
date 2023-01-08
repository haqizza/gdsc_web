import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Detail from './Pages/Detail';
import CurrentlyAiring from './Pages/CurrentlyAiring';
import Upcoming from './Pages/Upcoming';

const RootRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/upcoming" element={<Upcoming />} />
            <Route path="/currently-airing" element={<CurrentlyAiring />} />
            <Route path="movie/:id/detail" element={<Detail />} />
            <Route path="*" element={
                <div>Not Found 404</div>}
            />
        </Routes>
    );
}
  
  export default RootRouter;