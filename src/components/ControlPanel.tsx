import React from "react";
import type { GameStatus } from "../types/game.types";

interface Props {
    pointsCount: number;
    onPointsCountChange: (count: number) => void;
    time: number;
    gameStatus: GameStatus;
    onReStart: () => void;
    isAutoPlay: boolean;
    onToggleAutoPlay: () => void;
}

const ControlPanel: React.FC<Props> = ({ 
    pointsCount, onPointsCountChange, gameStatus, onReStart, isAutoPlay, onToggleAutoPlay, time 

}) => {
    let statusColor = 'black';
    let statusText = "Let's Play!";

    if (gameStatus === 'win') { statusColor = 'green'; statusText = 'You Win!'; }
    else if (gameStatus === 'gameover') { statusColor = 'red'; statusText = 'Game Over!'; }

    return (
        <div style={{ marginBottom: '20px'}}>
            <h2 style={{ color: statusColor, margin: '0 0 15px 0' }}>{statusText}</h2>

            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                <label style = {{ width: '80px', fontWeight: 'bold' }}>Points Count:</label>
                <input
                    type="number"
                    value={pointsCount}
                    onChange={(e) => onPointsCountChange(parseInt(e.target.value) || 0)}
                    disabled={gameStatus === 'playing'}
                    style={{ width: '150px', padding: '5px', border: '1px solid #ccc' }}
                />
            </div>

            <div style={{display: 'flex', alignItems:'center', marginBottom: '15px'}}>
                <label style={{ width: '80px', fontWeight: 'bold' }}>Time:</label>
                <span>{time.toFixed(1)}s</span>
            </div>

            <div style={{ display: 'flex', gap: '10px' }}>
                <button
                    onClick={onReStart}
                    style={{ padding: '10px 20px', cursor: 'pointer', border: '2px solid black' }}
                    >
                        {gameStatus === 'playing' ? 'Restart' : 'Start'}
                    </button>
                <button
                    onClick={onToggleAutoPlay}
                    style={{ padding: '10px 20px', cursor: 'pointer', border: '2px solid black' }}
                >
                    {isAutoPlay ? 'Pause' : 'Play'}
                </button>
            </div>

        </div>
    );
}

export default ControlPanel;