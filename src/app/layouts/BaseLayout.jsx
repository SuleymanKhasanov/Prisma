import React from 'react';
import { Sidebar } from '@/widgets/sidebar';
import styles from './styles/BaseLayout.module.css';
import { Home } from '@/pages/home';

const BaseLayout = () => {
  return (
    <>
      <Sidebar />
      <main className={styles.content}>
        <Home />
      </main>
    </>
  );
};

export default BaseLayout;
