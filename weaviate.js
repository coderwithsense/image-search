import weviate from 'weaviate-ts-client';
import {convertToBase64WithImagePath} from './imageHandler'

const client = weviate.client({
    scheme: 'http',
    host: 'localhost:8080',
})

export async function uploadImage(folder, imageName, className, imageText){
    try{
        const b64 = convertToBase64WithImagePath(`./${folder}/${imageName}`);
        await client.data.creator()
            .withClassName(className)
            .withProperties({
                image: b64,
                text: imageText
            })
            .do();
            console.log(`Image ${imageName} is successfully uploaded`)

    } catch(e) {
        throw new Error(`Error uploading image ${imageName} to Weaviate: ${e.message}`);
    }
}

export async function queryImage(folder, imageName, className, limitResults){
    try{
        const img = convertToBase64WithImagePath(`./{folder}/{imageName}`)
        const resultImage = await client.graphql.get()
            .withClassName(className)
            .withFields(['image'])
            .withNearImage({ image: img })
            .withLimit(limitResults)
            .do()
        return resultImage
    } catch(e){
        throw new Error(`Error querying image ${imageName} in Weaviate: ${e.message}`)
    }
}