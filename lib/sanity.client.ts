import { createClient } from 'next-sanity';

export const projectId = process.env.NEXT_PUBLIC_PROJECTID || 'test'; // "pv8y60vp"
export const dataset = process.env.NEXT_PUBLIC_DATASET || 'production'; // "production"
const apiVersion = '2021-03-25'; // "2022-11-16"

export const client = createClient({ projectId, dataset, apiVersion, useCdn: true });
