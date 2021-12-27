import cx from 'classnames'
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState
} from 'react'
import { ArrowLeft, ArrowRight } from 'react-feather'
import { useHotkeys } from 'react-hotkeys-hook'
import './styles.scss'

interface SliderProps {
  children: React.ReactNode
  childrenCount: number
  ref: any
}

const Slider: React.FC<SliderProps> = forwardRef(
  ({ children, childrenCount }, ref) => {
    const index = useRef(0)
    const count = useRef(childrenCount)
    const [sliderIndex, setSliderIndex] = useState(0)
    const [animated, setAnimated] = useState(true)

    useEffect(() => {
      count.current = childrenCount
    }, [childrenCount])

    const moveForward = () => {
      if (index.current + 1 < count.current) {
        index.current = index.current + 1
        setSliderIndex((prevIndex) => prevIndex + 1)
      }
    }

    const moveBackwards = () => {
      if (index.current > 0) {
        index.current = index.current - 1
        setSliderIndex((prevIndex) => prevIndex - 1)
      }
    }

    useHotkeys('right', moveForward)
    useHotkeys('left', moveBackwards)

    const bypassAnimation = () => {
      setAnimated(false)

      setTimeout(() => {
        setAnimated(true)
      }, 300)
    }

    useImperativeHandle(ref, () => ({
      changeIndex(i: number) {
        bypassAnimation()
        index.current = i
        setSliderIndex(i)
      },
    }))

    return (
      <div className="slider">
        <div className="slider__controller">
          <div
            className={cx({
              slider__controller__next: true,
              'is-enabled': sliderIndex + 1 < childrenCount,
            })}
          >
            <ArrowRight onClick={moveForward} color="white" size={36} />
          </div>

          <div
            className={cx({
              slider__controller__prev: true,
              'is-enabled': sliderIndex > 0,
            })}
          >
            <ArrowLeft onClick={moveBackwards} color="white" size={36} />
          </div>
        </div>
        <div
          className={cx({
            slider__container: true,
            'is-animated': animated,
          })}
          style={{
            transform: `translate3d(${sliderIndex * -100}%, 0, 0)`,
          }}
        >
          {children}
        </div>
      </div>
    )
  }
)

export default Slider
