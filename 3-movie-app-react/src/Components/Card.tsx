import { Link } from "react-router-dom";

interface Props{
    data: any
}

const Card = (props: Props) => {

    return(
        <Link to={ "/movie/"+ props.data.mal_id + "/detail" }>
            <div className="relative flex flex-col justify-end h-96 w-52 my-8 mx-4 bg-gray-700 rounded-lg overflow-hidden">
                <img    
                    src={ props.data.image_url }
                    alt={ props.data.title + ' image' }
                    className="object-cover h-full mb-16"
                />
                <div className="absolute bottom-0 left-0 right-0 p-2 pt-20 bg-gradient-to-t from-slate-900 via-gray-800 drop-shadow-xl">

                    <div className="text-lg text-ellipsis overflow-hidden line-clamp-2">
                        { props.data.title }
                    </div>
                    <div  className="text-sm">
                        <span>{ props.data.type } | </span>
                        <span>{ props.data.episodes } Episodes</span>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Card;