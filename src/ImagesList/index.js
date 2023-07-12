import './index.css'

const ImagesList = props => {
  const {eachItem, matchImage} = props
  const {thumbnailUrl, id} = eachItem

  const checkImage = () => {
    matchImage(id)
  }

  return (
    <li>
      <button type="button" onClick={checkImage} className="thumb">
        <img src={thumbnailUrl} alt="thumbnail" className="thumbnail" />
      </button>
    </li>
  )
}

export default ImagesList
