import React from 'react';
import { Sidebar } from '@/widgets/sidebar';
import styles from './styles/BaseLayout.module.css';
import { Home } from '@/pages/home';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Search } from '@/pages/search';
import { Movie } from '@/pages/movie';
import { Series } from '@/pages/series';
import { Routes } from 'react-router-dom';
import { Cartoons } from '@/pages/cartoons';
import { Anime } from '@/pages/anime';
import { WatchLater } from '@/pages/watchLater';
import { Collections } from '@/pages/collections';
import NotFound from '@/pages/notFound/ui/NotFound';

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
            <Route path="/anime" element={<Anime />} />
            <Route path="/watch-later" element={<WatchLater />} />
            <Route path="/collections" element={<Collections />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </Router>
    </>
  );
};

export default BaseLayout;
