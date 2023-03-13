import type { Image } from "./ImageModel";
import multiVersionImages from "./images.json"

export function getImages(): Image[] {
    return multiVersionImages.flatMap(m => {
        return m.tags.map(t => {
            let casted: Image = { ...m, tag: t };

            return casted;
        });
    });
}

export function getImage(name: string, tag: string) {
    return getImages().find(i => i.name == name && i.tag == tag);
}

export function getAllTags(name: string): string[] {
    return getImages().filter(i => i.name == name).map(i => i.tag);
}