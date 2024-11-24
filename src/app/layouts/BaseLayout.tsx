import React from 'react';
import { Sidebar } from '@/widgets/sidebar';
import styles from './BaseLayout.module.css';
import { Home } from '@/pages/home';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Search } from '@/pages/search';
import { Movie } from '@/pages/movie';
import { Series } from '@/pages/series';
import { Routes } from 'react-router-dom';
import { Cartoons } from '@/pages/cartoons';
import { WatchLater } from '@/pages/watchLater';
import { Collections } from '@/pages/collections';
import NotFound from '@/pages/notFound/ui/NotFound';
import { SingleMoviePage } from '@/pages/singleMoviePage';

const BaseLayout = () => {
  return (
    <>
      <Router>
        <Sidebar />
        <main className={styles.content}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/movies" element={<Movie />} />
            <Route path="/series" element={<Series />} />
            <Route path="/cartoons" element={<Cartoons />} />
            <Route path="/watch-later" element={<WatchLater />} />
            <Route path="/collections" element={<Collections />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/:movieId" element={<SingleMoviePage />} />
          </Routes>
        </main>
      </Router>
    </>
  );
};

export default BaseLayout;
