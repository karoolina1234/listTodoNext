'use client'

import { CheckCircleOutlined } from "@ant-design/icons"
import { Avatar, List } from "antd"
import { useEffect, useState } from "react"


export default function Home() {
  const [list, setList] = useState([])

  useEffect(() => {
    var item: any = localStorage.getItem("listTodo")
    var arr = JSON.parse(item)
    setList(arr)
  }, [])

  const editItem = (item: any) => {
    console.log(item)

    list?.forEach((val: any) => {
      if (val.titulo === item.titulo) {
        val.titulo = item.titulo,
          val.descricao = item.descricao,
          val.status = 'concluido'
      }
    })

    localStorage.setItem('listTodo', JSON.stringify(list))
    window.location.reload()
  }

  const removeItem = (item: any) => {
    const listRemove = list.filter((val: any) => val.titulo != item.titulo)
    localStorage.setItem('listTodo', JSON.stringify(listRemove))
    window.location.reload()

  }

  return (
    <main className="flex min-h-screen flex-col justify-start p-24">
      <p className="text-center text-white font-bold">Lista de afazeres</p>

      <div className="text-center items-center p-1.5 mt-0">
        {list?.length === 0 ? (
          <div>
            <img style={{
              margin:
                '1rem auto',
              width: '14rem'
            }} src="https://img.icons8.com/pastel-glyph/64/F25081/no-document--v2.png" alt="no-document--v2" />
            <p className="text-white  font-bold">Sem dados disponíveis</p>
          </div>
        ) :
          (
            <List className=" overflow-y-scroll  scrollbar-thumb-red-200 scrollbar-track-gray-100 scrollbar-thin" style={{ width: '60%', margin: '1rem auto', textAlign: "left", background: "#FFF", maxHeight: '22rem', overflow: 'auto' }}>
              {list?.map((item: any) => (
                <List.Item actions={[
                  item.status ? <p className="text-green-700">
                    <img width="30" height="30" src="https://img.icons8.com/dotty/80/12B886/checked.png" alt="checked" />
                  </p> : <a className="text-pink-950" onClick={() => { editItem(item) }}><img width="30" height="30" src="https://img.icons8.com/dotty/80/737373/checked.png" alt="checked" />

                  </a>,
                  <a className="text-red-600" onClick={() => removeItem(item)}><img width="30" height="30" src="https://img.icons8.com/wired/64/F25081/delete-forever.png" alt="delete-forever" />

                  </a>]}
                  style={{ padding: '1.4rem' }}
                >
                  <List.Item.Meta
                    avatar={<Avatar src="https://img.icons8.com/ios/50/F25081/task-planning.png" />}
                    title={<p className="text-gray-700 font-bold">{item.titulo}</p>}
                    description={<p className="text-gray-400 font-extrabold">{item.descricao}</p>}
                  />
                </List.Item>
              ))}
            </List>

          )}
      </div>
    </main>
  )
}
