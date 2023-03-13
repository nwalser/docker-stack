import type { ImagePage } from "./ImagePageModel";
import multiVersionPages from "./imagePages.json"
import Fuse from 'fuse.js'

export function getImagePages(): ImagePage[] {
    return multiVersionPages.flatMap(m => {
        return m.tags.map(t => {
            return { ...m, tag: t } as ImagePage;
        });
    });
}

export function getImagePage(name: string, tag: string): ImagePage | undefined {
    return getImagePages().find(ip => ip.name == name && ip.tag == tag);
}

export function searchImagePages(search: string) {
    if(search == "") return getImagePages();

    const options = {
        includeScore: true,
        keys: ['name', 'tag', 'description']
    }

    const fuse = new Fuse(getImagePages(), options)

    const result = fuse.search(search)

    return result
        .sort((n1, n2) => n1.score! - n2.score!)
        .map(r => r.item);
}