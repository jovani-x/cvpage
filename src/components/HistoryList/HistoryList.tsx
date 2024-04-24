import historyListStyles from './historyList.module.scss'

type HistoryListItemType = {
  date?: string
  company?: string
  role?: string
  description?: string
}

const HistoryListItem = ({
  date,
  company,
  role,
  description,
}: HistoryListItemType) => {
  return (
    <div className={`mb-2 ${historyListStyles.historyListItem}`}>
      <h3 className="text-sm">
        {date && <time className="text-green-500">{date}</time>}
        {role && <strong>{role}</strong>}
        {company && <span className="block text-gray-500">{company}</span>}
      </h3>
      {description && <p>{description}</p>}
    </div>
  )
}

const HistoryList = ({ list }: { list: HistoryListItemType[] | null }) => {
  const listRendered =
    !!list &&
    list.map((item) => (
      <HistoryListItem
        key={item.date}
        date={item.date}
        company={item.company}
        role={item.role}
        description={item.description}
      />
    ))
  return <>{listRendered}</>
}

export default HistoryList
