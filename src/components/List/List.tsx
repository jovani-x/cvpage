import listStyles from './list.module.scss'

const List = ({
  list,
  classes,
}: {
  list: { name: string }[] | null
  classes?: string
}) => {
  const styleClasses =
    !!classes && classes?.indexOf('vertList') !== -1
      ? listStyles.vertList
      : 'flex flex-row flex-wrap'
  const listRendered =
    !!list &&
    list.map((el) => (
      <li key={el.name} className="me-5 mb-2">
        {el.name}
      </li>
    ))
  return <ul className={styleClasses}>{listRendered}</ul>
}

export default List
