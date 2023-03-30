import { useImperativeHandle, useRef, forwardRef } from 'react'
import video1 from './videos/video1.mp4'

function Videos(props, ref) {

    const videoRef = useRef()

    useImperativeHandle(ref , () => {
        return (
            {
                play() {
                    videoRef.current.play()
                },

                pause() {
                    videoRef.current.pause()
                }
            }
        )
    })

    return (
        <video
            ref={videoRef}
            src= {video1}
            width={280} />
    )
}
export default forwardRef(Videos)