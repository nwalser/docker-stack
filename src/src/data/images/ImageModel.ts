export class Image {
    name: string = "";
    tag: string = "";

    possibleVolumes: PossibleVolume[] = [];
    possibleVariables: PossibleVariable[] = [];
    possiblePorts: PossiblePort[] = [];
}

export class PossibleVolume {
    name: string;
    description: string;
    containerPath: string;

    constructor(name: string, description: string, containerPath: string) {
        this.name = name;
        this.description = description;
        this.containerPath = containerPath;
    }
}

export class PossibleVariable {
    name: string;
    defaultValue: string;
    description: string;

    constructor(name: string, defaultValue: string, description: string) {
        this.name = name;
        this.defaultValue = defaultValue;
        this.description = description;
    }
}

export class PossiblePort {
    name: string;
    description: string;
    port: number;

    constructor(name: string, description: string, port: number) {
        this.name = name;
        this.description = description;
        this.port = port;
    }
}