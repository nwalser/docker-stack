import { derived, readable } from "svelte/store";
import type { Image, MultiVersionImage } from "./ImageModel";
import multiVersionImages from "./images.json"

let multiVersionImagesStore = readable<MultiVersionImage[]>(multiVersionImages)

export let imagesStore = derived([multiVersionImagesStore], ([multiVersionImagesStore]) => {
    return multiVersionImages.flatMap(m => {
        return m.tags.map(t => {
            let casted: Image = {...m, tag: t};

            return casted;
        });
    });
});