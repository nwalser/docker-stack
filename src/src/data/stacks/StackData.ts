import { readable, writable, type Readable } from "svelte/store";
import type { Stack } from "./StackPageModel";
import Fuse from 'fuse.js'
import { parse } from "toml";

let stackModules = import.meta.glob('./../data/stacks/*.toml', { as: 'raw', eager: true });

export function getStack(stackId: string): Stack | undefined {
    return getStacks().find(s => s.id == stackId);
}


export function getStacksByImage(image: string) {
    return getStacks().filter(s => s.compose.services.some(s => s.image == image));
}

export function getStacks(): Stack[] {
    let stacks: Stack[] = [];

    for (const key in stackModules) {
        const indexedItem = stackModules[key];
        let stack: Stack = parse(indexedItem);
        stacks.push(stack);
    }

    return stacks;
}

export function searchStacks(search: string) {
    if (search == "") return getStacks();

    const options = {
        includeScore: true,
        keys: ['name', 'description']
    }

    const fuse = new Fuse(getStacks(), options)

    const result = fuse.search(search)

    return result
        .sort((n1, n2) => n1.score! - n2.score!)
        .map(r => r.item);
}