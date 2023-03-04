import { PortableText as PortableTextComponent } from '@portabletext/react';
import { definePreview } from 'next-sanity/preview';
import createImageUrlBuilder from '@sanity/image-url';
import { client } from './sanity.client';

/**
 * Set up a helper function for generating Image URLs with only the asset reference data in your documents.
 * Read more: https://www.sanity.io/docs/image-url
 **/
export const urlFor = source => createImageUrlBuilder(client).image(source);

// Set up Portable Text serialization
export const PortableText = props => <PortableTextComponent components={{}} {...props} />;
