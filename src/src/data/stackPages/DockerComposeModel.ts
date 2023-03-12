export class DockerCompose {
    version: string;
    services: Service[] = [];
    volumes: Volume[] = [];
    networks: Network[] = [];
    comment: string = "";

    constructor(version: string){
        this.version = version;
    }
}

export class Service {
    id: string;
    image: string;
    tag: string;

    ports: Port[] = [];    
    environmentVariables: KeyValue[] = [];
    volumeIds: VolumeLink[] = [];
    networkIds: NetworkLink[] = [];

    constructor(id: string, image: string, tag: string){
        this.id = id;
        this.image = image;
        this.tag = tag;
    }
}

export class VolumeLink {
    volumeId: string;
    mountPath: string;

    constructor(volumeId: string, mountPath: string){
        this.volumeId = volumeId;
        this.mountPath = mountPath;
    }
}

export class NetworkLink{
    networkId: string;

    constructor(networkId: string){
        this.networkId = networkId;
    }
}

export class Volume {
    id: string;
    name: string = "";
    driver: string = "local";
    externalName: string = "";
    labels: KeyValue[] = [];

    constructor(id: string){
        this.id = id;
    }
}

export class Network {
    id: string;
    name: string = "";
    externalName: string = "";

    driver: string = "bridge";
    driverOptions: KeyValue[] = [];

    labels: KeyValue[] = [];

    constructor(id: string){
        this.id = id;
    }
}

export class KeyValue {
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

export {}