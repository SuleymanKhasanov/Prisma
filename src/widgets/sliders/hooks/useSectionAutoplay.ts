import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

// Типизация состояния Redux
interface SliderState {
  autoplay: boolean;
  sectionName: string;
}

interface RootState {
  slider: SliderState;
}

interface SliderControl {
  weekTrends: boolean;
  popularMovies: boolean;
  popularShows: boolean;
  topRatedMovies: boolean;
}

const useSectionAutoplay = () => {
  // Получаем значения из Redux состояния с типизацией
  const autoplay = useSelector(
    (state: RootState) => state.slider.autoplay,
  );
  const sectionName = useSelector(
    (state: RootState) => state.slider.sectionName,
  );

  // Локальное состояние для контроля автоплея
  const [sliderControl, setSliderControl] = useState<SliderControl>({
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
