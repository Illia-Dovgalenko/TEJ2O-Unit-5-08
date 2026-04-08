/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Illia
 * Created on: Apr 2026
 * This program 228BYJ-48
*/

// variables
let distance = 0

// setup
basic.showIcon(IconNames.Heart)

// loop forever
while (true) {
    if (input.buttonIsPressed(Button.A) === true) {
        
        // measures the distance
        distance = sonar.ping(
            DigitalPin.P1,
            DigitalPin.P2,
            PingUnit.Centimeters
        )
        basic.showNumber(distance)
        while (true) {
            while (distance >= 10) {
                
                // move forward
                basic.showIcon(IconNames.Happy)
                robotbit.StpCarMove(0.1, 1)
                distance = sonar.ping(
                DigitalPin.P1,
                    DigitalPin.P2,
                    PingUnit.Centimeters)
            }
            while (distance < 10) {
                basic.showIcon(IconNames.Sad)
                robotbit.StpCarMove(-0.1, 1)
                distance = sonar.ping(
                    DigitalPin.P1,
                    DigitalPin.P2,
                    PingUnit.Centimeters)
            }
            
            // turns 90 degrees
            basic.showIcon(IconNames.SmallSquare)
            robotbit.StpCarTurn(90, 0.1, 0.1)
            distance = sonar.ping(
                DigitalPin.P1,
                DigitalPin.P2,
                PingUnit.Centimeters
            )
        }
    }
}