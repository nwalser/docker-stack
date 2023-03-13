import type { DockerCompose } from "./DockerComposeModel";

export class StackPage {
    id: string;
    name: string = "";
    description: string = "";
    imageUrl: string = "";

    compose: DockerCompose;

    constructor(id: string, compose: DockerCompose){
        this.id = id;
        this.compose = compose;
    }
}