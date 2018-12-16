
* iphone边框问题

```

input {
    outline: none;
    -webkit-appearance: none; 
    -webkit-appearance: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

```

* number
```

input 为number 在火狐浏览器下的bug
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none !important;
    margin: 0; 
}

input[type="number"]{ -moz-appearance:textfield; }
```
* scroll

```
// 滚动条样式
::-webkit-scrollbar-track-piece {
    background-color: #f5f5f5;
    border-left: 1px solid #d2d2d2;
}

::-webkit-scrollbar {
    width: 10px;
    height: 10px;
    background: #fff;
}

::-webkit-scrollbar-button {
  height: 0;
  width: 0;
  display: none;
}

::-webkit-scrollbar-thumb {
    padding-top: 100px;
    background-color: #dadada;
    background-clip: padding-box;
    min-height: 28px;
    border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
    background-color: #929292;
}

```



