import Card from "./Card";
import { useEffect, useState } from "react";
/// <reference path="../Services/DataTypes.d.ts" />
import * as AnimeData from "AnimeData";

interface Props {
    title: String
    data: any
}


const CardListTable = (props: Props) => {
    const [cards, setCards] = useState<AnimeData.CardData[]>() ;
    
    
    useEffect(() => {
        setCards(props.data);
    }, [props.data])
    
    
    const cardComponents = cards?.map((data: AnimeData.CardData) => (<Card key={data.mal_id.toString()} data={ data }/>)) 

    return(
        <div id="listContainer" className="mt-14 mb-4 mx-4 p-4 text-white">
            <div className="p-2 font-base text-3xl">
                { props.title }
            </div>
            <div className="flex flex-row overflow-auto">
                <div className="flex flex-row flex-wrap justify-between">
                    { cardComponents }
                </div>
            </div>
        </div>
    )
}

export default CardListTable;