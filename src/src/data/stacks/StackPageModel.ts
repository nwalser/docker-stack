import type { DockerCompose } from "./DockerComposeModel";

export class Stack {
    id: string;
    name: string = "";
    description: string = "";
    imageUrl: string = "";

    compose: DockerCompose;
    exposedPorts: ExposedPort[] = [];

    constructor(id: string, compose: DockerCompose) {
        this.id = id;
        this.compose = compose;
    }
}

export class ExposedPort {
    name: string = "";
    description: string = "";

    port: number = 0;
    webInterface: boolean = false;
}