export type PointStatus = 'active' | 'fading' | 'cleared';
export type GameStatus = 'idle' | 'playing' | 'win' | 'gameover';

export interface PointData {
  id: number;
  x: number;
  y: number;
  status: PointStatus;
  zIndex: number;
}