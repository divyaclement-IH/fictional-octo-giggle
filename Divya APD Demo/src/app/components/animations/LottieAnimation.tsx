import Lottie from "lottie-react";

interface LottieAnimationProps {
  animationData: unknown;
  loop?: boolean;
  autoplay?: boolean;
  className?: string;
  width?: number | string;
  height?: number | string;
}

export function LottieAnimation({
  animationData,
  loop = true,
  autoplay = true,
  className = "",
  width,
  height,
}: LottieAnimationProps) {
  const style = {
    width: width || "100%",
    height: height || "100%",
  };

  return (
    <div className={className} style={style}>
      <Lottie animationData={animationData} loop={loop} autoplay={autoplay} />
    </div>
  );
}
