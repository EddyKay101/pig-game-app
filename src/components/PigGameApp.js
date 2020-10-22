import React from 'react';
import Panel from './Panel';
import DiceImage from './DiceImage';
import { NewGame } from './NewGame';
import { RollDice } from './RollDice';
import { Hold } from './Hold';
export default class PigGameApp extends React.Component {

    state = {
        isActivePanel1: false,
        isActivePanel2: false,
        diceRoll: 0,
        roundScore: 0,
        gamePlaying: true,
        activePlayer: 0,
        scores: [0, 0],
        dice: 0,
        outcome: ""
    };

    // Function to handle what panel is active.
    handleNextPlayer = () => {
            if (this.state.activePlayer === 0) {
                this.setState((prevState) => ({
                    activePlayer: prevState.activePlayer = 1
                }))
            } else {
                this.setState((prevState) => ({
                    activePlayer: prevState.activePlayer = 0
                }))
            }
            this.setState((prevState) => ({
                gamePlaying: prevState.gamePlaying = true,
                isActivePanel1: !prevState.isActivePanel1,
                isActivePanel2: !prevState.isActivePanel2,
                roundScore: prevState.roundScore = 0,
                dice: prevState.dice = 0
            }));
        
    }


    // Function to handle roll of dice.
    handleRollDice = () => {
        if (this.state.gamePlaying) {
            this.setState((prevState) => ({
                dice: prevState.dice = Math.floor(Math.random() * 6) + 1
            }))
            if (this.state.dice !== 1) {
                console.log("Dice " + this.state.dice)
                this.setState((prevState) => ({
                    roundScore: prevState.roundScore += this.state.dice
                }))

                console.log("RoundScore " + this.state.roundScore)
            } else {
                console.log('should go to next')
                this.handleNextPlayer();
            }

            this.setState((prevState) => ({
                diceRoll: prevState.diceRoll = this.state.dice
            }));
            console.log("Dice Roll- " + this.state.diceRoll)
        }


    }

    handleHold = () => {
        if (this.state.gamePlaying) {
            this.state.scores[this.state.activePlayer] += this.state.roundScore
            console.log(this.state.scores)

            if (this.state.scores[this.state.activePlayer] >= 20) {
                this.setState((prevState) => ({
                    outcome: prevState.outcome = "Winner!",
                    gamePlaying: prevState.gamePlaying = false,
                    dice: 0,

                }));
            } else {
                this.handleNextPlayer();
            }
        }
        
    }

    componentDidMount() {
        this.setState((prevState) => ({
            isActivePanel1: true,
        }))
    }
    render() {
        return (
            <div>
                <div className="wrapper clearfix">
                    <Panel
                        id={0}
                        isActive={this.state.isActivePanel1}
                        roundScore={this.state.roundScore}
                        playerScore={this.state.scores}
                        outcome={this.state.outcome}
                        gamePlaying={this.state.gamePlaying}
                    />
                    <Panel
                        id={1}
                        isActive={this.state.isActivePanel2}
                        roundScore={this.state.roundScore}

                        playerScore={this.state.scores}
                        outcome={this.state.outcome}
                        gamePlaying={this.state.gamePlaying}
                    />
                    <NewGame />

                    <DiceImage
                        dice={this.state.dice}
                    />
                    <RollDice
                        handleRollDice={this.handleRollDice}
                    />
                    <Hold
                        handleHold={this.handleHold}
                    />
                </div>
            </div>
        )
    }
}


