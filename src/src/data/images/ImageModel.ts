export class Image {
    name: string = "";
    tag: string = "";

    page: ImagePage;

    possibleVolumes: PossibleVolume[] = [];
    possibleVariables: PossibleVariable[] = [];
    possiblePorts: PossiblePort[] = [];
}

export class ImagePage {
    name: string;
    readableName: string;
    tag: string;

    imageUrl: string;

    description: string;
    similarImages: string[] = [];

    stackSpotlight: string;

    constructor(name: string, readableName: string, imageUrl: string, tag: string, description: string, stackSpotlight: string){
        this.name = name;
        this.readableName = readableName;
        this.imageUrl = imageUrl;
        this.tag = tag;
        this.description = description;
        this.stackSpotlight = stackSpotlight;
    }
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