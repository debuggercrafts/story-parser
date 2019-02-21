Story 
Helper function to parse story files using webpack `require.context` api.

## Format

- storyPath
  Path of the story file 
- storyName
  Name of the story
- DefaultStoryComponent
  Default story exported from the story file. 

# Usage

```js
// .storybook/config.js
import { storiesOf, configure } from '@storybook/react'
import { loadStories } from '@debuggercrafts/story-parser'

const req = require.context('../src', true, /\.story\.js$/)

configure(() => {
  const stories = loadStories(req)

  stories.forEach(({ storyPath, storyName, DefaultStoryComponent }) => {
    const storyRoot = storiesOf(storyPath)

    storyRoot.add(storyName, DefaultStoryComponent)
  })
}, module)
```