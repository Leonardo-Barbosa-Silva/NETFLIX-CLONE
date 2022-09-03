const API_KEY = '0cdc52710a96a9bcaaa2a67acaa28967'
const API_BASE = 'https://api.themoviedb.org/3'


// Realiza um fecth na API da TMDB obtendo sempre um JSON especifíco através do endpoint passado.
const fetchMoviesLIst = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`)
    const json = await req.json()
    return json
}

export default {

// Retorna um array de obj cada um com seu "slug", "title" e "items" contendo um obj com um array de obj em "results" (filmes).
    getHomeList: async () => {
        return [
            {
                slug: "originals",
                title: "Originais da Netflix",
                items: await fetchMoviesLIst(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: "trending",
                title: "Recomendados para você",
                items: await fetchMoviesLIst(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: "top-rated",
                title: "Em Alta",
                items: await fetchMoviesLIst(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: "action",
                title: "Ação",
                items: await fetchMoviesLIst(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: "comedy",
                title: "Comédia",
                items: await fetchMoviesLIst(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: "horror",
                title: "Terror",
                items: await fetchMoviesLIst(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: "romance",
                title: "Romance",
                items: await fetchMoviesLIst(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: "documentary",
                title: "Documentarios",
                items: await fetchMoviesLIst(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
            },
        ]
    }
}