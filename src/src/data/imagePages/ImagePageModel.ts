export class ImagePage {
    name: string;
    tag: string;

    description: string;
    similarImages: string[] = [];

    stackSpotlight: string;

    constructor(name: string, tag: string, description: string, stackSpotlight: string){
        this.name = name;
        this.tag = tag;
        this.description = description;
        this.stackSpotlight = stackSpotlight;
    }
}