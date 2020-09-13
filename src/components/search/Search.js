import React, {useState, useEffect} from 'react';
import {Col, Card, CardBody, CardImg, CardSubtitle, CardTitle, CardText, Form, Row, Container} from 'reactstrap';
import Game from './Game'

const Search = () => {

    const [searchTerms, setSearchTerms] = useState('');
    const [results, setResults] = useState([]);

    const getCategoryName = (value) => {

        // console.log(typeof value, value);

        const gameEnumCategory = [];
        gameEnumCategory.push({"name": "main_game", "value": "0"});
        gameEnumCategory.push({"name": "dlc_addon", "value": "1"});
        gameEnumCategory.push({"name": "expansion", "value": "2"});
        gameEnumCategory.push({"name": "bundle", "value": "3"});
        gameEnumCategory.push({"name": "standalone_expansion", "value": "4"});
        gameEnumCategory.push({"name": "mod", "value": "5"});
        gameEnumCategory.push({"name": "episode", "value": "6"});
        gameEnumCategory.push({"name": "season", "value": "7"});

        let foundCategory = gameEnumCategory.find(category => category.value === value.toString());
        let foundCategoryName = "";

        if (foundCategory) {
            foundCategoryName = foundCategory.name;
        } else {
            foundCategoryName = "No Category Value";
        };

        return foundCategoryName;

    };

    const getStatusName = (value) => {

        // console.log(typeof value, value);

        const gameEnumStatus = [];
        gameEnumStatus.push({"name": "released", "value": "0"});
        gameEnumStatus.push({"name": "alpha", "value": "2"});
        gameEnumStatus.push({"name": "beta", "value": "3"});
        gameEnumStatus.push({"name": "early_access", "value": "4"});
        gameEnumStatus.push({"name": "offline", "value": "5"});
        gameEnumStatus.push({"name": "cancelled", "value": "6"});
        gameEnumStatus.push({"name": "rumored", "value": "7"});

        let foundStatus = gameEnumStatus.find(status => status.value === value.toString());
        let foundStatusName = "";

        if (foundStatus) {
            foundStatusName = foundStatus.name;
        } else {
            foundStatusName = "No Status Value";
        };
        return foundStatusName;

    };



    const fetchGames = (event) => {
        event.preventDefault();

        // https://cors-anywhere.herokuapp.com
        // https://stackoverflow.com/questions/43871637/no-access-control-allow-origin-header-is-present-on-the-requested-resource-whe
        const proxyurl = "https://cors-anywhere.herokuapp.com/";

        const apiKey = process.env.REACT_APP_API_KEY;

        const headers = {
            "Content-Type": "application/json",
            'user-key': apiKey
        };
    
        // const searchTerms = req.params.searchTerms;
        // const searchTerms = "LEGO";
        // const searchTerms = "Halo";
    
        // const testURL = "https://rickandmortyapi.com/api/"
        // const baseURL = testURL;
    
        // Popularity
        const popularityURL = "https://api-v3.igdb.com/games";
        // const popularityBody = "";
        // const popularityFields = "fields name, summary, url, popularity;";
        // const popularityFields = "fields *;";
        const popularityFields = "fields id,alternative_names.*,name,age_ratings.*,alternative_names.*,artworks.*,bundles.*,collection.*,cover.*,dlcs.*,expansions.*,external_games.*,franchise.*,franchises.*,game_engines.*,game_modes.*,genres.*,involved_companies.*,keywords.*,multiplayer_modes.*,parent_game.*,platforms.*,player_perspectives.*,release_dates.*,screenshots.*,similar_games.*,standalone_expansions.*,themes.*,time_to_beat.*,version_parent.*,videos.*,websites.*;";
        // const popularityLimit = "limit 50;";
        // const popularityLimit = "limit 100;";
        const popularityLimit = "limit 200;";
        const popularityOffset = "";
        // const popularityOffset = "offset 10;";
        const popularitySort = " sort popularity desc;";
        // const baseURL = popularityURL;
        // const body = popularityFields + " " + popularityLimit + " " + popularityOffset + " " + popularitySort;
    
        // Search
        const searchURL = "https://api-v3.igdb.com/search";
        // const searchBody = "search \"Halo\"; fields alternative_name,character,checksum,collection,company,description,game,name,person,platform,popularity,published_at,test_dummy,theme;";
        // const searchBody = "search \"LEGO\"; fields alternative_name,character,checksum,collection,company,description,game,name,person,platform,popularity,published_at,test_dummy,theme;";
        // const search = "search \"LEGO\";"
        const search = "search \"" + searchTerms + "\";"
        // console.log("search", search);
        // const searchFields = "fields *;";
        const searchFields = "fields id,alternative_name,name,game.*,game.age_ratings.*,game.alternative_names.*,game.artworks.*,game.bundles.*,game.collection.*,game.cover.*,game.dlcs.*,game.expansions.*,game.external_games.*,game.franchise.*,game.franchises.*,game.game_engines.*,game.game_modes.*,game.genres.*,game.involved_companies.*,game.keywords.*,game.multiplayer_modes.*,game.parent_game.*,game.platforms.*,game.player_perspectives.*,game.release_dates.*,game.screenshots.*,game.similar_games.*,game.standalone_expansions.*,game.themes.*,game.time_to_beat.*,game.version_parent.*,game.videos.*,game.websites.*;";
        // const searchLimit = "limit 50;";
        // const searchLimit = "limit 100;";
        const searchLimit = "limit 200;";
        const searchOffset = "";
        // const searchOffset = "offset 10;";
        const whereClause = ""
        // const whereClause = "where game = 28540;"
        // const whereClause = "where category = 0;" // Doesn't work?
        const baseURL = searchURL;
        const body = search + " " + searchFields + " " + whereClause + " " + searchLimit + " " + searchOffset;
    
        // Recent Games
        const recentURL = "https://api-v3.igdb.com/games";
        // const recentBody = "";
        const recentFields = "fields id,alternative_names.*,name,age_ratings.*,alternative_names.*,artworks.*,bundles.*,collection.*,cover.*,dlcs.*,expansions.*,external_games.*,franchise.*,franchises.*,game_engines.*,game_modes.*,genres.*,involved_companies.*,keywords.*,multiplayer_modes.*,parent_game.*,platforms.*,player_perspectives.*,release_dates.*,screenshots.*,similar_games.*,standalone_expansions.*,themes.*,time_to_beat.*,version_parent.*,videos.*,websites.*;";
        // const recentLimit = "limit 50;";
        // const recentLimit = "limit 100;";
        const recentLimit = "limit 200;";
        const recentOffset = "";
        // const recentOffset = "offset 10;";
        const recentSort = "sort date asc;";
        // const baseURL = recentURL;
        // const body = recentFields + " " + recentLimit + " " + recentOffset + " " + recentSort;
    
        fetch(proxyurl + baseURL, {
            method: "POST",
            headers:  headers, // {
            //     'Content-Type': 'application/json',
            //     'user-key': apiKey
            // },
            body: body
            })
        .then(res => res.json())
        .then(json => {setResults(json);}) // console.log(json);
        .catch(err => console.log(err))
        
    };

    // useEffect(() => {
    //     fetchGames();
    // }, []);

    useEffect(() => {
        console.log(results);
    }, [results]);

    const coverImage = (game) => {
        return (
            <>
            {game.cover ? <img src={game.cover.url} alt={game.name} /> : ''}
            </>
        );
    };

    const card = (game) => {
        return (
        // <Col xs="2">
        <>
        {game.game ?
            // game.game.category == 0 ?
            // game.game.status != undefined ?
            <Card id={game.id}>
                <CardBody>
                {game.game ? coverImage(game.game) : ''}
                {game.game ? <CardTitle><a href={game.game.url} target="_blank">{game.name}</a></CardTitle>: <CardTitle>{game.name}</CardTitle>}
                {game.alternative_name && game.alternative_name !== "" ? <CardSubtitle>Alternate {game.alternative_name}</CardSubtitle> : ''}
                    {/* <Game game={game.game} /> */}
                    {/* {game.game ? <CardText>{game.game.slug}</CardText> : ''} */}
                    {/* {game.game ? <CardText><a href={game.game.url} target="_blank">{game.name}</a></CardText> : ''} */}
                    {game.game ? <CardText>{game.game.category} {getCategoryName(game.game.category)}</CardText> : ''}
                    {game.game.status != undefined ? <CardText>{game.game.status} {getStatusName(game.game.status)}</CardText> : ''}
                    {game.game.summary ? <CardText>{game.game.summary}</CardText> : ''}
                </CardBody>
            </Card>
            // : ''
            // : ''
        : ''
        }
        </>
        // </Col>
        );
    };

    return (
        <Container>
        <Row>
        <Form onSubmit={fetchGames}>
        <input type="text" id="searchTerms" placeholder="Search Terms" value={searchTerms} onChange={(e) => {/*console.log(e.target.value); */setSearchTerms(e.target.value);}} />
        <button type="submit">Search</button>
        </Form>
        </Row>
        <Row>
            {results.length > 0 ? results.map(game => card(game)) : ''}
        </Row>
        </Container>
    );
};

export default Search;