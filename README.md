1. How to add background image
   -config webpack asset management to add images
   -index.js create img element, add class "background-image", img.src = Ash where Ash is the dynamically generated image src by webpack not the path of actual image, appendchild(img)
   -style.css make position:relative of parent, make position:fixed of this img, top : 0 .

2. How to load fonts with webpack
   -follow the tutorial on asset management by webpack
   -but src: url("./Anomuitsy.otf") format("OpenType");
   change the format("ttf") to format("trueType")
   and format("otf") to format("OpenType") the case of the truetype or opentype does not matter

3) How to use modules to not confuse yourself
    -create the Node (of type Node) in the module and return a function which will create the Node, e.g.
    import homeTab frome './homeTab'  
    const homeDiv = homeTab();
    content.appendChild(homeDiv);
    -if you appendChild in the homeTab.js itself, this creates confusion as your code becomes more complex

4) Why css is not applying to dynamically added classes 
    -reason is specificity (id is always greater than classes)