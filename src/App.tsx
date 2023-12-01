import { useEffect, useState } from 'react'
import './App.css'
import { CommonWrapper } from './components/CommonWrapper/CommonWrapper'
import { List } from './components/List/List'
import { Details } from './components/Details/Details'
import { TDetailItem, TListItem } from './models'

function App() {
  const [list, setList] = useState<TListItem[]>([]);
  const [selectedId, setSelectedId] = useState<string>('');
  const [info, setInfo] = useState<TDetailItem | undefined>();
  const [loading, setLoading] = useState<boolean>(false);

  const loadCommonData = () => {
    fetch('https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json')
      .then(response => response.json())
      .then(data => setList([...data]));
  }

  const handleClick = (id: string) => {
    setSelectedId(id);
  }

  const loadDetails = (id: string) => {
    setLoading(true);
    fetch(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${id}.json`)
      .then(response => response.json())
      .then(data => setInfo(data))
  }

  useEffect(() => {
    loadCommonData();
  }, [])

  useEffect(() => {
    loadDetails(selectedId);
  }, [selectedId])

  useEffect(() => {
    setLoading(false);
  }, [info])

  return (
    <CommonWrapper>
      <List onClick={handleClick} list={list} selectedId={selectedId}/>
      {loading ? <p>loading...</p> : <Details info={info} />}
    </CommonWrapper>
  )
}

export default App
