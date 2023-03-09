import { readable } from "svelte/store";
import type { Image } from "./ImageModel";
import images from "./images.json"

export let imagesStore = readable<Image[]>(images);