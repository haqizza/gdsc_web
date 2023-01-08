import React, { useEffect, useState } from "react";
import AppService from "../../Services/app.service";
/// <reference path="../../Services/dataTypes.d.ts" />
import * as AnimeData from "AnimeData";
import CardListTable from "../../Components/CardListTable";



const CurrentlyAiring = () => {
    const appService = new AppService();
    
    const [animeAiring, setAnimeAiring] = useState<AnimeData.CardData[]>([]);

 
    const getAiring = async () => {
        let response: AnimeData.Datum[] = await appService.getAiring();

        const data: AnimeData.CardData[] = await appService.transformData(response);
        
        setAnimeAiring(data);
    }


    useEffect(() => {
        getAiring();
    }, []);

    return(
        <>
            <div className="p-2 font-base text-center text-4xl font-medium">
                Airing
            </div>
            <CardListTable
                title="Currently Airing"
                data={ animeAiring }
            />
        </>
    )
}

export default CurrentlyAiring;