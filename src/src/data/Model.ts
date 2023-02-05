export class DockerCompose {
    version: string;
    services: Service[] = [];
    comment: string = "";

    constructor(version: string){
        this.version = version;
    }
}

export class Service {
    name: string;
    image: string;
    tag: string;

    ports: Port[] = [];    
    environmentVariables: EnvironmentVariable[] = [];
    volumes: IVolume[] = [];

    constructor(name: string, image: string, tag: string){
        this.name = name;
        this.image = image;
        this.tag = tag;
    }
}

export class EnvironmentVariable {
    key: string;
    value: string;

    constructor(key: string, value: string){
        this.key = key;
        this.value = value;
    }
}

export class Port {
    host: number;
    container: number;

    constructor(host: number, container: number){
        this.host = host;
        this.container = container;
    }
}

interface IVolume {

}

export class DefaultVolume implements IVolume {
    source: string;
    target: string;

    constructor(source: string, target: string){
        this.source = source;
        this.target = target;
    }
}



export {}