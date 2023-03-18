import type { Image, ImagePage } from "./ImageModel";
import { parse } from "toml";
import Fuse from 'fuse.js'

let imageModules = import.meta.glob('./../data/images/*.toml', { as: 'raw', eager: true });

export function getImages(): Image[] {
    let images: Image[] = [];

    for (const key in imageModules) {
        const indexedItem = imageModules[key];
        let image: Image = parse(indexedItem);
        images.push(image);
    }

    return images;
}

export function getImage(name: string, tag: string): Image {
    return getImages().find(i => i.id == name && i.tag == tag)!;
}

export function getAllTags(name: string): string[] {
    return getImages().filter(i => i.id == name).map(i => i.tag);
}

export function searchImages(search: string): Image[] {
    if (search == "") return getImages();

    const options = {
        includeScore: true,
        keys: ['id', 'image', 'tag', 'page.description']
    }

    const fuse = new Fuse(getImages(), options)

    const result = fuse.search(search)

    return result
        .sort((n1, n2) => n1.score! - n2.score!)
        .map(r => r.item);
}