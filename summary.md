---
outline: deep
---

# Intro 

The whole point of modular auton is to reduce autonomous development time by streamlining development and minimizing repetition.
To make a new auto, you only need:

```java
package org.firstinspires.ftc.teamcode.opmodes.auto;

import com.pedropathing.geometry.Pose;
import com.qualcomm.robotcore.eventloop.opmode.Autonomous;

import org.firstinspires.ftc.teamcode.utilities.Alliance;

@Autonomous(name = "auton name")
public class AutonName extends AutoTemplate {
    @Override
    public void initAuto() {
        super.startPose = new Pose(foo);
        super.alliance = Alliance.BLUE;
    }
}
```
That's it. That's all you need for an auto.
