import { Injectable } from "@angular/core";

export type ModeType = "default" | "german" | "germanRisk";

@Injectable({
    providedIn: "root"
})

export class GameMode {
    public readonly currentMode: ModeType;
    constructor(){
        const urlParams = new URLSearchParams(window.location.search);
        this.currentMode = <ModeType>urlParams.get("gameMode")
    }
}