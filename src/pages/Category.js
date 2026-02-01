import { useState, useEffect } from "react";
import { useParams} from "react-router-dom";
import { fetchByCategory } from "../utils/api";
import NewsCard from "../components/NewsCard";
import Loading from "../components/Loading";
import { updateTitle } from "../utils/updateTitle";


function Category(){
    const {name} = useParams(); //从 URL 获取分类名（technology, business等）

    const [articles,setArticles] = useState([]);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null);

    //分类映射（英文➡️中文）
    const categoryNames = {
        "business" : "商业",
        'technology': '科技',
        'entertainment': '娱乐',
        'sports': '体育',
        'health': '健康'
    };

    useEffect(() => {
        updateTitle("搜索新闻");
        
        async function loadNews() {
            try {
                setLoading(true);
                setError(null);

                const data =  await fetchByCategory(name);

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
    },[name]);  //name 变化时重新加载（切换分类）

    if(loading){
        return <Loading />;
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
            <h1 style={{marginBottom: "30px"}}>
                📂 {categoryNames[name] || name}新闻
            </h1>

            {articles.length === 0 ? (
                <p style={{textAlign: "center"}}>暂无新闻</p>
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
        </div>
    )
}

export default Category;