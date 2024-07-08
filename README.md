# Introducing The D3 Library

- There is data everywhere in the world, but raw data is basically impossible
  to understand without visualizing it in some way.
- No matter the level of complexity, however, data visualizations always have the
  potential to give us more insight into the data we're exploring.

- The great thing about using JavaScript to make data visualizations is that they
  can be dynamic and interactive.

  - **_Dynamic_** means the visualization can change over time; for example, they
    can be updated as new data comes in.
  - **_Interactive_** means the user can manipulate the visualization, for
    example, by clicking to reveal more detail about a particular aspect.
  - D3 primarily uses a web graphics technology called **Scalable Vector Graphics**
    (SVG).

## The SVG Format

- **SVG** is a way of defining images using points, lines, and curves, rather
  than pixels. These images are known as **vector graphics**.
- **SVG** is based on **Extensible Markup Language (XML)**, a language for storing
  data that, like HTML, relies on structure of nested elements with start and
  end tags.
- **SVG** files can be standalone XML files, but SVG can also be embedded in an HTML
  file using the HTML `svg` element, making it easy to add SVG graphics to a
  web page.
- Each element of an **SVG** drawing is represented by a DOM element on the web page,
  which means you can style it with CSS and use JavaScript to add event handlers
  to respond to mouse events like clicks or hovers.
- On the other hand, Canvas-based graphics are faster to render, so applications
  like games that need a high frame rate tend to use the Canvas API rather than SVG.

### Grouping Elements

- Group multiple SVG elements together by nesting them inside a `g` (for group) element.
  - This is useful because any attributes set on the `g` element itself will
    apply to all its child elements.
- Creating groupings with `g` elements also lets you apply transformations to
  all the child elements in a group.
  - **SVG** supports several kinds of transformations, including translation, rotation,
    scaling, and skewing.
  - All the transformations are relative to the origin (0,0) -- unless an
    earlier translation has moved the origin.
  - This means the scaling affects the placement of elements, as well as their size.
    - For example:
      - When you scale a square with a top-left corner of (10, 10) and a
        bottom-right corner (30, 30) by 2
      - The new corners will be at (20, 20) and (60, 60)
      - The x- and y-coordinates relative to the origin are all doubled.

#### Drawing Circles

- Draw an SVG circle using the `circle` element.
  - The attributes `cx` and `cy` set the coordinates for the center of the circle,
    and `r` sets the radius

### Defining Paths

- The `path` element is the **most powerful** SVG element of all, allowing you
  to create custom shapes by drawing straight or curved lines ("path") between
  different points.
- The `d` sttribute of a `path` element (short for _data_) is a string
  containing the path definition, which is a list of path commands.
- The syntax of this string is optimized to be as compact as possible, so
  complex paths can be represented using relatively short strings
  - This is good for computers, but not good for humans; don't expect this strings
    to be easily readable.

### The SvgPathEditor

- Go to -> <https://yqnn.github.io/svg-path-editor/>

- The SVGPathEditor is a very helpful tool for experimenting with and manipulating
  paths
- And for converting between absolute and relative commands **SVG** has several
  additional path commands, mostly for drawing various types of curves
- Find a full list on MDN at -> <https://developer.mozilla.org/SVG>

## D3 Library

- D3 library leverages SVG and JavaScript to create data visualizations.
- **D3** - short for 'Data-Driven Documents', gives you the ability to create
  documents whose contents are driven by data.
- It does this through a technique called 'data binding', where individual
  parts of the underlying data you want to visualize are linked to individual
  elements on the page.
  - This way, if the data changes, the elements change as well.

### Data binding

 - Perhaps the most important feature of D3 is its concept of **data binding**. 
 - In a D3-based application, you'll have some data that you're attempting to 
   visualize.
    - Each individual piece of the data, called a **datum**, will be bound
      to an individual element on the page (usually an SVG element).
    - You use the **datum** to set some attribute of the element it's bound to, 
      so the element visually reflects the **datum**.

### Data Joins
 - It would be difficult to always have exactly the right number of SVG elements
   ready to bind to your data.
 - D3 solves this problem with the concept of `joins`.
  - In D3, you use a join to add or remove the necessary elements to match the 
    data being bound.

### Transitions and Key Functions

 - Instead of updating a D3 visualization abruptly with each change in the data,
   you can use `transitions` to allow elements to animate their attributes as 
   they change.
 - **Transitions** are a useful feature in D3 because, if done right, they allow
   you to see how data evolves.
