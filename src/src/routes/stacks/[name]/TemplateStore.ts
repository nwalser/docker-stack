import { readable, writable, type Readable } from "svelte/store";
import type { Template } from "./TemplateModel";
import templates from "./templates.json"

export let templatesStore = readable<Template[]>(templates);