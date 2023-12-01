import { TListItem } from '../../models'
import { ListItem } from '../ListItem/ListItem'

interface IListProps {
    list: TListItem[],
    onClick: (id: string) => void,
    selectedId: string,
}

export const List = ({ list, onClick, selectedId }: IListProps) => {

  const handleClick = (id: string) => {
    onClick(id);
  }

  return (
    <div className='list'>
        {list.map((item) => (
            <ListItem onClick={handleClick} key={item.id} item={item} selected={item.id === selectedId ? true : false} />
        ))}
    </div>
  )
}
