import { readable, writable, type Readable } from "svelte/store";
import type { StackPage } from "./StackPageModel";
import stackPages from "./stackPages.json";


export function getStackPage(stackId: string) : StackPage | undefined {
    return getStackPages().find(s => s.id == stackId);
}


export function getStackPagesUsingImage(image: string){
    return getStackPages().filter(s => s.compose.services.some(s => s.image == image));
}

export function getStackPages() : StackPage[] {
    return stackPages;
}