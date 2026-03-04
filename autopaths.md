---
outline: deep
---

# AutoPaths.java 

At first, this class may seem overwhelming, but its pretty simple. 

Fun fact: this is actually *shorter* than the previous FrontAutoPaths & BackAutoPaths classes!


## generatePaths()
The `generatePaths()` method is the key part of AutoPaths. It handles Path generation and holds all of the Poses, Angles, and Paths.

[Add a new path](/newpaths)

## flipOverCenter()
This method allows us to easily convert Poses from Blue Alliance to Red Alliance.
**When using, make sure the pose you *input* is for the Blue Alliance**

## flipHeading180Degrees()
Helper method to flip the heading based on alliance.
**When using, make sure the heading you *input* is for the Blue Alliance**

## generatePath() 
Helper method to generate a path. Make sure you use the right one. Listen to the JavaDoc comments
