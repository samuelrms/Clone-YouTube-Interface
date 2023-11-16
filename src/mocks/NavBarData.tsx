import { Home, LocalMallOutlined, WhatshotOutlined } from '@mui/icons-material';
import { SiYoutubeshorts } from 'react-icons/si';
import { MdOutlineMovie, MdOutlineSubscriptions } from 'react-icons/md';
import {
  RiVideoLine,
  RiHistoryLine,
  RiSignalTowerLine,
  RiAddCircleLine,
} from 'react-icons/ri';
import { PiGameController, PiMusicNoteLight } from 'react-icons/pi';
import { HiMiniSignal } from 'react-icons/hi2';
import { FaRegNewspaper } from 'react-icons/fa';
import { CiCircleAlert, CiFlag1, CiTrophy } from 'react-icons/ci';
import { BsLightbulb } from 'react-icons/bs';
import { YtKids, YtMusic, YtPremium } from '@/icons';
import { IoSettingsOutline } from 'react-icons/io5';
import { IoMdHelpCircleOutline } from 'react-icons/io';

export const initialData = [
  {
    id: 1,
    title: 'Home',
    path: '/',
    icon: Home,
  },
  {
    id: 2,
    title: 'Shorts',
    path: '/shorts',
    icon: SiYoutubeshorts,
  },
  {
    id: 3,
    title: 'Subscriptions',
    path: '/subscriptions',
    icon: MdOutlineSubscriptions,
  },
];

export const secondaryData = [
  {
    id: 1,
    title: 'You',
    path: '/feed/you',
    icon: RiVideoLine,
  },
  {
    id: 2,
    title: 'History',
    path: '/feed/history',
    icon: RiHistoryLine,
  },
];

export const exploreData = {
  title: 'Explore',
  items: [
    {
      id: 1,
      title: 'Trending',
      path: '/feed/trending',
      icon: WhatshotOutlined,
    },
    {
      id: 2,
      title: 'Shopping',
      path: '/feed/shopping',
      icon: LocalMallOutlined,
    },
    {
      id: 3,
      title: 'Music',
      path: '/feed/music',
      icon: PiMusicNoteLight,
    },
    {
      id: 4,
      title: 'Movies',
      path: '/feed/movies',
      icon: MdOutlineMovie,
    },
    {
      id: 5,
      title: 'Live',
      path: '/feed/live',
      icon: HiMiniSignal,
    },
    {
      id: 6,
      title: 'Game',
      path: '/feed/game',
      icon: PiGameController,
    },
    {
      id: 7,
      title: 'News',
      path: '/feed/news',
      icon: FaRegNewspaper,
    },
    {
      id: 8,
      title: 'Sports',
      path: '/feed/sports',
      icon: CiTrophy,
    },
    {
      id: 9,
      title: 'Learning',
      path: '/feed/learning',
      icon: BsLightbulb,
    },
    {
      id: 10,
      title: 'Podcasts',
      path: '/feed/podcasts',
      icon: RiSignalTowerLine,
    },
  ],
};

export const searchChannels = {
  icon: RiAddCircleLine,
  title: 'Search channels',
};

export const moreYouTube = {
  title: 'More from YouTube',
  items: [
    {
      id: 1,
      title: 'YouTube Premium',
      path: '/premium',
      icon: YtPremium,
    },
    {
      id: 2,
      title: 'YouTube Music',
      path: '/music',
      icon: YtMusic,
    },
    {
      id: 3,
      title: 'YouTube Kids',
      path: '/kids',
      icon: YtKids,
    },
  ],
};

export const settingsData = [
  {
    id: 1,
    title: 'Settings',
    path: '/settings',
    icon: IoSettingsOutline,
  },
  {
    id: 2,
    title: 'Report history',
    path: '/report-history',
    icon: CiFlag1,
  },
  {
    id: 3,
    title: 'Help',
    path: '/help',
    icon: IoMdHelpCircleOutline,
  },
  {
    id: 4,
    title: 'Send feedback',
    path: '/send-feedback',
    icon: CiCircleAlert,
  },
];
