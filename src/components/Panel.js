import React from 'react';

class Panel extends React.Component {
    
    render() {
        return (
        <div className={`player-${this.props.id}-panel ${this.props.isActive ? "active" : ""}`}>
            <div className="player-name">{this.props.gamePlaying || !this.props.isActive ? `Player ${this.props.id + 1}` : this.props.outcome}</div>
            <div className="player-score">{this.props.playerScore[this.props.id]}</div>
            <div className="player-current-box">
                <div className="player-current-label">Current</div>
                <div className="player-current-score">{this.props.isActive ? this.props.roundScore : 0}</div>
            </div>
        </div>
        )
    }
}
export default Panel;

