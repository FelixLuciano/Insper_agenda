import xml2js from "xml2js"

export async function requestEvents() {
  const response = await fetch("http://localhost:3000/ExibeCalendario.xml")
  const xml = await response.text()
  const data = await xml2js.parseStringPromise(xml, {
    explicitRoot: false,
    explicitArray: false
  })
  const events = data["CalendarioEvento"]

  return events
}

export function getEventsTimes(events) {
  const times = []

  for (let event of events) {
    const start = event.horainicio
    const end = event.horatermino

    if (times.indexOf(start) < 0)
      times.push(start)

    if (times.indexOf(end) < 0)
      times.push(end)
  }

  return times.sort()
}
