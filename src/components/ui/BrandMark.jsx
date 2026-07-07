let _id = 0;

export default function BrandMark({ size = 28 }) {
  const gradId = `habita-grad-${(_id += 1)}`;
  return (
    <svg className="brand__mark" width={size} height={size} viewBox="0 0 40 40" aria-hidden="true">
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#E61C54" />
          <stop offset=".55" stopColor="#8D2876" />
          <stop offset="1" stopColor="#3B226D" />
        </linearGradient>
      </defs>
      <g fill={`url(#${gradId})`}>
        <rect x="6" y="5" width="8" height="30" rx="2.5" />
        <rect x="26" y="5" width="8" height="30" rx="2.5" />
        <rect x="13" y="16" width="14" height="7" rx="2" />
      </g>
    </svg>
  );
}

export function BrandLockup() {
  return (
    <span className="brand">
      <BrandMark />
      <span className="brand__name">habita</span>
    </span>
  );
}
