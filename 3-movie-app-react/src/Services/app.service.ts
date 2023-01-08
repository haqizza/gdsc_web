/// <reference path="./dataTypes.d.ts" />
import * as AnimeData from "AnimeData";

class AppService {
    private api: String = 'https://api.jikan.moe/v4/';

    public async getSingle(id: String): Promise<any> {
        let movie;
        await fetch(this.api + 'anime/' + id)
            .then((resp) => resp.json())
            .then((data) => {
                movie = data.data;
            });

        return movie;
    };

    public async getUpcoming(): Promise<any>{
        let movies;
        await fetch(this.api + 'seasons/upcoming')
            .then((resp) => resp.json())
            .then((data) => {
                movies = data.data;
            });

        return movies;
    };

    public async getAiring(): Promise<any> {
        let movies;
        await fetch(this.api + 'seasons/now')
            .then((resp) => resp.json())
            .then((data) => {
                movies = data.data;
            });

        return movies;
    };

    public async getTop(): Promise<any> {
        let movies;
        await fetch(this.api + 'top/anime?filter=airing&limit=10')
            .then((resp) => resp.json())
            .then((data) => {
                movies = data.data;
            });

        return movies;
    };

    public async transformData(response: any) {
        let datas: AnimeData.CardData[] = [];

        await response.map((data: AnimeData.Datum) => (
            datas.push({
                mal_id: data.mal_id,
                image_url: data.images.jpg.image_url,
                title: data.title,
                type: data.type == null ? 'Unknown' : data.type,
                episodes: data.episodes == null ? 0 : data.episodes
            })
        ));

        return datas;
    }
}

export default AppService;