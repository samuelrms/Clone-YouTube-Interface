import { ImageProps } from 'next/image';
import React from 'react';
import { CustomImage } from './Image.style';

export const Img = ({ src, alt, ...props }: ImageProps) => {
  return <CustomImage src={src} alt={alt} {...props} />;
};
