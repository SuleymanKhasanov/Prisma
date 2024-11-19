import BannerSkeleton from '@/entities/bannerSkeleton/ui/BannerSkeleton';
import { Banner } from '@/widgets/banner';
import styles from './styles/SearchData.module.css';

const SearchData = ({ searchData }: { searchData: any[] }) => {
  return (
    <>
      <div className={styles.sectionTitleWrapper}>
        <h2 className={styles.sectionTitle}>Результаты поиска</h2>
      </div>
      <div className={styles.container}>
        {searchData.length > 0 ? (
          searchData?.map((element) => {
            return (
              <Banner
                key={element.id}
                mediaType={element.media_type}
                title={element.title || element.name}
                rating={element.vote_average}
                poster={element.poster_path}
                genere={element.genre_ids}
                id={element.id}
                sectionName=""
                date={element.release_date}
              />
            );
          })
        ) : (
          <BannerSkeleton count={4} size="big" />
        )}
      </div>
    </>
  );
};

export default SearchData;
