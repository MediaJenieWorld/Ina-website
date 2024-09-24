
function CoverPageImage({ label = "Quantum Machine Learning", src, loading = "lazy" }) {
    return <div className="cover-page">
        <h1 className="text-60 text-600">{label}</h1>
        <img loading={loading} style={{ objectFit: "contain" }} height={250} width={"100%"} src={src} alt={src} />
    </div>
}

export default CoverPageImage