// import { readFileSync, writeFileSync } from 'fs';
// import weaviate from 'weaviate-ts-client';

// const client = weaviate.client({
//     scheme: 'http',
//     host: 'localhost:8080',
// })

// try{
//     const schemaConfig = {
//         'class': 'Meme',
//         'vectorizer': 'img2vec-neural',
//         'vectorIndexType': 'hnsw',
//         'moduleConfig': {
//             'img2vec-neural': {
//                 'imageFields': [
//                     'image'
//                 ]
//             }
//         },
//         'properties': [
//             {
//                 'name': 'image',
//                 'dataType': ['blob']
//             },
//             {
//                 'name': 'text',
//                 'dataType': ['string']
//             }
//         ]
//     }
// } catch(error){
//     console.log(error)
// }


// async function upload_image(img_path, img_text) {
//   const img = readFileSync(img_path);
//   const b64 = Buffer.from(img).toString('base64');
//   await client.data.creator()
//     .withClassName('Meme')
//     .withProperties({
//       image: b64,
//       text: img_text,
//     })
//     .do();
// }

// async function query_image(img_path, new_file_name) {
//     const img = Buffer.from(readFileSync(img_path)).toString('base64');
//     const resImage = await client.graphql.get()
//         .withClassName('Meme')
//         .withFields(['image'])
//         .withNearImage({ image: img })
//         .withLimit(1)
//         .do();
//     console.log(resImage.data.Get.Meme[0])
//     const result = resImage.data.Get.Meme[0].image
//     writeFileSync(`./img/${new_file_name}.jpeg`, result, 'base64')
// }

// await query_image('./test.jpeg', 'query')

import {uploadImage} from './weaviate'

await uploadImage('img', 'b1.jpeg', 'Meme', 'Banana image 1')