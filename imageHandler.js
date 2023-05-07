import {readFileSync, writeFileSync} from 'fs';

export function readImageFile(filePath){
    return readFileSync(`./img/${fileName}`);
}

export function convertToBase64(imageData){
    return Buffer.from(imageData).toString('base64');
}

export function convertToBase64WithImagePath(imagePath){
    const img = readImageFile(imagePath)
    return Buffer.from(img).toString('base64')
}

export function writeImageFile(fileName){
    writeFileSync(`./query_images/${fileName}`)
}