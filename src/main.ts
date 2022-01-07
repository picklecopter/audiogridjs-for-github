/*
1. Global vars
2. collections of data
3. collections of functions
4. Using pieces 1-3 for stage 2 complexity
5. Assembling into final complexity
*/

let h = 8;
let w = 12;
const GLOB = { // Universal constants
    HEIGHT: h, //Height / Y
    WIDTH: w, //Width  / X
    COUNT: h * w,
    REFGRID: new Grid(w, h),
    TILEPX: 40,
    SPACING: 0,
    container_div: "#layer_bg",
    LOWER: "abcdefghijklmnopqrstuvqxyz",
    UPPER: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
}
const MAPS = { // Reality arisen from constants
    id2cell: new Map(),
    cell2val: new Map()
}
// const FUN = { // Utility functions that underly reality
//     d: function (n) {
//         return Math.floor(n * Math.random()) + 1;
//     }
// }

class Nav {
    static directions(id: number) {
        return {
            above: id - GLOB.WIDTH,
            below: id + GLOB.WIDTH,
            left: id - 1,
            right: id + 1
        }
    }
    static zDivrections = function (div: HTMLDivElement) {
        let id = Number(div.id.substring(1));
        return {
            above: id - GLOB.WIDTH,
            below: id + GLOB.WIDTH,
            left: id - 1,
            right: id + 1
        }
    }
}

function TurnOnButtons() {
    // document.getElementById("b0").addEventListener("click", stages.reset);
    // document.getElementById("b1").addEventListener("click", aComp);
    // document.getElementById("b2").addEventListener("click", SPELLS.CrazyTiles);
    // document.getElementById("b3").addEventListener("click", WriteNumber);
    (document.getElementById("b4") as HTMLButtonElement).value = "Play";
    document.getElementById("b4").addEventListener("click", musicalTesting);

}
import { Composition, Grid, Util } from "./Classes.js";
function stampNumber() {
    let pattern_1 = [
        "11.",
        ".1.",
        ".1.",
        ".1.",
        "111"
    ];
    let pattern_2 = [
        "222",
        "..2",
        ".2.",
        "2..",
        "222"
    ];
    let mainstage = new Composition("layer_2");
    let grod = Grid.fromAscii(pattern_1);
    let stamp = Grid.fromAscii(pattern_2);
    grod.useStamp(stamp);
}

function n2CellTesting(aComp: Composition) {
    let MAX = aComp.nWide * aComp.nTall;
    for (let i = 0; i < MAX; i++) {

        const randomCell = "bg_" + Util.n2Cell(i, aComp.bg);
        console.log("testing", i, randomCell);

    }
}

function CompositionTesting() {
    let comp = new Composition({ comptainer: "layer_bg", TILEPX: GLOB.TILEPX, SPACING: GLOB.SPACING, nWide: GLOB.WIDTH, nTall: GLOB.HEIGHT });
    comp.init();
    // comp.set_bg("B1", 5);
    // debugger;
    // comp.fill(0);
    comp.fillWithFunc(function () {
        return Util.d(10) == 1 ? 1 : 0;
    });
    comp.refresh();
    TurnOnButtons();
    // Util.setIntervalX(() => comp.miniRando(10), 0, 100);
    comp.miniRando(1000);
    // comp.gameOfLife();
    // n2CellTesting(comp);
}// CompositionTesting();


import Audio from "./Audio.js";
function musicalTesting() {
    let comp = new Composition({ comptainer: "layer_bg", TILEPX: GLOB.TILEPX, SPACING: GLOB.SPACING, nWide: GLOB.WIDTH, nTall: GLOB.HEIGHT });
    comp.init();
    // comp.set_bg("B1", 5);
    // debugger;
    comp.fill(-1);
    // comp.fillWithFunc(function () {
    //     return Util.d(10) == 1;
    // })
    comp.refresh();
    // TurnOnButtons();

    Audio.mp3Visualizer(comp);
    // Audio.visualizer(comp);
    // musicer.audio();
    // var audioCtx = new (window.AudioContext)();
    // var analyser = audioCtx.createAnalyser();
    // // source = audioCtx.createMediaStreamSource(stream);
    // // source.connect(analyser);
    // // analyser.connect(distortion);
    // // distortion.connect(audioCtx.destination);

    // analyser.fftSize = 2048;
    // var bufferLength = analyser.frequencyBinCount;
    // var dataArray = new Uint8Array(bufferLength);
};
export default { TurnOnButtons }

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// let test = visualizer();
// test.getAudio();
// musicalTesting();