import animationData from '../assets/loader_lottie.json';
import Lottie from 'lottie-react';

const LottieAnimation = () => {

  return (
    <div style={{height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <Lottie animationData={animationData} style={{ height: 80, width: 80 }} />
    </div>
  );
};

export default LottieAnimation;
