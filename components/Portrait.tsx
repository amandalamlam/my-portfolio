type PortraitProps = {
  className?: string;
  src?: string;
  alt?: string;
  position?: string;
  zoom?: number;
};

export default function Portrait({
  className = "",
  src,
  alt = "",
  position = "center center",
  zoom = 1,
}: PortraitProps) {
  return (
    <div className={`portrait ${className}`.trim()}>
      {src ? (
        <img
          className="portrait__img"
          src={src}
          alt={alt}
          style={{
            objectPosition: position,
            transform: zoom === 1 ? undefined : `scale(${zoom})`,
            transformOrigin: position,
          }}
        />
      ) : (
        <span className="portrait__initials">AL</span>
      )}
    </div>
  );
}
