import type { DockerCompose, KeyValue, Network, NetworkLink, Port, Service, Volume, VolumeLink } from "./Model";
import { Document } from 'yaml';

export function stringifyDockerCompose(model: DockerCompose): string {
    return String(serializeDockerCompose(model));
}


function serializeDockerCompose(compose: DockerCompose) : Document{
    let document = new Document({
        version: compose.version,
        services: serializeServices(compose.services),
        volumes: serializeVolumes(compose.volumes),
        networks: serializeNetworks(compose.networks)
    });

    return document;
}

function serializeVolumes(volumes: Volume[]) : Document {
    var indexedArray: {[key: string]: Document} = {}

    volumes.forEach((v) => indexedArray[v.id] = serializeVolume(v))

    let document = new Document(indexedArray);

    return document;
}

function serializeVolume(volume: Volume): Document {
    let document = new Document({
        name: volume.name,
        driver: volume.driver,
    });

    if(volume.externalName !== ""){
        document.add(document.createPair("external", { name: volume.externalName }))
    }
    
    if(volume.labels.some(f => true)){
        document.add(document.createPair("labels", serializeKeyValuePairs(volume.labels)))
    }

    return document;
}

function serializeKeyValuePairs(pairs: KeyValue[]) : Document {
    let document = new Document({});

    pairs.forEach(p => {
        document.add(document.createPair(p.key, p.value));
    });

    return document;
}

function serializeNetworks(networks: Network[]) : Document {
    var indexedArray: {[key: string]: Document} = {}

    networks.forEach((n) => indexedArray[n.id] = serializeNetwork(n))

    let document = new Document(indexedArray);

    return document;
}

function serializeNetwork(network: Network) : Document {
    let document = new Document({
        name: network.name,
        driver: network.driver,
    });

    if(network.externalName !== ""){
        document.add(document.createPair("external", { name: network.externalName }))
    }
    
    if(network.labels.some(f => true)){
        document.add(document.createPair("labels", serializeKeyValuePairs(network.labels)))
    }

    if(network.driverOptions.some(f => true)){
        document.add(document.createPair("driver_opts", serializeKeyValuePairs(network.driverOptions)))
    }

    return document;
}



function serializeServices(services: Service[]){
    var indexedArray: {[key: string]: Document} = {}

    services.forEach((s) => indexedArray[s.id] = serializeService(s))

    let document = new Document(indexedArray);

    return document;
}

function serializeService(service: Service) : Document {
    let document = new Document({
        image: service.image + ":" + service.tag,
        ports: serializeServicePorts(service.ports),
        environment: serializeServiceEnvironment(service.environmentVariables),
        volumes: serializeServiceVolumes(service.volumeIds),
        networks: serializeServiceNetworks(service.networkIds)
    });

    return document;
}

function serializeServiceNetworks(networkIds: NetworkLink[]) : Document {
    let document = new Document(networkIds.map(n => n.networkId));

    return document;}

function serializeServiceEnvironment(environment: KeyValue[]) : Document {
    let document = new Document(environment.map(e => e.key + ":" + e.value));

    return document;
}

function serializeServiceVolumes(volumeIds: VolumeLink[]) : Document {
    let document = new Document(volumeIds.map(v => v.volumeId + ":" + v.mountPath));

    return document;
}

function serializeServicePorts(ports: Port[]) : Document {
    let document = new Document(ports.map(e => e.host + ":" + e.container));

    return document;
}



export { }