/**
 * Convert a `File` object returned by the upload input into
 * a base 64 string. That's easier to use on FakeRest, used on
 * the ng-admin example. But that's probably not the most optimized
 * way to do in a production database.
 */
const convertFileToBase64 =  file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
  });

/**
 * For posts update only, convert uploaded image in base 64 and attach it to
 * the `picture` sent property, with `src` and `title` attributes.
 */
const addUploadFeature = requestHandler => (type, resource, params) => {

  if (type === 'UPDATE' && resource === 'companydata') {

  
    /**
     * console.log(params.data) 
     * summary: {path: "Jezioro Powidzkie – Mapy Google 2020-09-12 22-21-18.png"}
     * value: File object 
    */

    if("value" in params.data && params.data.value instanceof File){

      return convertFileToBase64(params.data.value).then(base64file => {

        params.data.base64 = base64file;
        params.data.value =  "[uploading]"
        //this is added by react-admin, we dont need it!
        delete params.data.summary
  
        console.log(params.data)
  
        return requestHandler(type, resource, {
          ...params,
          data: {
            ...params.data,
     //       pictures: [...transformedNewPictures, ...formerPictures]
          }
        })

      })
  

    }

  }

  return requestHandler(type, resource, params);
};

export default addUploadFeature;



/**
 * 
 * const addUploadFeature = requestHandler => (type, resource, params) => {
    if (type === 'UPDATE' && resource === 'posts') {
        // notice that following condition can be true only when `<ImageInput source="pictures" />` component has parameter `multiple={true}`
        // if parameter `multiple` is false, then data.pictures is not an array, but single object
        if (params.data.pictures && params.data.pictures.length) {
            // only freshly dropped pictures are instance of File
            const formerPictures = params.data.pictures.filter(p => !(p.rawFile instanceof File));
            const newPictures = params.data.pictures.filter(p => p.rawFile instanceof File);

            return Promise.all(newPictures.map(convertFileToBase64))
                .then(base64Pictures => base64Pictures.map((picture64, index) => ({
                    src: picture64,
                    title: `${newPictures[index].title}`,
                })))
                .then(transformedNewPictures => requestHandler(type, resource, {
                    ...params,
                    data: {
                        ...params.data,
                        pictures: [...transformedNewPictures, ...formerPictures],
                    },
                }));
        }
    }
    // for other request types and resources, fall back to the default request handler
    return requestHandler(type, resource, params);
};

 */