import { YtIconsProps } from './types';

export const YtMusic = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: YtIconsProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    style={{
      pointerEvents: 'none',
      display: 'block',
      width: '100%',
      height: '100%',
    }}
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    aria-describedby={descId}
    {...props}
  >
    {desc ? <desc id={descId}>{desc}</desc> : null}
    {title ? <title id={titleId}>{title}</title> : null}
    <circle cx={12} cy={12} r={10} fill="red" />
    <path fill="#FFF" d="M10 14.65v-5.3L15 12z" />
    <path
      fill="#FFF"
      d="M12 7c2.76 0 5 2.24 5 5s-2.24 5-5 5-5-2.24-5-5 2.24-5 5-5m0-1c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6z"
    />
  </svg>
);
