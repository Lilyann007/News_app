import { useState, useEffect } from "react";
import { fetchTopHeadlines } from "../utils/api";
import NewsCard from "../components/NewsCard";
import Loading from "../components/Loading";
import { updateTitle } from "../utils/updateTitle";

function Home(){
    const [articles,setArticles] = useState([]);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null);

    useEffect(() => {
        updateTitle("最新头条")
        
        async function loadNews() {
            try {
                setLoading(true);
                const data = await fetchTopHeadlines("us");

                if(data.status == "ok"){
                    setArticles(data.articles);
                }else{
                    setError(data.message || "获取新闻失败");
                }
            } catch (error) {
                setError("网络错误：" + error.message);
            }finally{
                setLoading(false);
            }
        }

        loadNews();
    },[]); // 空依赖数组 = 只在页面加载时执行一次

    if(loading){
        return <Loading />
    }
    
    if(error){
        return (
            <div style={{padding: "20px", textAlign: "center"}}>
                <h2 style={{color: "red"}}>❌ 出错了</h2>
                <p>{error}</p>
            </div>
        )
    }
    
    return (
        <div style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "20px"
        }}>
            <h1 style={{marginBottom: "30px"}}>📰 最新头条</h1>

            <div>
                {articles.map((article,index) => (
                    <NewsCard
                        key={index}
                        article={article}
                    />
                ))}
            </div>
        </div>
    )
}

export default Home;