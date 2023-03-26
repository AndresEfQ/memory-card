import title1 from '../../assets/images/title/title1.png'
import title2 from '../../assets/images/title/title2.png'
import title3 from '../../assets/images/title/title3.png'
import { TitleDiv } from './style'

export default function Title() {
  return (
    <TitleDiv>
      <img src={title1} alt="MOVIES" /><img src={title2} alt="the memory" /><img src={title3} alt="game" />
    </TitleDiv>
  )
}