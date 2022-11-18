// Write your code here
import './index.css'

const DestinationItem = props => {
  const {userDetails} = props
  const {name, imgUrl} = userDetails

  return (
    <li className="country">
      <img src={imgUrl} alt={name} className="image" />
      <p className="country-name">{name}</p>
    </li>
  )
}

export default DestinationItem

