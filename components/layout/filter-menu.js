import { mdiWeatherPartlyCloudy, mdiWeatherSunny, mdiWeatherNight } from "@mdi/js"
import Icon from "@mdi/react"

function FilterMenu() {
  return (
    <div className="p-2 space-y-4 bg-white border shadow md:p-4 rounded-bl-2xl">
      
      <div>
        <div className="mb-2">
          Períodos
        </div>

        <div className="flex gap-2">
          <label className="flex-auto">
            <input type="checkbox" className="sr-only" />
            <div className="flex flex-col items-center gap-4 px-2 py-4 bg-gray-100 rounded-lg sm:flex-row label-checked:bg-opacity-20 label-checked:bg-red-500">
              <Icon path={mdiWeatherPartlyCloudy} className="flex-shrink-0 w-6 h-6 text-red-800" />
              <div>
                <span className="font-semibold text-md label-checked:text-green-500">
                  Manhã
                </span>
                <br />
                <span className="text-sm">
                  07:00 - 12:00
                </span>
              </div>
            </div>
          </label>
          
          <label className="flex-auto">
            <input type="checkbox" className="sr-only" />
            <div className="flex flex-col items-center gap-4 px-2 py-4 bg-gray-100 rounded-lg sm:flex-row label-checked:bg-opacity-20 label-checked:bg-red-500">
              <Icon path={mdiWeatherSunny} className="flex-shrink-0 w-6 h-6 text-red-800" />
              <div>
                <span className="font-semibold text-md">
                  Tarde
                </span>
                <br />
                <span className="text-sm">
                  12:00 - 18:00
                </span>
              </div>
            </div>
          </label>
          
          <label className="flex-auto">
            <input type="checkbox" className="sr-only" />
            <div className="flex flex-col items-center gap-4 px-2 py-4 bg-gray-100 rounded-lg sm:flex-row label-checked:bg-opacity-20 label-checked:bg-red-500">
              <Icon path={mdiWeatherNight} className="flex-shrink-0 w-6 h-6 text-red-800" />
              <div>
                <span className="font-semibold text-md">
                  Noite
                </span>
                <br />
                <span className="text-sm">
                  18:00 - 23:00
                </span>
              </div>
            </div>
          </label>
        </div>
      </div>
      
      <div>
        <div className="mb-2">
          Cursos
        </div>

        <div className="flex gap-2">
          <label>
            <input type="checkbox" className="sr-only" />
            <div className="p-2 bg-gray-100 rounded-lg label-checked:bg-opacity-20 label-checked:bg-red-500">
              Educação executiva
            </div>
          </label>
          
          <label>
            <input type="checkbox" className="sr-only" />
            <div className="p-2 bg-gray-100 rounded-lg label-checked:bg-opacity-20 label-checked:bg-red-500">
              Graduação
            </div>
          </label>
          
          <label>
            <input type="checkbox" className="sr-only" />
            <div className="p-2 bg-gray-100 rounded-lg label-checked:bg-opacity-20 label-checked:bg-red-500">
              Pós Graduação
            </div>
          </label>
        </div>
      </div>

    </div>
  )
}

export default FilterMenu
