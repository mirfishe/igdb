import React, {useState, useEffect} from 'react';
import {Col, Card, CardBody, CardTitle, CardText} from 'reactstrap';

const Game = (props) => {

    const [game, setGame] = useState(props);
    // const [gameDataFound, setGameDataFound] = useState(false);

    console.log(props);
    // let gameRecord = props.game;
    // console.log("gameRecord", gameRecord);
    // let gameItem = gameRecord.game;
    // console.log("gameItem", gameItem);

    // useEffect(() => {
    //     if (game) {
    //       setGameDataFound(true);
    //     }
    //   }, [game]);

    // const cardBody = () => {
    //     return (
    //     <CardBody>
    //         {/* <CardText>Alternate Name {gameRecord.alternative_name}</CardText>
    //         {gameItem.hasOwnProperty('slug') ? <CardText>Slug {gameItem.slug}</CardText> : ''}
    //         {gameItem.hasOwnProperty('url') ? <CardText>Url {gameItem.url}</CardText> : ''} */}
    //         <CardText>Alternate Name {props.game.alternative_name}</CardText>
    //         {props.game.game.hasOwnProperty('slug') ? <CardText>Slug {props.game.game.slug}</CardText> : ''}
    //         {props.game.game.hasOwnProperty('url') ? <CardText>Url {props.game.game.url}</CardText> : ''}
    //     </CardBody>
    //     );
    // };

    return (
        <>
            {/* {gameItem.hasOwnProperty('slug') ? <CardText>Slug {gameItem.slug}</CardText> : ''}
            {gameItem.hasOwnProperty('url') ? <CardText>Url {gameItem.url}</CardText> : ''} */}
            {props.game.game.hasOwnProperty('slug') ? <CardText>Slug {props.game.game.slug}</CardText> : ''}
            {props.game.game.hasOwnProperty('url') ? <CardText>Url {props.game.game.url}</CardText> : ''}
        </>
    );
};

export default Game;