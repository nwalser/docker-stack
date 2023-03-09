import { DockerCompose } from "./Model";

export class Stack {
    name: string = "";
    description: string = "";

    compose: DockerCompose = new DockerCompose("");
}