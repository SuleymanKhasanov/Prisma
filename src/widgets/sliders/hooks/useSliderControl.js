const { useSelector } from "react-redux";

const autoplay = useSelector((state) => state.slider.autoplay);
const sectionName = useSelector((state) => state.slider.sectionName);

const [weekTrendsSlide, setWeekTrendsSlide] = useState(true);
useEffect(() => {
  if (!autoplay && sectionName === 'weekTrends') {
    setWeekTrendsSlide(false);
  } else {
    setWeekTrendsSlide(true);
  }
}, [autoplay, sectionName]);
