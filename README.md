### Design Choices
##### Directory Structure
For small/medium projects I group by type but for large projects I use a more modular pattern grouping by feature / domain. I append the type to file names to help with file searches. 

I have included unnecessary folders to give idea of directory structure I use for a typical app.

##### Type Checking
I have opted for using prop-types for basic type checking but use typescript or flow for larger projects.

##### State Management

Where state management is needed I always use Redux in combination with an immutable data structure library Mori, Immutable.js and recently Immer to help reduce unnecessary renders.
For my selectors I use reselect to save recomputing unnecessary tasks with memiozation. I also use useCallback and useMemo in my hooks for the same reason. 

##### Styling & Markup
I opted for a combination of SASS and CSS modules. I also use styled-components, linaria in other projects and tailwind in prototypes.

I did not use table markup for the basket items although one could argue the data is tabular but opted for flexbox layout incase responsiveness became a requirement. I could of used CSS grid module as well but browser support may of been a issue as I did not know the target browsers 

I have approached writing the styling in a MVP mindset. If I was to continue developing this project being a larger e-commerce SPA I would abstract common styles to mixins, ui patterns (card, buttons ...) and configurable/themable variables to there own files spacing, typography, colors etc following the ITCSS architecture codifying a given style guide.
Taking it further I would create a design system or configure existing (Ant design, Material-ui)

I have not made the design responsive as it was not in the design brief or AC's and no other mocks provided but can change if required.

##### Components

The components created are a very simple 1:1 mapping of data to presentation. If I was to invest more time or the requirements/spec was to regularly change I would decouple redux from presentation components, abstract common patterns to there own components (Card, Modal, Form/Input, Buttons... for reusability) with there own interfaces defining clear boundaries (design by contract). provide render functions (render props pattern) for areas like basket items to enable customization / variants, as well as expose className props of sub nodes to enable theming. 

##### Testing

For testing I have used Jest. If I was to invest more time I would create tests for components using enzyme and e2e testing using cypress but have been looking recently looked at doing e2e with jest and puppeteer

##### Utility

The Utility Libraries I mainly use ramda and lodash. While not used heavily used on this project, I find they generally cut down code base size as they add a good Standard library to JS where most tasks can be achieved with composition, pipes, currying and partial application in a point free style.