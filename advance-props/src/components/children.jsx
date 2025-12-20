function Card({ children, title, color = "blue" }) {
  const collorclasses = {
    blue: "border-blue-200 bg-blue-200",
    green: "border-green-200 bg-green-200",
    purple: "border-purple-200 bg-purple-200",
    red: "border-red-500 bg-red-500"
  }

  return (
    <>
      <div className={`border-l-8 ${collorclasses[color]} p-6 rounded-lg shadow-md`}>
        {title && <h3 className="text-xl font-bold mb-3 text-black">{title}</h3>}
        <div className="text-gray-700"> {children}

        </div>
      </div>
    </>
  )
}

function Container({ children, layout = "vertical" }) {
  const layoutclasses = {
    vertical: "flex flex-col space-y-4",
    horizontal: "flex flex-row flex-wrap gap-4",
    grid: "grid grid-cols-1 md:grid-cols-2 gap-4"
  }

  return (
    <>
      <div className={layoutclasses[layout]}>
        {children}
      </div>
    </>
  )
}

export default function Childrenprops() {
  return (
    <section className="p-8 bg-white rounded-xl shadow-lg text-black ">
      <h2 className="font-bold text-2xl">Children Props</h2>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci beatae corrupti fugit iusto accusantium natus.</p>
      <div className="space-y-6 mt-3">
        <div>
          <h3 className="font-bold mb-1">Card Component with children</h3>
          <Container layout="grid">
            <Card
              title="User-profile" color="blue" >
              <p><strong>Name :</strong> Sampanna Ghimire</p>
              <p><strong>Email :</strong> sampannaghimire77@gmail.com</p>
              <p><strong>Role :</strong> Developer </p>

            </Card>
            <Card
              title="Stastistics" color="green" >
              <p className="flex justify-between ">Total Users : <span><strong>1027</strong></span></p>
              <p className="flex justify-between ">Active Users : <span><strong>1027</strong></span></p>
              <p className="flex justify-between "> Offline : <span><strong>1027</strong></span></p>
            </Card>
            <Card
              title="Quick Actions"
              color="purple"
            >
              <div className="flex flex-col gap-y-4 ">
                <button className=" bg-gray-400 rounded-md px-4">View</button>
                <button className=" bg-green-400 rounded-md px-4">Delete</button>
              </div>
            </Card>
            <Card title="Warning"> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, itaque.</p></Card>
          </Container>
        </div>
      </div>
    </section>
  )
}

