import FlagIcon from '../../components/Icons/FlagIcon/FlagIcon'
import XmarkIcon from '../../components/Icons/UserXmarkIcon/UserXmarkIcon'

export const dropdown = [
  { icon: <FlagIcon />, text: 'Flag notification', method: () => confirm('Report profile?') },
  { icon: <XmarkIcon />, text: 'Delete notification', method: () => confirm('Block user?') }
]
