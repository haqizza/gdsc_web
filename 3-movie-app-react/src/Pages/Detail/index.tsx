import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AppService from "../../Services/app.service";
/// <reference path="../../Services/DataTypes.d.ts" />
import * as AnimeData from "AnimeData";


const Detail = () => {
    const appService = new AppService();
    
    const { id } = useParams();

    const [animeSingle, setAnimeSingle] = useState<AnimeData.Datum>();
    const [genreText, setGenreText] = useState<String>();
    const [studioText, setStudioText] = useState<String>();


    const getSingle = async () => {
        let animeSingle: AnimeData.Datum = await appService.getSingle(id!);

        let genres: String = "";
        let studios: String = "";


        animeSingle.genres.map((value: AnimeData.Genre, idx: Number) => 
            (genres += (idx !== 0 ? ', ': '') + value.name )
        );
        setGenreText(genres);

        animeSingle.studios.map((value: AnimeData.Genre, idx: Number) => 
            (studios += (idx !== 0 ? ', ': '') + value.name)
        );

        setStudioText(studios);


        setAnimeSingle(animeSingle);
    }

    useEffect(() => {
        getSingle();
    }, []);

    return(
        <div className="mt-32 mb-12 mx-12 p-8 bg-gray-900 text-white rounded-xl">
            <div id="title" className="p-2 font-base text-3xl">
                { animeSingle?.title }
            </div>
            <div id="title" className="p-2 font-base text-xl">
                { animeSingle?.title_japanese }
            </div>
            <div className="flex flex-row">
                <div className="relative w-72 mr-8 mx-2 my-4">
                    <img
                        src={ animeSingle?.images.jpg.image_url }
                        alt={ animeSingle?.title + " Image" }
                        className="w-96 h-auto rounded-md"
                    />
                    <div className="absolute top-0 right-0 rounded-bl-xl p-4 bg-gray-800/50">
                        <div className="mb-2 font-medium">
                            <span className="text-5xl">
                                { animeSingle?.score != null ? animeSingle?.score : 'U/R' }
                            </span>
                        </div>
                    </div>
                </div>
                <div className="flex w-3/4 flex-col justify-start">
                    <table className="w-auto">
                        <tr>
                            <td className="py-2 pr-8 font-bold">Synopsis</td>
                            <td className="font-light">
                                { animeSingle?.synopsis != null ? animeSingle?.synopsis : 'Unknown' }
                            </td>
                        </tr>
                        <tr>
                            <td className="py-2 pr-8 font-bold">Type</td>
                            <td className="font-light">{ animeSingle?.type }</td>
                        </tr>
                        <tr>
                            <td className="py-2 pr-8 font-bold">Episodes</td>
                            <td className="font-light">
                                { animeSingle?.episodes != null ? animeSingle?.episodes : 'Unknown' }
                            </td>
                        </tr>
                        <tr>
                            <td className="py-2 pr-8 font-bold">Aired</td>
                            <td className="font-light"> 
                                {
                                    (animeSingle?.aired.from != null ? new Date(animeSingle?.aired.from).toLocaleString() : 'Unknown')
                                    + " - " +
                                    (animeSingle?.aired.to != null ? new Date(animeSingle?.aired.to).toLocaleString() : 'Unknown')
                                }
                            </td>
                        </tr>
                        <tr>
                            <td className="py-2 pr-8 font-bold">Status</td>
                            <td className="font-light">{ animeSingle?.status }</td>
                        </tr>
                        <tr>
                            <td className="py-2 pr-8 font-bold">Studios</td>
                            <td className="font-light">{ studioText }</td>
                        </tr>
                        <tr>
                            <td className="py-2 pr-8 font-bold">Source</td>
                            <td className="font-light">{ animeSingle?.source }</td>
                        </tr>
                        <tr>
                            <td className="py-2 pr-8 font-bold">Genres</td>
                            <td className="font-light">{ genreText }</td>
                        </tr>
                        <tr>
                            <td className="py-2 pr-8 font-bold">Duration</td>
                            <td className="font-light">{ animeSingle?.duration }</td>
                        </tr>
                        <tr>
                            <td className="py-2 pr-8 font-bold">Rating</td>
                            <td className="font-light">
                                { animeSingle?.rating != null ? animeSingle?.rating : 'Unknown' }
                            </td>
                        </tr>
                        <tr>
                            <td className="py-2 pr-8 font-bold">Season</td>
                            <td className="font-light">
                                { animeSingle?.season != null ? animeSingle?.season : 'Unknown' }
                            </td>
                        </tr>
                        <tr>
                            <td className="py-2 pr-8 font-bold">Year</td>
                            <td className="font-light">
                                { animeSingle?.year != null ? animeSingle?.year : 'Unknown' }
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Detail;