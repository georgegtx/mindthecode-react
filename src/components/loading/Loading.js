import Lottie from 'react-lottie-player'
import animation from './animation.json'

const Loading = () => {
 
  return (
    <Lottie
        loop
        autoPlay
        animationData={animation}
        play
        style={{ width: 150, height: 150 }}
    />
  )
}
 
export default Loading