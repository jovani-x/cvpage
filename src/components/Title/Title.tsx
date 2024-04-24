const Title = ({ titleText }: { titleText: string }) => {
  const styleClasses = 'border-solid border-b-2 pb-2 mt-2 mb-2'

  return (
    <header className={styleClasses}>
      <h2 className="text-2xl">{titleText}</h2>
    </header>
  )
}

export default Title
