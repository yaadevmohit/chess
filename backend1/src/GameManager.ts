import WebSocket from "ws";

interface Game {
    id: string;
    name: string;
    player1: WebSocket;
    player2: WebSocket

}
export class GamesManager {
    private games: Game[];
    private pendingUser: WebSocket;
    constructor() {
        this.games = [];
    }

    addUser(socket: WebSocket) {}
    removeUser(socket: WebSocket) {}
    private handleMessage() {}
}