import type { DockerCompose, Service } from "./Model";
import { Document } from 'yaml';

export function stringifyDockerCompose(model: DockerCompose): string {
    return String(serializeDockerCompose(model));
}




function serializeDockerCompose(compose: DockerCompose) : Document{
    let document = new Document({
        version: compose.version,
        services: serializeServices(compose.services)
    });


    return document;
}


function serializeServices(services: Service[]){
    console.log(services);

    var indexedArray: {[key: string]: Service} = {}

    services.forEach((s) => indexedArray[s.name] = s)

    let indexed = services.map(s => {[s.name] = s})


    let document = new Document(indexedArray);

    return document;
}


function serializeService(service: Service) : Document {
    console.log(service);

    let document = new Document({
        name: service.name
    });

    return document;
}




export { }