import React from 'react'

function Container({children}) {
  return (
    <div className='w-full max-w-7xl mx-auto'>{children}</div>
    // children is a special prop that is passed to components automatically by React. It represents the content between the opening and closing tags of a component. In this case, the children prop is the content between the opening and closing tags of the Container component. The children prop is used to render the content inside the Container component. In this case, the children prop is passed to the div element as the content of the div element. This allows the Container component to render the content inside the div element. 
  )
}

export default Container