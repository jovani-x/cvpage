import styles from './header.module.scss'

export type HeaderType = {
  name: string
  role?: string
  phone?: string
  email?: string
  githubUrl?: string
  location?: string
}

const Header = ({ data }: { data: HeaderType }) => {
  const { name, role, phone, email, githubUrl, location } = data
  const contacts = [
    {
      name: 'phone',
      value: phone,
    },
    {
      name: 'email',
      url: `mailto://${email}`,
      value: email,
    },
    {
      name: 'github',
      url: githubUrl,
      value: 'Github',
    },
    {
      name: 'location',
      value: location,
    },
  ]
  const constactsRendered = contacts.map((el) => {
    if (!el.value) return <></>

    const childItem = el.url ? (
      <a href={el.url} className="underline underline-offset-2">
        {el.value}
      </a>
    ) : (
      el.value
    )
    return (
      <li key={el.name} className="me-3">
        {childItem}
      </li>
    )
  })

  return (
    <header className={`grid grid-cols-12 gap-x-8 mb-2 ${styles.header}`}>
      {name && (
        <h1 className={`col-span-7 text-green-500 text-4xl ${styles.title}`}>
          {name}
        </h1>
      )}
      {role && (
        <strong className={`col-span-7 text-3xl font-normal ${styles.role}`}>
          {role}
        </strong>
      )}
      <ul className="col-span-5 self-center -me-3 flex flex-row flex-wrap justify-end items-center">
        {constactsRendered}
      </ul>
    </header>
  )
}

export default Header
