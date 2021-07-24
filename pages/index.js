import Head from 'next/head'
import { useState } from "react"
import { requestEvents, getEventsTimes } from "@/utils/api.js"

import Header from "@/components/layout/header.js"
import Event from "@/components/event.js"

function Home({ events, times }) {
  const [ search, setSearch ] = useState("")
  
  function filterEvents(event, i, arr) {
    for(let key in event)
      if (event[key].toLowerCase().includes(search.toLowerCase()))
        return true
      
    return false
  }
  function renderEvent(event, i, arr) {
    return (
      <Event
        event={event}
        style={{
          gridRow: `${times.indexOf(event.horainicio) + 1} / ${times.indexOf(event.horatermino) + 1}`
        }}
        key={i}
      />
    )
  }

  return (
    <>
      <Head>
        <title>Insper Agenda</title>
        <link rel="icon" type="image/svg" href="/icon.svg" sizes="any" />
      </Head>

      <Header search={search} setSearch={setSearch} />

      <main className="p-2 overflow-x-auto md:p-4">
        <div className="grid grid-flow-row-dense gap-4 auto-cols-mansory">
          {
            events.filter(filterEvents).map(renderEvent)
          }
        </div>
      </main>
    </>
  )
}

export async function getStaticProps() {
  const events = await requestEvents()
  const times = getEventsTimes(events)
  
  return {
    props: {
      events,
      times
    },
    revalidate: 60*30 // 30 minutes
  }
}

export default Home
