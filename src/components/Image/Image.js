const Image = ({ src, alt, ...props }) => {
  const sourceSet = buildSrcSet(src, ["avif"], [2, 3]);
  const extension = src.split(".").slice(-1)[0];

  return (
    <picture>
      <source type="image/avif" srcSet={sourceSet["avif"]}></source>
      <source srcSet={sourceSet[extension]}></source>
      <img src={src} alt={alt} {...props} />
    </picture>
  );
};

function buildSrcSet(src, extraFormats = [], extraDevicePixelRatios = [2, 3]) {
  const fileName = src.split(".").slice(0, -1).join(".");
  const extension = src.split(".").slice(-1)[0];
  const sourceSet = {
    [extension]: [src],
  };

  for (const format of extraFormats.concat(extension)) {
    sourceSet[format] = sourceSet[format] ?? [];

    sourceSet[format].push(`${fileName}.${format} 1x`);
    for (const pixelRatio of extraDevicePixelRatios) {
      sourceSet[format].push(
        `${fileName}@${pixelRatio}x.${format} ${pixelRatio}x`
      );
    }
  }

  const entries = Object.entries(sourceSet).map(([format, sources]) => [
    format,
    sources.join(", "),
  ]);
  return Object.fromEntries(entries);
}

export default Image;
