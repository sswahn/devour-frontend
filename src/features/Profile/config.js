import SearchIcon from '../../components/Icons/SearchIcon/SearchIcon'
import MessageIcon from '../../components/Icons/MessageIcon/MessageIcon'
import FlagIcon from '../../components/Icons/FlagIcon/FlagIcon'
import UserXmarkIcon from '../../components/Icons/UserXmarkIcon/UserXmarkIcon'

export const dropdown = [
  { icon: <SearchIcon />, text: 'Search profile', method: () => alert('Opened search.') },
  { icon: <MessageIcon />, text: 'Send message', method: () => alert('DM opened.') },
  { icon: <FlagIcon />, text: 'Flag profile', method: () => alert('Profile reported.') },
  { icon: <UserXmarkIcon />, text: 'Block user', method: () => alert('User blocked.') }
]
