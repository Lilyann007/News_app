import { useState } from "react";
import { searchNews } from "../utils/api";
import NewsCard from "../components/NewsCard";
import Loading from "../components/Loading";


function Search(){
    const [keyword,setKeyword] = useState("");
    const [articles,setArticles] = useState([]);
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(null);
    const [hasSearched,setHasSearched] = useState(false);

    async function handleSearch(e) {
        e.preventDefault(); //阻止表单的默认提交行为

        if(!keyword.trim()){
            alert("请输入搜索关键词");
            return;
        }

        try {
            setLoading(true);
            setError(null);
            setHasSearched(true);

            const data = await searchNews(keyword);

            if(data.status == "ok"){
                setArticles(data.articles);
            }else{
                setError(data.message || "搜索失败");
            }
        } catch (error) {
            setError("网络错误：" + error.message);
        }finally{
            setLoading(false);
        }
    }

    return (
        <div style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "20px"
        }}>
            <h1 style={{marginBottom: "30px"}}>🔍 搜索新闻</h1>

            {/* 搜索框 */}
            <form onSubmit={handleSearch} style={{marginBottom: "30px"}}>
                <div style={{display: "flex", gap: "10px"}}>
                    <input 
                        type="text" 
                        value={keyword}
                        onChange={(e) => setKeyword(e.target.value)}
                        placeholder="请输入关键词搜索新闻..."
                        style={{
                            flex: 1,
                            padding: "12px 20px",
                            fontSize: "16px",
                            border: "2px solid #ddd",
                            borderRadius: "8px",
                            outline: "none"
                        }}
                        onFocus={(e) => {
                            e.target.style.borderColor = "#61dafb";
                        }}
                        onBlur={(e) => {
                            e.target.style.borderColor = "#ddd";
                        }}
                    />
                    <button 
                        type="submit"
                        style={{
                            padding: "12px 30px",
                            fontSize: "16px",
                            backgroundColor: "#61dafb",
                            color: "#282c34",
                            border: "none",
                            borderRadius: "8px",
                            cursor: "pointer",
                            fontWeight: "bold"
                        }}
                    >
                        搜索
                    </button>
                </div>
            </form>

            {/* 加载状态 */}
            {loading && <Loading />}

            {/* 错误提示 */}
            {error && (
                <div style={{
                    padding: "20px",
                    backgroundColor: "#ffe6e6",
                    borderRadius: "8px",
                    marginBottom: "20px"
                }}>
                    <p style={{color: "red", margin: 0}}>❌ {error}</p>
                </div>
            )}

            {/* 搜索结果 */}
            {!loading && hasSearched && (
                <>
                    <p style={{
                        color: "#666",
                        marginBottom: "20px"
                    }}>
                        找到{articles.length}条结果
                        {keyword && `- "${keyword}"`}
                    </p>

                    {articles.length === 0 ? (
                        <div style={{
                            textAlign: "center",
                            padding: "50px",
                            color: "#999"
                        }}>
                            <div style={{fontSize: "48px", marginBottom: "20px"}}>🔍</div>
                            <p>没有找到相关新闻</p>
                            <p>试试其他关键词吧</p>
                        </div>
                    ) : (
                        <div>
                            {articles.map((article,index) => (
                                <NewsCard
                                    key={index}
                                    article={article}
                                />
                            ))}
                        </div>
                    )}
                </>
            )}

            {/* 初始状态提示 */}
            {!hasSearched && !loading && (
                <div style={{
                    textAlign: "center",
                    padding: "50px",
                    color: "#999"
                }}>
                    <div style={{fontSize: "48px", marginBottom: "20px"}}>📰</div>
                    <p>请输入关键词开始搜索</p>
                </div>
            )}
        </div>
    )
}

export default Search;