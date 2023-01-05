
const setHorizontalSection = async (node, type) => {
    let selectedNode = $(node);

    let api = new API();

    let movies = await api.getList(type);
    

    movies.map((data) => {
        card = $(`<a href="/detail.html?id=` + data.mal_id + `">
                <div class="relative flex flex-col justify-end h-96 w-52 my-8 mx-4 bg-gray-700 rounded-lg overflow-hidden">
                    <img    
                        src="` + data.images.jpg.image_url +`"
                        alt=""
                        class="object-cover h-full mb-16"
                    >
                    <div class="absolute bottom-0 left-0 right-0 p-2 pt-20 bg-gradient-to-t from-slate-900 via-gray-800 drop-shadow-xl">

                        <div class="text-lg text-ellipsis overflow-hidden line-clamp-2">
                            ` + data.title +`
                        </div>
                        <div  class="text-sm">
                            <span>` + data.type + `</span> | 
                            <span>` + (data.episodes == null ? '?' : data.episodes) + ` Episodes</span>
                        </div>
                    </div>
                </div>
            </a>`)
        selectedNode.append(card);
    })

}

const setSingle = async () => {
    let singleNode = $('#detailContainer');

    let api = new API();

    const urlParams = new URLSearchParams(window.location.search);

    let data = await api.getSingle(urlParams.get('id'));

    let genres = studios = '';

    data.genres.forEach((value, idx) => { genres += (idx != 0 ? ', ': '') + value.name });

    data.studios.forEach((value, idx) => { studios += (idx != 0 ? ', ': '') + value.name });

    let layout = $(`<div id="title" class="p-2 font-base text-3xl">
            ` + data.title + `
        </div>
        <div id="title" class="p-2 font-base text-xl">
            ` + data.title_japanese + `
        </div>
        <div class="flex flex-row">
            <div class="relative w-72 mr-8 mx-2 my-4">
                <img
                    src="` + data.images.jpg.image_url + `"
                    alt="` + data.title + `"
                    class="w-96 h-auto rounded-md"
                >
                <div class="absolute top-0 right-0 rounded-bl-xl p-4 bg-gray-800/50">
                    <div class="mb-2 font-medium">
                        <span class="text-5xl">` +
                        (data.score != null ? data.score : '?')
                        + `</span>
                    </div>
                </div>
            </div>
            <div class="flex w-3/4 flex-col justify-start">
                <table class="w-auto">
                    <tr>
                        <td class="py-2 pr-8 font-bold">Synopsis</td>
                        <td class="font-light">` +
                        (data.synopsis != null ? data.synopsis : 'Unknown')
                         + `</td>
                    </tr>
                    <tr>
                        <td class="py-2 pr-8 font-bold">Type</td>
                        <td class="font-light">` + data.type + `</td>
                    </tr>
                    <tr>
                        <td class="py-2 pr-8 font-bold">Episodes</td>
                        <td class="font-light">` +
                        (data.episodes != null ? data.episodes : 'Unknown')
                        + `</td>
                    </tr>
                    <tr>
                        <td class="py-2 pr-8 font-bold">Aired</td>
                        <td class="font-light">` + 
                        (data.aired.from != null ? new Date(data.aired.from).toLocaleString() : 'Unknown')
                        + `  -  ` +
                        (data.aired.to != null ? new Date(data.aired.to).toLocaleString() : 'Unknown')
                        + `</td>
                    </tr>
                    <tr>
                        <td class="py-2 pr-8 font-bold">Status</td>
                        <td class="font-light">` + data.status + `</td>
                    </tr>
                    <tr>
                        <td class="py-2 pr-8 font-bold">Studios</td>
                        <td class="font-light">` + studios + `</td>
                    </tr>
                    <tr>
                        <td class="py-2 pr-8 font-bold">Source</td>
                        <td class="font-light">` + data.source + `</td>
                    </tr>
                    <tr>
                        <td class="py-2 pr-8 font-bold">Genres</td>
                        <td class="font-light">` + genres + `</td>
                    </tr>
                    <tr>
                        <td class="py-2 pr-8 font-bold">Duration</td>
                        <td class="font-light">` + data.duration + `</td>
                    </tr>
                    <tr>
                        <td class="py-2 pr-8 font-bold">Rating</td>
                        <td class="font-light">` + 
                        (data.rating != null ? data.rating : 'Unknown')
                        + `</td>
                    </tr>
                    <tr>
                        <td class="py-2 pr-8 font-bold">Season</td>
                        <td class="font-light">` +
                        (data.season != null ? data.season : 'Unknown')
                        + `</td>
                    </tr>
                    <tr>
                        <td class="py-2 pr-8 font-bold">Year</td>
                        <td class="font-light">` + 
                        (data.year != null ? data.year : 'Unknown')
                        + `</td>
                    </tr>
                </table>
            </div>
        </div>`);

        singleNode.append(layout);
}
