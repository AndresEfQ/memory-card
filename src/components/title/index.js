import title1 from '../../assets/images/title/title1.png'
import title2 from '../../assets/images/title/title2.png'
import { TitleDiv } from './style'

export default function Title() {
  return (
    <TitleDiv>
      <div>
        <img src={title1} alt="MOVIES" />
        <img src={title2} alt="The memory game" />
      </div>
      <p>Choose movies from your most to least favorite, just make sure to not repeat them</p>
    </TitleDiv>
  )
}