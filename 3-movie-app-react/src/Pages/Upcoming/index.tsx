import React, { useEffect, useState } from "react";
import AppService from "../../Services/app.service";
/// <reference path="../../Services/dataTypes.d.ts" />
import * as AnimeData from "AnimeData";
import CardListTable from "../../Components/CardListTable";



const Upcoming = () => {
    const appService = new AppService();
    
    const [animeUpcoming, setAnimeUpcoming] = useState<AnimeData.CardData[]>([]);

 
    const getUpcoming = async () => {
        let response: AnimeData.Datum[] = await appService.getUpcoming();

        const data: AnimeData.CardData[] = await appService.transformData(response);
        
        setAnimeUpcoming(data);
    }


    useEffect(() => {
        getUpcoming();
    }, []);

    return(
        <>
            <div className="p-2 font-base text-center text-4xl font-medium">
                Upcoming
            </div>
            <CardListTable
                title="Upcoming"
                data={ animeUpcoming }
            />
        </>
    )
}

export default Upcoming;