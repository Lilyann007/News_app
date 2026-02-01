import { NavLink } from "react-router-dom";

function Navbar() {
    const categories = [
        { name: "business" , label: "商业"},
        { name: 'technology', label: '科技' },
        { name: 'entertainment', label: '娱乐' },
        { name: 'sports', label: '体育' },
        { name: 'health', label: '健康' }
    ]
    
    return (
        <nav style={{
            backgroundColor: "#282c34",
            padding: "20px",
            marginBottom: "20px"
        }}>
            <div style={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
                flexWrap: "wrap"
            }}>
                {/* logo/首页链接 */}
                <NavLink
                    to="/"
                    style={{
                        color: "white",
                        textDecoration: "none",
                        fontSize: "24px",
                        fontWeight: "bold"
                    }}
                >
                    📰 新闻聚合
                </NavLink>

                {/* 分类按钮 */}
                <div style={{display: "flex", gap: "10px", flexWrap: "wrap"}}>
                    {categories.map(cat => (
                        <NavLink
                            key={cat.name}
                            to={`/category/${cat.name}`}
                            style={({isActive}) => ({
                                color: "white",
                                backgroundColor: isActive ? "#61dafb ": "#404854",
                                padding: "10px 15px",
                                borderRadius: "5px",
                                textDecoration: "none",
                                transition: "background-color 0.3s"
                            })}
                        >
                            {cat.label}
                        </NavLink>
                    ))}
                </div>

                {/* 搜索按钮 */}
                <NavLink
                    to="/search"
                    style={{
                        color: "white",
                        backgroundColor: "#61dafb",
                        padding: "10px 15px",
                        borderRadius: "5px",
                        textDecoration: "none",
                        marginLeft: "auto"
                    }}
                >
                    🔍 搜索
                </NavLink>
            </div>
        </nav>
    )
}

export default Navbar;