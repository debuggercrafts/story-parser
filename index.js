'use strict';

function loadStories(reqContext) {
   return reqContext
      .keys()
      .map(filePath => {
         const {default: DefaultStoryComponent} = reqContext(filePath)

         const {storyPath, storyName} = createStorybookPathFromFilePath(filePath)

         if (DefaultStoryComponent) {
            return {
               storyPath,
               storyName,
               DefaultStoryComponent,
            }
         }
      })
      .filter(Boolean)
}

function createStorybookPathFromFilePath(filePath) {
   const storyPathNodes = filePath.split('/').filter(node => node !== '.')
   const storyPath =
      storyPathNodes.length > 1
         ? storyPathNodes.splice(0, storyPathNodes.length - 1).join('/')
         : storyPathNodes.join('/')

   const fileName = storyPathNodes[storyPathNodes.length - 1]

   return {
      storyPath,
      storyName: fileName,
   }
}

module.exports = {
   loadStories: loadStories
}