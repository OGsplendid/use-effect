import { TDetailItem } from '../../models'

interface IInfoProps {
  info: TDetailItem | undefined,
}

export const Details = ({ info }: IInfoProps) => {
  if (!info) return;
  const randomAvatar = `${info.avatar}/${(Math.random() * 100).toFixed(0)}`
  const { details: { city, company, position } } = info;
  return (
    <div className='details-wrapper'>
      <img className='avatar' src={randomAvatar} />
      <div className='name info'>{info.name}</div>
      <div className='city info'>{city}</div>
      <div className='company info'>{company}</div>
      <div className='position info'>{position}</div>
    </div>
  )
}
