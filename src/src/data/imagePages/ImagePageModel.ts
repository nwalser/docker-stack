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