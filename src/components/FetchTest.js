import React, {useEffect} from 'react';

const FetchTest = () => {

    const fetchGames = () => {

        const apiKey = process.env.API_KEY;

        const headers = {
            "Content-Type": "application/json",
            'user-key': apiKey
        };
    
        // const searchTerms = req.params.searchTerms;
        const searchTerms = "LEGO";
    
        // const testURL = "https://rickandmortyapi.com/api/"
        // const baseURL = testURL;
    
        // Popularity
        // const popularityURL = "https://api-v3.igdb.com/games";
        // const popularityBody = "";
        // const popularityFields = "fields name, summary, url, popularity; limit 100;";
        // const popularitySort = " sort popularity desc;";
        // const baseURL = popularityURL;
        // const body = popularityBody + " " + popularityFields + " " + popularitySort;
    
        // Search
        const searchURL = "https://api-v3.igdb.com/search";
        // const searchBody = "search \"Halo\"; fields alternative_name,character,checksum,collection,company,description,game,name,person,platform,popularity,published_at,test_dummy,theme;";
        // const searchBody = "search \"LEGO\"; fields alternative_name,character,checksum,collection,company,description,game,name,person,platform,popularity,published_at,test_dummy,theme;";
        // const search = "search \"LEGO\";"
        const search = "search \"" + searchTerms + "\";"
        const fields = "fields *;";
        const limit = "limit 50;";
        const offset = "offset 10;";
        const baseURL = searchURL;
        const body = search + " " + fields + " " + limit + " " + offset;
    
        // Games
        // const gamesURL = "https://api-v3.igdb.com/games";
        // const gamesBody = "";
        // const gamesFields = "fields age_ratings,aggregated_rating,aggregated_rating_count,alternative_names,artworks,bundles,category,checksum,collection,cover,created_at,dlcs,expansions,external_games,first_release_date,follows,franchise,franchises,game_engines,game_modes,genres,hypes,involved_companies,keywords,multiplayer_modes,name,parent_game,platforms,player_perspectives,popularity,pulse_count,rating,rating_count,release_dates,screenshots,similar_games,slug,standalone_expansions,status,storyline,summary,tags,themes,time_to_beat,total_rating,total_rating_count,updated_at,url,version_parent,version_title,videos,websites;";
        // const baseURL = gamesURL;
        // const body = gamesBody + " " + gamesFields;
    
        // https://hackersandslackers.com/making-api-requests-with-nodejs/
        fetch(baseURL, {
            method: "POST",
            headers:  headers, // {
            //     'Content-Type': 'application/json',
            //     'user-key': apiKey
            // },
            body: body
            })
        .then(res => res.json())
        .then(json => console.log(json))
        .catch(err => console.log(err))
        
    };

    useEffect(() => {
        fetchGames();
    }, []);

    return (
        <div>

        </div>
    );
};

export default FetchTest;