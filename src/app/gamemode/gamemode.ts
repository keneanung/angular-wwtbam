import { Injectable } from "@angular/core";

export type ModeType = "default" | "german" | "germanRisk";

@Injectable({
    providedIn: "root"
})

export class GameMode {
    getCurrentMode(): ModeType {
        const urlParams = new URLSearchParams(window.location.search);
        return <ModeType>urlParams.get("gameMode")
    }
}