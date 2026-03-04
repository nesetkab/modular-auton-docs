---
outline: deep
---

# Making a custom auto 

## Copy paste the following into a new file
Any of the following is optional: `startPose`, `alliance`, `parkAngle`, `parkPose`, `autonomousCommands`. Only use what you need.

Change them for your liking! It's pretty self explanatory to what they are.
```java
package org.firstinspires.ftc.teamcode.opmodes.auto;

import static org.firstinspires.ftc.teamcode.opmodes.auto.AutoPaths.*;

import com.pedropathing.geometry.Pose;
import com.qualcomm.robotcore.eventloop.opmode.Autonomous;

import org.firstinspires.ftc.teamcode.utilities.Alliance;

import dev.nextftc.core.commands.delays.Delay;
import dev.nextftc.core.commands.groups.ParallelGroup;
import dev.nextftc.core.commands.groups.SequentialGroup;
import dev.nextftc.extensions.pedro.FollowPath;

@Autonomous(name = "custom auto example ")
public class CustomAutoExample extends AutoTemplate {
    @Override
    public void initAuto() {
        super.startPose = new Pose(63.25, 7.585,Math.toRadians(90));
        super.alliance = Alliance.BLUE;
        super.parkAngle = Math.toRadians(0);
        super.parkPose = new Pose(36.25, 78.25, parkAngle);
        super.autonomousCommands = new SequentialGroup(
                new ParallelGroup(
                        startAimbotFlywheel,
                        new FollowPath(toShootFromStart),
                        intake.railDownAuto
                ),
                new Delay(1.5),
                new ParallelGroup(
                        intake.shootAllThree
                ),
                new ParallelGroup(
                        intake.firewheelsOff,
                        new FollowPath(lineUpForIntake1),
                        intake.startIntake
                ),
                new ParallelGroup(
                        intake.startIntake,
                        new FollowPath(intake1)
                ),
                new Delay(1),
                new FollowPath(toShootFromIntake1),
                intake.stopIntake,
                new ParallelGroup(
                        intake.shootAllThree
                ),
                new ParallelGroup(
                        intake.firewheelsOff,
                        new FollowPath(lineUpForIntake2),
                        intake.startIntake
                ),
                new FollowPath(intake2),
                new Delay(1),
                intake.stopIntake,
                new FollowPath(toShootFromIntake2),
                new Delay(0.3),
                new ParallelGroup(
                        intake.shootAllThree
                ),
                new ParallelGroup(
                        intake.firewheelsOff,
                        new FollowPath(lineUpForIntake3),
                        intake.startIntake
                ),
                new FollowPath(intake3),
                new Delay(1.3),
                intake.stopIntake,
                new FollowPath(toShootFromIntake3),
                new Delay(0.3),
                new ParallelGroup(
                        intake.shootAllThree
                ),
                new ParallelGroup(
                        intake.firewheelsOff,
                        flywheel.stopFlywheel,
                        new FollowPath(park)
                )
        );
    }

}
```
