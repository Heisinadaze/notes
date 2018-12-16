```
if (event.preventDefault) {
    event.preventDefault()
} else {
    event.returnValue = false
}


if (event.stopPropagation) {
    event.stopPropagetion()
} else {
    event.cancelBubble = true
}
```
