import { mdiMagnify, mdiFilterMenu, mdiFilterMenuOutline } from "@mdi/js"
import Icon from "@mdi/react"

import FilterMenu from "@/components/layout/filter-menu.js"

function Header({ search, setSearch }) {
  function onSearch(event) {
    setSearch(event.target.value)
  }
  function searchFocus(event) {
    event.target.select()
  }
  function searchEnter(event) {
    if (event.key === "Enter")
      event.target.blur()
  }
  
  return (
    <header className="sticky top-0 z-50 px-1 bg-white border-b glass backdrop-filter">
      <div className="flex h-16">
        <label className="w-full h-16">
          <div className="absolute flex items-center h-16 font-medium select-none cursor-text">
            <div className="flex items-center justify-center w-12 h-16 text-gray-700">
              <Icon path={mdiMagnify} className="w-6 h-6" />
            </div>
            <span className="text-xl text-gray-700 sr-only">
              Pesquisar
            </span>
          </div>
          <div className="h-full py-1 pr-1">
            <input
              type="search"
              placeholder="Pesquisar"
              className="w-full h-full pl-12 pr-4 text-xl font-medium text-red-500 placeholder-gray-400 bg-transparent outline-none rounded-xl focus:ring-2 ring-red-300" spellCheck="false"
              onInput={onSearch}
              value={search}
              onFocus={searchFocus}
              onKeyPress={searchEnter}
            />
          </div>
        </label>

        <div className="w-px h-12 my-auto bg-gray-200"></div>

        <details className="w-16 peer">
          <summary className="block w-16 h-16 p-1 cursor-pointer select-none group">
            <div className="flex items-center justify-center w-full h-full transition-colors bg-red-500 bg-opacity-0 group-hover:bg-opacity-20 peer-open:bg-opacity-30 duraton-75 rounded-xl">
              <span className="sr-only">
                Abrir menu de filtros
              </span>
              <Icon path={mdiFilterMenuOutline} className="block w-6 h-6 text-red-500 peer-open:hidden" />
              <Icon path={mdiFilterMenu} className="hidden w-6 h-6 text-red-600 peer-open:block" />
            </div>
          </summary>

          <div className="absolute right-0 flex max-w-full top-16">
            <FilterMenu />
          </div>
        </details>
      </div>
    </header>
  )
}

export default Header
