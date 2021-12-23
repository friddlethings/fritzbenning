import cx from 'classnames'
import React, { forwardRef, useImperativeHandle, useState } from 'react'
import { ArrowLeft, ArrowRight } from 'react-feather'
import './styles.scss'

interface SliderProps {
  ref: any
  childrenCount: number
}

const Slider: React.FC<SliderProps> = forwardRef(
  ({ children, childrenCount }, ref) => {
    const [index, setIndex] = useState(0)
    const [animated, setAnimated] = useState(true)

    const bypassAnimation = () => {
      setAnimated(false)

      setTimeout(() => {
        setAnimated(true)
      }, 300)
    }

    useImperativeHandle(ref, () => ({
      changeIndex(i: number) {
        bypassAnimation()
        setIndex(i)
      },
    }))

    return (
      <div className="slider">
        <div className="slider__controller">
          <div
            className={cx({
              slider__controller__next: true,
              'is-visible': index + 1 < childrenCount,
            })}
          >
            <ArrowRight
              onClick={() => setIndex(index + 1)}
              color="white"
              size={40}
            />
          </div>

          <div
            className={cx({
              slider__controller__prev: true,
              'is-visible': index > 0,
            })}
          >
            <ArrowLeft
              onClick={() => setIndex(index - 1)}
              color="white"
              size={40}
            />
          </div>
        </div>
        <div
          className={cx({
            slider__container: true,
            'is-animated': animated,
          })}
          style={{
            transform: `translate3d(${index * -100}%, 0, 0)`,
          }}
        >
          {children}
        </div>
      </div>
    )
  }
)

export default Slider
