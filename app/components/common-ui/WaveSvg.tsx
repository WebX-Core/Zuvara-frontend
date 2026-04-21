type WaveSvgProps = {
  className?: string;
  fill: string;
  path: string;
  viewBox: string;
};

export function WaveSvg({ className, fill, path, viewBox }: WaveSvgProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      preserveAspectRatio="none"
      viewBox={viewBox}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d={path} fill={fill} />
    </svg>
  );
}
