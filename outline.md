---
outline: deep
---

# Outline 

There's two main classes that make this all possible:
- `AutoPaths.java`
- `AutoTemplate.java`

## AutoPaths
AutoPaths contains every single Pose, Angle, and Path used in **all** autonomous OpModes. 
If you want to add more paths, change paths, remove paths, this is your friend.

## AutoTemplate
AutoTemplate is an abstract class which contains all of the boilerplate.
Think about importing and running Flywheel, Intake, etc. 
These are all things that had to be copy pasted between each Auto, but no longer!
They exist ONLY in AutoTemplate.
