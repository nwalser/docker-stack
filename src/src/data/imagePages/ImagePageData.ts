import type { ImagePage } from "./ImagePageModel";
import multiVersionPages from "./imagePages.json"

export function getImagePages(): ImagePage[] {
    return multiVersionPages.flatMap(m => {
        return m.tags.map(t => {
            let casted: ImagePage = { ...m, tag: t };
            return casted;
        });
    });
}

export function getImagePage(name: string, tag: string): ImagePage | undefined {
    return getImagePages().find(ip => ip.name == name && ip.tag == tag);
}
