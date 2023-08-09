import * as BABYLON from "@babylonjs/core/Legacy/legacy";
import { Engine, Scene } from "@babylonjs/core";

const canvas = document.getElementById("zeros") as HTMLCanvasElement;
const engine = new Engine(canvas, true);
const createScene = function () {
    const scene = new BABYLON.Scene(engine);

    var camera = new BABYLON.ArcRotateCamera(
        "Camera",
        -Math.PI / 2.5,
        Math.PI / 3,
        8,
        BABYLON.Vector3.Zero(),
        scene
    );
    camera.attachControl(canvas, true);
    var light1 = new BABYLON.DirectionalLight(
        "DirectionalLight",
        new BABYLON.Vector3(0, -1, 1),
        scene
    );
    var light2 = new BABYLON.HemisphericLight(
        "HemiLight",
        new BABYLON.Vector3(0, 1, 0),
        scene
    );
    light1.intensity = 0.75;
    light2.intensity = 0.5;
    // var box = BABYLON.MeshBuilder.CreateBox("box", { size: 2 }, scene);
    // box.position.x = 2;
    // box.position.y = 1;
    // box.material = new BABYLON.StandardMaterial("mat", scene);
    // box.material.diffuseColor = BABYLON.Color4.FromHexString("#FF0000"); 
    const numBoxes = 8;
    const boxes = [];
    
    for (let i = 0; i < numBoxes; i++) {
      const box = BABYLON.MeshBuilder.CreateBox('box' + i, { size: 2 }, scene);
      boxes.push(box); 
    }

    for (let i = 0; i < numBoxes; i++) {
      boxes[i].position.x = (i & 4) / 4 * 2.1 - 1; 
      boxes[i].position.y = (i & 2) / 2 * 2.1 - 1;
      boxes[i].position.z = (i & 1) * 2.1;
      
      boxes[i].material = new BABYLON.StandardMaterial('mat' + i);
      boxes[i].material!.alpha = 0.1 + 0.8 * Number(i == 6); 
    }
    return scene;
};
const scene = createScene();

engine.runRenderLoop(function () {
    scene.render();
});

window.addEventListener("resize", function () {
    engine.resize();
});