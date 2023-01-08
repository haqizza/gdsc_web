import React, { useEffect, useState } from "react";
import CardListRow from "../../Components/CardListRow";
import AppService from "../../Services/app.service";
/// <reference path="../../Services/dataTypes.d.ts" />
import * as AnimeData from "AnimeData";
import CardListTable from "../../Components/CardListTable";


const Home = () => {
    const appService = new AppService();
    
    const [animeTop, setAnimeTop] = useState<AnimeData.CardData[]>([]);
    const [animeUpcoming, setAnimeUpcoming] = useState<AnimeData.CardData[]>([]);
    const [animeAiring, setAnimeAiring] = useState<AnimeData.CardData[]>([]);

    const getTop = async () => {
        let response: AnimeData.Datum[] = await appService.getTop();

        const data: AnimeData.CardData[] = await appService.transformData(response);
        
        setAnimeTop(data);
    }

    const getUpcoming = async () => {
        let response: AnimeData.Datum[] = await appService.getUpcoming();

        const data: AnimeData.CardData[] = await appService.transformData(response);
        
        setAnimeUpcoming(data);
    }

    const getAiring = async () => {
        let response: AnimeData.Datum[] = await appService.getAiring();

        const data: AnimeData.CardData[] = await appService.transformData(response);
        
        setAnimeAiring(data);
    }

    useEffect(() => {
        getTop();
        getUpcoming();
        getAiring();
    }, []);

    return(
        <>
            <CardListRow
                title="Currently Top"
                data={ animeTop }
            />
            <CardListRow
                title="Upcoming"
                data={ animeUpcoming }
            />
            <CardListTable
                title="Currently Airing"
                data={ animeAiring }
            />
        </>
    )
}

export default Home;