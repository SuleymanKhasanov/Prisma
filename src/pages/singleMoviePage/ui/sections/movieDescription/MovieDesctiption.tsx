import styles from './MovieDescription.module.css';
import { MovieDescriptionsProps } from './model/interfaces';

const MovieDescription: React.FC<MovieDescriptionsProps> = ({
  title,
  description,
  linkToMovie,
  overview,
  production_companies,
  cast,
}) => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.titleBox}>
          <h1 className={styles.movieName}>{title}</h1>
          <span className={styles.movieSlogan}>{description}</span>
        </div>
        {linkToMovie && (
          <div className={styles.mowieLinkWrapper}>
            <a className={styles.movieLink} href={linkToMovie}>
              Смотреть
            </a>
          </div>
        )}
      </div>

      {/* Список компаний */}
      <ul className={styles.productionCompanies}>
        {production_companies?.length ? (
          production_companies.map((company) =>
            company.logo_path ? (
              <li className={styles.productionList} key={company.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w300/${company.logo_path}`}
                  alt={company.name}
                  className={styles.companyLogo}
                />
              </li>
            ) : null,
          )
        ) : (
          <p>Нет данных о производственных компаниях</p>
        )}
      </ul>

      {/* Описание фильма */}
      <div className={styles.abouteMovie}>
        <p className={styles.movieDescription}>{overview}</p>
      </div>

      {/* Список актеров */}
      <div className={styles.cast}>
        {cast?.length ? (
          <ul className={styles.castList}>
            {cast.map((actor) =>
              actor.profile_path ? (
                <li key={actor.cast_id} className={styles.castItem}>
                  <div className={styles.castWrapper}>
                    <img
                      src={`https://image.tmdb.org/t/p/w300/${actor.profile_path}`}
                      alt={actor.name}
                      className={styles.castImage}
                    />
                    <span className={styles.castName}>
                      {actor.name}
                    </span>
                  </div>
                </li>
              ) : null,
            )}
          </ul>
        ) : (
          <p>Нет информации об актерах</p>
        )}
      </div>
    </>
  );
};

export default MovieDescription;
