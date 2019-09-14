# Modals

Simple CSS powered Modals

### Install

```

npm i @shawnsandy/modals

```

#### Add your modals to the page

``` html
 <div id="modal" class="cs-overlay">
     <a href="#" class="cancel"></a>
     <div class="modal modal-sm">
         <p>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit hic, excepturi consequatur deleniti totam quidem aliquid perferendis iste molestias delectus asperiores. Minus voluptates consequuntur porro necessitatibus quod illo voluptas quis!
         </p>
         <a href="#" class="close">
             <span name="close">&times;</span>
         </a>
     </div>
 </div>
```

#### Add your links/button to trigger the modals

``` html
<p>
    <a href="#modal" class="text-blue-500 underline">Open Modal</a>
</p>

<p>
    <button type="button" onclick="location.hash='modal'" type="button">Open Modal
    </button>
</p>
```

#### Import and customize SCSS

``` scss
// custom colors with css defaults
$overlay-bg: rgba(0, 0, 0, 0.8) !default;
$modal-bg: white !default;
$modal-shadow: 0 5px 11px rgba(36, 37, 38, 0.08) !default;

@import "node_modules/@shawnsandy/modals/src/scss"

```

### Licence MIT

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

