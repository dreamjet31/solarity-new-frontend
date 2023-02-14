import { QuestPanelType } from '../components/Common/Panels/QuestPanel';
import { QuestGlobalPanelType } from '../components/Common/Panels/QuestGlobalPanel';

export const SOLARITY_QUESTS: QuestPanelType[] = [
  {
    title: "Discord",
    subTitle: "Join the DAO",
    description: "Play Head Bone today to earn more Mana!",
    avatar: "/images/quests/avatars/discord.png",
    icon: "/images/wallets/xp.png",
    amount: 100,
    thumbnail: "/images/quests/solarity-quests/solarity-discord.png",
  },
  {
    title: "Mint Room",
    subTitle: "Mint Room",
    description: "Play Head Bone today to earn more Mana!",
    avatar: "/images/social/twitter.png",
    icon: "/images/wallets/xp.png",
    amount: 100,
    thumbnail: "/images/quests/solarity-quests/mint-room.png",
  },
  {
    title: "Extension",
    subTitle: "Games. Everywhere",
    description: "Play Head Bone today to earn more Mana!",
    avatar: "/images/quests/avatars/extension.png",
    icon: "/images/wallets/xp.png",
    amount: 100,
    thumbnail: "/images/quests/solarity-quests/extension.png",
  },
  {
    title: "Prompt",
    subTitle: "Get inspired",
    description: "Play Head Bone today to earn more Mana!",
    avatar: "/images/quests/avatars/prompt.png",
    icon: "/images/wallets/xp.png",
    amount: 100,
    thumbnail: "/images/quests/solarity-quests/prompt.png",
  },
  {
    active: true,
    title: <span>Claim your <span className='text-primary'>WL!</span></span>,
    subTitle: <span className='text-[#D886FF]'>Congrats!</span>,
    description: "You won a room, customize it now!",
    avatar: "/images/quests/avatars/discord.png",
    isAvatar: true,
    icon: "/images/wallets/xp.png",
    amount: 100,
    thumbnail: "/images/quests/solarity-quests/final.png",
  },
];

export const SOLARITY_GLOBAL_QUESTS: QuestGlobalPanelType[] = [
  {
    title: "Create Room",
    description: "Play Head Bone today to earn more Mana!",
    avatar: "/images/quests/avatars/global-temp.png",
    icon: "/images/wallets/xp.png",
    amount: 5,
  },
  {
    title: "Add Extension",
    description: "Play Head Bone today to earn more Mana!",
    avatar: "/images/quests/avatars/global-temp.png",
    icon: "/images/wallets/xp.png",
    amount: 5,
  },
  {
    title: "Invite Friends",
    description: "Play Head Bone today to earn more Mana!",
    avatar: "/images/quests/avatars/global-temp.png",
    icon: "/images/wallets/xp.png",
    amount: 5,
  },
  {
    title: "Game Maniac",
    description: "Play Head Bone today to earn more Mana!",
    avatar: "/images/quests/avatars/global-temp.png",
    icon: "/images/wallets/xp.png",
    amount: 5,
  },
];
