import { TListItem } from '../../models';

interface IListItemProps {
    item: TListItem,
    selected: boolean,
    onClick: (id: string) => void,
}

export const ListItem = ({ item, selected, onClick }: IListItemProps) => {
    
  return (
    <div onClick={() => onClick(item.id)} className={`item ${selected ? 'selected' : ''}`}>{item.name}</div>
  )
}
