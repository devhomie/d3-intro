## Introducing The D3 Library
- There is data everywhere in the world, but raw data is basically impossible to understand without visualizing it in some way.
- No matter the level of complexity, however, data visualizations always have the potential to give us more insight into the 
data we're exploring.

- The great thing about using JavaScript to make data visualizations is that they can be dynamic and interactive.
  - ***Dynamic*** means the visualization can change over time; for example, they can be updated as new data comes in.
  - ***Interactive*** means the user can manipulate the visualization, for example, by clicking to reveal more detail about
  a particular aspect.
  - D3 primarily uses a web graphics technology called **Scalable Vector Graphics** (SVG).


    ### The SVG Format
    - **SVG** is a way of defining images using points, lines, and curves, rather than pixels. These images are known as **vector graphics**.
    - **SVG** is based on **Extensible Markup Language (XML)**, a language for storing data that, like HTML, relies on structure of nested
    elements with start and end tags.
    - **SVG** files can be standalone XML files, but SVG can also be embedded in an HTML file using the HTML `svg` element, making it 
    easy to add SVG graphics to a web page.
    - Each element of an **SVG** drawing is represented by a DOM element on the web page, which means you can style it with CSS and use
    JavaScript to add event handlers to respond to mouse events like clicks or hovers.
        - On the other hand, Canvas-based graphics are faster to render, so applications like games that need a high frame rate tend to use 
        the Canvas API rather than SVG.
    