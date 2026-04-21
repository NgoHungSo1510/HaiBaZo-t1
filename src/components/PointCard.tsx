import React from "react";
import type { PointData } from "../types/game.types";

interface Props {
    data: PointData
    pointSize: number;
    onClick: (id: number) => void;
    onFaded: (id: number) => void;
}

const PointCard: React.FC<Props> = ({ data, pointSize, onClick, onFaded }) => {
    if (data.status === 'cleared') return null;

    const isFading = data.status === 'fading';

    return ( 
        <div
            onClick={() => onClick(data.id)}
            onTransitionEnd={() => onFaded(data.id)}
            style={{
                position: 'absolute',
                left: `${data.x}px`,
                top: `${data.y}px`,
                width: `${pointSize}px`,
                height: `${pointSize}px`,
                zIndex: data.zIndex,
                borderRadius: '50%',
                border: '2px solid black',
                backgroundColor: isFading ? 'rgba(255, 0, 0, 0.5)' : 'white',
                opacity: isFading ? 0 : 1,
                transition: 'opacity 0.5s ease-out, background-color 0.2s',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                fontWeight: 'bold',
                userSelect: 'none',
            }}
        >
            {data.id}
        </div>
    );
}

export default PointCard;