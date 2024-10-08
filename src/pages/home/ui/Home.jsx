import BannersList from '@/widgets/bannersList/ui/BannersList';
import styles from './styles/Home.module.css';

const Home = () => {
  return (
    <section className={styles.homePage}>
      <BannersList />
    </section>
  );
};

export default Home;
