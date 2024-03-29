

declare module "*.txt" {
    const content: string;
    export default content;
}

declare module "*.json" {
    const content:any;
    export default content;
}

declare module "*.jpg" {
    const content:any;
    export default content;
}

declare module "*.png" {
    const content:any;
    export default content;
}

declare module "*.svg" {
    const content:any;
    export default content;
}

declare module "*.css" {
    const content:{[key:string] : string}
    export default content;
}

