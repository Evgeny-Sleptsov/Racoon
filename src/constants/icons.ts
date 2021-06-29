import { SvgIconProps } from '@material-ui/core';

import FormatListBulletedOutlinedIcon from '@material-ui/icons/FormatListBulletedOutlined';
import AirplanemodeActiveOutlinedIcon from '@material-ui/icons/AirplanemodeActiveOutlined';
import AttachMoneyOutlinedIcon from '@material-ui/icons/AttachMoneyOutlined';
import BuildOutlinedIcon from '@material-ui/icons/BuildOutlined';
import CallOutlinedIcon from '@material-ui/icons/CallOutlined';
import CloudOutlinedIcon from '@material-ui/icons/CloudOutlined';
import ColorLensOutlinedIcon from '@material-ui/icons/ColorLensOutlined';
import CreditCardOutlinedIcon from '@material-ui/icons/CreditCardOutlined';
import EmojiEmotionsOutlinedIcon from '@material-ui/icons/EmojiEmotionsOutlined';
import NotificationsOutlinedIcon from '@material-ui/icons/NotificationsOutlined';
import PetsOutlinedIcon from '@material-ui/icons/PetsOutlined';
import QueryBuilderOutlinedIcon from '@material-ui/icons/QueryBuilderOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import TodayOutlinedIcon from '@material-ui/icons/TodayOutlined';
import WbSunnyOutlinedIcon from '@material-ui/icons/WbSunnyOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import FavoriteOutlinedIcon from '@material-ui/icons/FavoriteOutlined';
import EmojiObjectsOutlinedIcon from '@material-ui/icons/EmojiObjectsOutlined';
import DraftsOutlinedIcon from '@material-ui/icons/DraftsOutlined';
import ChildFriendlyOutlinedIcon from '@material-ui/icons/ChildFriendlyOutlined';
import CameraAltOutlinedIcon from '@material-ui/icons/CameraAltOutlined';

type iconsDataType = {
  [key: string]: (props: SvgIconProps) => JSX.Element;
}

export const iconsData: iconsDataType = {
  default: FormatListBulletedOutlinedIcon,
  airplane: AirplanemodeActiveOutlinedIcon,
  money: AttachMoneyOutlinedIcon,
  build: BuildOutlinedIcon,
  call: CallOutlinedIcon,
  cloud: CloudOutlinedIcon,
  color: ColorLensOutlinedIcon,
  credit: CreditCardOutlinedIcon,
  emoji: EmojiEmotionsOutlinedIcon,
  notification: NotificationsOutlinedIcon,
  pets: PetsOutlinedIcon,
  query: QueryBuilderOutlinedIcon,
  setting: SettingsOutlinedIcon,
  shopping: ShoppingCartOutlinedIcon,
  today: TodayOutlinedIcon,
  sunny: WbSunnyOutlinedIcon,
  home: HomeOutlinedIcon,
  favorite: FavoriteOutlinedIcon,
  emojiObject: EmojiObjectsOutlinedIcon,
  drafts: DraftsOutlinedIcon,
  child: ChildFriendlyOutlinedIcon,
  camera: CameraAltOutlinedIcon,
};

export const DEFAUL_ICON = 'default';
