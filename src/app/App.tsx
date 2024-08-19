import '../assets/styles/global.scss'
import styles from './app.module.scss'
import Header, { type HeaderType } from '../components/Header/Header'
import Title from '../components/Title/Title'
import List from '../components/List/List'
import HistoryList from '../components/HistoryList/HistoryList'
import DescriptionList from '../components/DescriptionList/DescriptionList'
import Footer from '../components/Footer/Footer'
import { useEffect, useState } from 'react'

type PersonType = {
  role?: 'string'
  name?: 'string'
  phone?: 'string'
  email?: 'string'
  location?: 'string'
  githubUrl?: 'string'
  summary?: 'string'
  experience?: {
    date?: 'string'
    company?: 'string'
    role?: 'string'
    description?: 'string'
  }[]
  skills?: { name: 'string' }[]
  languages?: { name: 'string'; value: 'string' }[]
  achievements?: { name: 'string' }[]
  education?: {
    date?: 'string'
    role?: 'string'
    company?: 'string'
  }[]
  agreement?: 'string'
}

const getPersonData = async () => {
  const dataUrl = import.meta.env.VITE_NODE_PERSON_DATA_URL
  try {
    const data = await (await fetch(dataUrl)).json()
    return data?.person
  } catch (error) {
    return { message: `Error: ${error}` }
  }
}

const App = () => {
  const styleClasses = `${styles.page} p-8 bg-gradient-to-bl from-green-50 to-70%`
  const [personData, setPersonData] = useState<PersonType | null>(null)
  const summaryText = personData?.summary || ''
  const experience = personData?.experience || null
  const skills = personData?.skills || null
  const languages = personData?.languages || null
  const achievements = personData?.achievements || null
  const education = personData?.education || null
  const agreement = personData?.agreement || ''
  const headerData: HeaderType = {
    name: personData?.name || 'Title',
    role: personData?.role || 'Role',
    phone: personData?.phone || 'Phone Number',
    email: personData?.email || 'Email',
    githubUrl: personData?.githubUrl || '#',
    location: personData?.location || 'Location',
  }

  useEffect(() => {
    const loadData = async () => {
      setPersonData(await getPersonData())
    }
    loadData()
  }, [])

  return (
    <article className={styleClasses}>
      <Header data={headerData} />
      <main className={`grid grid-cols-12 gap-x-8`}>
        <section className="col-span-12 mb-2">
          <Title titleText="Summary" />
          <p>{summaryText}</p>
        </section>
        <section className="col-span-7">
          <Title titleText="Experience" />
          <HistoryList list={experience} />
        </section>
        <aside className="col-span-5">
          <Title titleText="Skills" />
          <List list={skills} />
          <Title titleText="Languages" />
          <DescriptionList list={languages} />
          <Title titleText="Achievements" />
          <List list={achievements} classes="vertList" />
        </aside>
        <section className="col-span-12">
          <Title titleText="Education" />
          <HistoryList list={education} />
        </section>
      </main>
      <Footer text={agreement} />
    </article>
  )
}

export default App
