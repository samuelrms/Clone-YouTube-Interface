import { DocumentProps } from 'next/document';

export type MyDocumentProps = {
  emotionStyleTags: JSX.Element[];
} & DocumentProps;
