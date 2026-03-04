---
outline: deep
---

# Auto Template

`AutoTemplate.java` is the base autonomous that each autonomous is based off of. Any changes that need to be made to all autonomouses should be made here.

The only thing to be wary of is the abstract command `initAuto()`. This method allows child classes to run stuff during the init phase in auto. 

As an example, a child class may say:
```java
@Override
public void initAuto() {
  super.alliance = Alliance.BLUE;
}
```

So the code will run as:
```java
@Override
public void onInit() {
  super.alliance = Alliance.BLUE;

  follower = ....
  ....
}
```

The rest is pretty much how our auto used to be.
There should only be ONE AutoTemplate.
