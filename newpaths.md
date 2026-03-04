---
outline: deep
---

# Adding new paths 

## Define Variables
Go to the top of `AutoPaths.java` and add your variables. For each new path, you want:

- A `PathChain` (the path itself)
- Two `Poses`
- One or two `Headings`

## Add Angles
If your angle already exists, skip this step.

In the `generatePaths()` method, add your angle. Make sure it's a `double` and in `radians`.
If you want your angle to change based on alliance, you have two options:

### 1. Use the `flipHeading180Degrees()` method
If your angle perfectly mirrors 180 degrees across alliances, then use this. `flipHeading180Degrees()` takes in a value in degrees and outputs it (flipped if red) in radians.

Ex: 
```java
double myAngle;

myAngle = flipHeading180Degrees(90);
```
If blue, `myAngle` will be 1/2 pi radians (90 degrees). If red, `myAngle` will be 2/3 pi radians (270 degrees).

### 2. Use an if-else 
Ex: 
```java
if (alliance == Alliance.BLUE) {
            closeShootAngle = Math.toRadians(135);        
} else {
            closeShootAngle = Math.toRadians(50);         
}
```

## Add Poses
Add your poses! Self explanatory:
```java
myPose = flipOverCenter(new Pose(54.25, 88.75, someAngle));
```
If the pose should stay the same regardless of alliance, don't use `flipOverCenter`. Your default value should be for the Blue Alliance.

## Generate the PathChain
```java
myPath = generatePath(pose1, pose2);
```
Pretty simple! You can limit speed by using `generatePathWithVelocityConstraint()` and generate a curved PathChain with `generatePathCurve()`. Follow the JavaDoc instructions

## That's it! Now you can use the path in any Auto!
