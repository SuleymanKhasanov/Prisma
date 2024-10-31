import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const useSectionAutoplay = () => {
  const autoplay = useSelector((state) => state.slider.autoplay);
  const sectionName = useSelector(
    (state) => state.slider.sectionName,
  );

  const [sliderControl, setSliderControl] = useState({
    weekTrends: true,
    popularMovies: true,
    popularShows: true,
    topRatedMovies: true,
  });

  useEffect(() => {
    setSliderControl((prevState) => ({
      ...prevState,
      [sectionName]: autoplay ? true : false,
    }));
  }, [autoplay, sectionName]);

  return sliderControl;
};

export default useSectionAutoplay;
