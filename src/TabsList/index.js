import './index.css'

const TabsList = props => {
  const {eachItem, updateActiveTabId, isActive} = props
  const {tabId, displayText} = eachItem
  const val = isActive ? 'active' : ''

  const updateTabId = () => {
    updateActiveTabId(tabId)
  }
  return (
    <li>
      <button onClick={updateTabId} type="button" className={`tab-btn ${val}`}>
        {displayText}
      </button>
    </li>
  )
}
export default TabsList
