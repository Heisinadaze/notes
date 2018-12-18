
```
    print () {
      const newWindow = window.open('打印窗口', '_blank')
      const doStr = document.querySelector('#preview').innerHTML
      newWindow.document.write(doStr)
      const noprint = newWindow.document.querySelectorAll('.print')
      Array.from(noprint).forEach(item => {
        item.style.display = 'none'
      })
      const cell = newWindow.document.querySelectorAll('.cell')
      Array.from(cell).forEach(item => {
        item.style.lineHeight = '40px'
      })
      const ar = newWindow.document.querySelectorAll('tr')
      Array.from(ar).forEach(item => {
        item.style.border = '1px solid #dfe6ec'
      })
      newWindow.document.close()
      newWindow.print()
      newWindow.close()
    }

```
