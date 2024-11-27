import { useRef, useEffect } from 'react';
import styles from './NotFound.module.css';

const NotFound = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null); // Типизация canvasRef

  const screenWidth = 400;
  const screenHeight = 300;

  const drawNoise = (ctx: CanvasRenderingContext2D) => {
    // Типизация ctx
    const imageData = ctx.createImageData(screenWidth, screenHeight);
    for (let i = 0; i < imageData.data.length; i += 4) {
      const color = Math.random() > 0.5 ? 255 : 0;
      imageData.data[i] = color;
      imageData.data[i + 1] = color;
      imageData.data[i + 2] = color;
      imageData.data[i + 3] = 255;
    }
    ctx.putImageData(imageData, 0, 0);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        const intervalId = setInterval(() => drawNoise(ctx), 50);
        return () => clearInterval(intervalId);
      }
    }
  }, []);

  return (
    <div className="notFound">
      <canvas
        ref={canvasRef}
        width={screenWidth}
        height={screenHeight}
        className={styles.tvScreen}
      ></canvas>
      <div className={styles.notFoundTextBox}>
        <h2 className={styles.notFoundTitle}>404</h2>
        <p className={styles.notFoundText}>страница не найдена</p>
      </div>
    </div>
  );
};

export default NotFound;
