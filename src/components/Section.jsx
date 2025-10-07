const Section = ({icon, sectionTitle, children}) => {
  return (
    <div className="p-3 ml-4">
        <div className="flex items-center gap-2">
            {icon}
            <h1 className="font-bold text-xl text-blue-600">
                {sectionTitle}
            </h1>
        </div>
        {children}
    </div>
  )
}

export default Section