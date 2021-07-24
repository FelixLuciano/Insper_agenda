function Event({ event, style }) {
  return (
    <article className="flex flex-col p-4 bg-white border border-gray-300 rounded-2xl " style={style}>
      <h1 className="order-2 text-2xl font-bold md:text-3xl lg:text-4xl">
        { event.titulo }
      </h1>

      <p className="order-1">
        <span className="">
          { event.horainicio } - { event.horatermino }
        </span>
        <br />
        <strong className="text-red-500">
          { event.tipoaula }
        </strong>
      </p>

      <p className="order-3 text-lg">
        { event.professor }
      </p>
    </article>
  )
}

export default Event
