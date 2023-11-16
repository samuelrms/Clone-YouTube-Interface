import { Content, ContentContainer, Root, Wrapper } from './Layout.styles';
import Head from 'next/head';
import { LayoutProps } from './Layout.types';
import { NavBar, TopBar } from '..';

export const Layout = ({ children, title, description }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="viewport" content="initial-scale-1.0, width-device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Root>
        <TopBar />
        <NavBar />
        <Wrapper>
          <ContentContainer>
            <Content>{children}</Content>
          </ContentContainer>
        </Wrapper>
      </Root>
    </>
  );
};
