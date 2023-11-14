import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';
import createEmotionServer from '@emotion/server/create-instance';
import { AppType } from 'next/app';

import { MyAppProps } from './_app';
import { MyDocumentProps } from '@/types/_documents.types';
import { createEmotionCache, customTheme, roboto } from '@/theme';

export default function MyDocument({ emotionStyleTags }: MyDocumentProps) {
  return (
    <Html lang="pt-BR" className={roboto.className}>
      <Head>
        <meta name="theme-color" content={customTheme.palette.primary.main} />
        <link rel="icon" type="image/x-icon" href="/iconImage.ico" />
        <meta name="emotion-insertion-point" content="" />
        {...emotionStyleTags}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

MyDocument.getInitialProps = async (ctx: DocumentContext) => {
  const originalRenderPage = ctx.renderPage;

  const cache = createEmotionCache();
  const { extractCriticalToChunks } = createEmotionServer(cache);

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (
        App: React.ComponentType<React.ComponentProps<AppType> & MyAppProps>,
      ) =>
        function EnhanceApp(props) {
          return <App emotionCache={cache} {...props} />;
        },
    });

  const initialProps = await Document.getInitialProps(ctx);
  const emotionStyles = extractCriticalToChunks(initialProps.html);
  const emotionStyleTags = emotionStyles.styles.map((style) => (
    <style
      data-emotion={`${style.key} ${style.ids.join(' ')}`}
      key={style.key}
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ));

  return {
    ...initialProps,
    emotionStyleTags,
  };
};
