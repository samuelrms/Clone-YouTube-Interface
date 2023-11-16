import {
  Divider,
  Icon as IconButton,
  ListItemIcon,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';
import {
  ListContainer,
  ListItemsButton,
  ListItemsText,
  Root,
} from './ContentNavBar.styles';
import {
  exploreData,
  initialData,
  moreYouTube,
  searchChannels,
  secondaryData,
  settingsData,
} from '@/mocks';
import { SignInButton } from '../SignInButton';

export const ContentNavBar = () => {
  const route = useRouter();

  const theme = useTheme();

  const isSelected = (path: string) => {
    return route.pathname === path;
  };

  return (
    <Root gap={1} px={2}>
      <ListContainer>
        {initialData.map((item) => {
          const Icon = item.icon;
          return (
            <ListItemsButton key={item.id} selected={isSelected(item.path)}>
              <ListItemIcon>
                <Icon
                  style={{
                    color: isSelected(item.path) && theme.palette.primary.main,
                    height: 24,
                    width: 24,
                  }}
                />
              </ListItemIcon>
              <ListItemsText primary={item.title} />
            </ListItemsButton>
          );
        })}
      </ListContainer>
      <Divider />
      <ListContainer>
        {secondaryData.map((item) => {
          const Icon = item.icon;
          return (
            <ListItemsButton key={item.id} selected={isSelected(item.path)}>
              <ListItemIcon>
                <Icon
                  style={{
                    color: isSelected(item.path) && theme.palette.primary.main,
                    height: 24,
                    width: 24,
                  }}
                />
              </ListItemIcon>
              <ListItemsText primary={item.title} />
            </ListItemsButton>
          );
        })}
      </ListContainer>
      <Divider />
      <Stack px={1} pb={1}>
        <Typography maxWidth={200} px={1}>
          Faça login para curtir vídeos, comentar e se inscrever.
        </Typography>
        <SignInButton />
      </Stack>
      <Divider />
      <ListContainer
        subheader={
          <Typography variant="subtitle2">{exploreData.title}</Typography>
        }
      >
        {exploreData.items.map((item) => {
          const Icon = item.icon;
          return (
            <ListItemsButton key={item.id} selected={isSelected(item.path)}>
              <ListItemIcon>
                <Icon
                  style={{
                    color: isSelected(item.path) && theme.palette.primary.main,
                    height: 24,
                    width: 24,
                  }}
                />
              </ListItemIcon>
              <ListItemsText primary={item.title} />
            </ListItemsButton>
          );
        })}
      </ListContainer>
      <Divider />
      <Stack>
        <ListItemsButton selected={isSelected(searchChannels.title)}>
          <ListItemIcon>
            <IconButton
              style={{
                color: isSelected(searchChannels.title)
                  ? theme.palette.primary.main
                  : 'default',
                height: 24,
                width: 24,
              }}
            >
              {searchChannels.icon()}
            </IconButton>
          </ListItemIcon>
          <ListItemsText primary={searchChannels.title} />
        </ListItemsButton>
      </Stack>
      <Divider />
      <ListContainer
        subheader={
          <Typography variant="subtitle2">{exploreData.title}</Typography>
        }
      >
        {moreYouTube.items.map((item) => {
          const Icon = item.icon;
          return (
            <ListItemsButton key={item.id} selected={isSelected(item.path)}>
              <ListItemIcon>
                <Icon
                  style={{
                    color: isSelected(item.path)
                      ? theme.palette.primary.main
                      : 'default',
                    height: 24,
                    width: 24,
                  }}
                />
              </ListItemIcon>
              <ListItemsText primary={item.title} />
            </ListItemsButton>
          );
        })}
      </ListContainer>
      <Divider />
      <ListContainer>
        {settingsData.map((item) => {
          const Icon = item.icon;
          return (
            <ListItemsButton key={item.id} selected={isSelected(item.path)}>
              <ListItemIcon>
                <Icon
                  style={{
                    color: isSelected(item.path)
                      ? theme.palette.primary.main
                      : 'default',
                    height: 24,
                    width: 24,
                  }}
                />
              </ListItemIcon>
              <ListItemsText primary={item.title} />
            </ListItemsButton>
          );
        })}
      </ListContainer>
    </Root>
  );
};
