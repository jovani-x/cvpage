type DescriptionListType = {
  name: string
  value?: string
}

const ListItem = ({ name, value }: DescriptionListType) => {
  return (
    <li className="flex flex-row justify-between mb-2">
      <h4 className="text-green-500">{name}</h4>
      {value && <p>{value}</p>}
    </li>
  )
}

const DescriptionList = ({ list }: { list: DescriptionListType[] | null }) => {
  const contentRendered =
    !!list &&
    list.map((el) => <ListItem key={el.name} name={el.name} value={el.value} />)
  return <ul className="flex flex-col">{contentRendered}</ul>
}

export default DescriptionList
