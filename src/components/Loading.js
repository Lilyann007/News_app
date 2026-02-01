function Loading(){
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "50vh",
            fontSize: "24px"
        }}>
            <div style={{
                fontSize: "48px",
                marginBottom: "20px",
                animation: "spin 2s linear infinite"
            }}>
                📰
            </div>
            <p style={{color: "#666"}}>加载中...</p>
            <style>
                {`@keyframes spin {
                    from {transform: rotate(0deg);}
                    to {transform: rotate(360deg);}
                }`}
            </style>
        </div>
    )
}

export default Loading;