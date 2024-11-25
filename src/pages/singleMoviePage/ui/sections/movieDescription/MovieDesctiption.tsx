import styles from './MovieDescription.module.css';
import { MovieDescriptionsProps } from './model/interfaces';

const MovieDescription: React.FC<MovieDescriptionsProps> = ({
  title,
  description,
  linkToMovie,
  overview,
  production_companies,
}) => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.titleBox}>
          <h1 className={styles.movieName}>{title}</h1>
          <span className={styles.movieSlogan}>{description}</span>
        </div>
        {linkToMovie ? (
          <div className={styles.mowieLinkWrapper}>
            <a
              className={styles.movieLink}
              href={linkToMovie}
              target="_blank"
              rel="noopener noreferrer"
            >
              Смотреть
            </a>
          </div>
        ) : null}
      </div>
      <ul className={styles.productionCompanies}>
        {production_companies?.length > 0
          ? production_companies.map((element) =>
              element.logo_path ? (
                <li
                  className={styles.productionList}
                  key={element.id}
                >
                  <img
                    src={`https://image.tmdb.org/t/p/w300/${element.logo_path}`}
                    alt={element.name}
                    className={styles.companyLogo}
                  />
                </li>
              ) : null,
            )
          : null}
      </ul>
      <div className={styles.abouteMovie}>
        <p className={styles.movieDescription}>{overview}</p>
      </div>
    </>
  );
};

export default MovieDescription;
