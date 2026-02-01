const API_KEY = "b36f85dfa03448c9be9f6175986bc2c4";
const BASE_URL = "https://newsapi.org/v2";

export async function fetchTopHeadlines(country = "us") {
    const response = await fetch(`${BASE_URL}/top-headlines?country=${country}&apiKey=${API_KEY}`);
    return response.json();
}

export async function fetchByCategory(category) {
    const response = await fetch(`${BASE_URL}/top-headlines?category=${category}&apiKey=${API_KEY}`);
    return response.json();
}

export async function searchNews(keyword) {
    const response = await fetch(`${BASE_URL}/everything?q=${keyword}&apiKey=${API_KEY}`);
    return response.json();
}