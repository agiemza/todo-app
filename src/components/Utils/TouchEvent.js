export default class TouchEvent {

    static threshold = 70

    constructor(touchStart, touchEnd) {
        this.touchStart = touchStart
        this.touchEnd = touchEnd || null
    }

    setEndEvent(e) {
        this.touchEnd = e
    }

    getSwipeDirection() {
        const start = this.touchStart.changedTouches[0]
        const end = this.touchEnd.changedTouches[0]

        if (start.screenX - end.screenX > TouchEvent.threshold) {
            return "left"
        }

        if (start.screenX - end.screenX < -TouchEvent.threshold) {
            return "right"
        }

        if (start.screenY - end.screenY > TouchEvent.threshold) {
            return "up"
        }

        if (start.screenY - end.screenY < -TouchEvent.threshold) {
            return "down"
        }
    }

    isSwipeLeft() {
        return this.getSwipeDirection() === "left" || false
    }

    isSwipeRight() {
        return this.getSwipeDirection() === "right" || false
    }

    isSwipeUp() {
        return this.getSwipeDirection() === "up" || false
    }

    isSwipeDown() {
        return this.getSwipeDirection() === "down" || false
    }
}