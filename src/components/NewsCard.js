function NewsCard({article}) {
    //article可能为空，先判断
    if(!article){
        return null;
    }

    //有些新闻没有图片，用默认图片
    const defaultImage = "https://via.placeholder.com/400x200?text=No+Image"
    
    return (
        <div
            style={{
                border: "1px solid #ddd",
                borderRadius: "8px",
                padding: "15px",
                marginBottom: "20px",
                backgroundColor: "#fff",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
            }}
        >
            {/* 图片 */}
            <img
                src={article.urlToImage || defaultImage}
                alt={article.title}
                style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                    borderRadius: "8px",
                    marginBottom: "15px"
                }}
                onError={(e) => {
                    e.target.src = defaultImage;
                }}
            />

            {/* 标题 */}
            <h2 style={{
                fontSize: "20px",
                marginBottom: "10px",
                color: "#333"
                }}
            >
                {article.title}
            </h2>

            {/* 描述 */}
            <p style={{
                color: "#666",
                fontSize: "14px",
                lineHeight: "1.6",
                marginBottom: "15px"
            }}>
                {article.description || "暂无描述"}
            </p>

            {/* 来源和时间 */}
            <div>
                <span>{article.source?.name || "未知来源"}</span>
                <span>
                    {article.publishedAt
                        ? new Date(article.publishedAt).toLocaleDateString("zh-CN")
                        : "未知时间"
                    }
                </span>
            </div>

            {/* 阅读全文按钮 */}
            <a
                href={article.url}

                //点击链接➡️新标签页打开，用户不会离开你的网站；如果不写，点击链接➡️当前页面跳转➡️用户离开了你的网站
                target="_blank"

                //rel="noopner noreferrer"   作用：安全性+隐私保护
                 
                //如果只有 target="_blank" 没有 noopener
                //<a href="恶意网站" target="_blank">
                //❌ 新打开的页面可以通过 window.opener 访问你的页面
                //❌ 恶意网站可以修改你的页面（比如跳转到钓鱼网站）
                
                //<a href="..." target="_blank" rel="noopener">
                //✅ 新页面无法访问 window.opener
                //✅ 防止恶意攻击

                // 隐私保护：不发送 Referer 信息，目标网站不知道用户来自哪里，保护隐私
                rel="noopener noreferrer" 
                style={{
                    display: "inline-block",
                    backgroundColor: "#61dafb",
                    color: "#282c34",
                    padding: "10px 20px",
                    borderRadius: "5px",
                    textDecoration: "none",
                    fontWeight: "bold"
                }}
            >
                阅读全文 →
            </a>
        </div>
    )
}

export default NewsCard;