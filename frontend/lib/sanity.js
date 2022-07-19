import sanityClient from '@sanity/client';

const options = {
    dataset: process.env.SANITY_DATASET_NAME,
    projectId: process.env.SANITY_PROJECT_ID,
    useCdn: process.env.NODE_ENV === 'production',
    apiVersion: '2022-07-18',
    // useCdn === true gives fast response using cached data
    // useCdn === false, gives you a slower response with latest data
}

export default sanityClient(options);