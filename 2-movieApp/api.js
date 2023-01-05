
class API {
    constructor (){
        this.API = {
            api: 'https://api.jikan.moe/v4/',
            movieData: []
        }
        ;
    };

    async getSingle (id) {
        let movie;
        await fetch('https://api.jikan.moe/v4/anime/' + id)
            .then((resp) => resp.json())
            .then((data) => {
                movie = data.data;
            });

        return movie;
    };


    async getList (val) {
        return await val == 'up' ? 
            this.getUpcoming()
            : 
            val == 'air' ?
                this.getAiring() 
                :
                this.getTop();
    }

    async getUpcoming () {
        let movies;
        await fetch('https://api.jikan.moe/v4/seasons/upcoming')
            .then((resp) => resp.json())
            .then((data) => {
                movies = data.data;
            });

        return movies;
    };

    async getAiring () {
        let movies;
        await fetch('https://api.jikan.moe/v4/seasons/now')
            .then((resp) => resp.json())
            .then((data) => {
                movies = data.data;
            });

        return movies;
    };

    async getTop () {
        let movies;
        await fetch('https://api.jikan.moe/v4/top/anime?filter=airing&limit=10')
            .then((resp) => resp.json())
            .then((data) => {
                movies = data.data;
            });

        return movies;
    };


};