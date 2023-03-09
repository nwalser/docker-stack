import { readable, writable, type Readable } from "svelte/store";
import type { Stack } from "./StackModel";
import stacks from "./stacks.json"

export let stackStore = readable<Stack[]>(stacks);