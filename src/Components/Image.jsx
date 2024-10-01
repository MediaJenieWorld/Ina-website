
// eslint-disable-next-line react/prop-types
const ImageComp = ({ height = "auto", prefixAssets = true, width = "auto", src, alt, ...props }) => {
    let newAlt = alt || src
    let getSrc = src.includes("http") ? src : prefixAssets ? "/assets/" + src : src
    return (
        <img loading="lazy"
            height={height} width={width} src={getSrc} alt={newAlt} {...props} />
    )
}

export default ImageComp