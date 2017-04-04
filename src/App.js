import React, {Component} from 'react';
import './App.css';
import {PrimaryNav} from './components/PrimaryNav';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PrimaryNav/>
        <main>
          <div className="container-fluid">
            <div>
              <h2>Monday, 3 April 2017</h2>
              <div className="Session">
                <h3>Session 1</h3>
                <p>Chest workout at Fitness First Bourke Street</p>
                <ul>
                  <li>Incline Bench Press Smith machine</li>
                  <li>Bench Press</li>
                  <li>Cable flies</li>
                  <li>Close grip bench</li>
                </ul>
              </div>
              <div className="Session">
                <h3>Session 2</h3>
                <a href="https://www.crossfitinvictus.com/wod/march-25-2017-competition/">Invictus MARCH 25, 2017 –
                  COMPETITION</a>
                <img className="img-fluid"
                     src="https://scontent-hkg3-1.cdninstagram.com/t51.2885-15/s320x320/e35/13696482_1400428993304092_1831844280_n.jpg"/>
                <p>A.<br />
                  Three sets, not for time, of:<br />
                  500 Meter Row<br />
                  3 Rope Climbs (15′)<br />
                  Strict Handstand Push-Ups x Max Reps*</p>
                <p>*A set terminates at any point you pause longer than one breath when your at full extension or when
                  your
                  head is on the mat.</p>
                <small className="note"><i>I could only manage 3 strict HSPU each round, as I was fatigued from earlier
                  chest workout.</i></small>
                <p>B.<br />
                  Four sets of:<br />
                  Bench Press x 4-5 reps<br />
                  Rest as needed</p>
                <small className="note"><i>4 x 5 @ 80kg</i></small>
                <p>C.<br />
                  Complete as many rounds and reps as possible in 20 minutes of:<br />
                  Run 400 Meters<br />
                  30 Kettlebell Swings (32/24 kg)<br />
                  8/6 Muscle-Ups</p>
                <small className="note"><i>This was really tough, especially trying to do the MU after all those swings.
                  Broke them up into 4 and then into 2s. I was pretty cooked halfway into this and slowed right down.
                  Should have broken it down at the start into smaller sets maybe.</i></small>
                <p>Extras</p>
                <p>3 x 20 Wall balls, not for time</p>
                <small className="note"><i>Just to get some extra practice in as I'm weak at them, but I was really
                  struggling at this stage.</i></small>
              </div>
              <table className="table">
                <thead>
                <tr>
                  <th></th>
                  <th>Food</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <th scope="row">8am</th>
                  <td>Coffee and blueberry / spinach smoothie</td>
                </tr>
                <tr>
                  <th scope="row">10am</th>
                  <td>Strong latte / bagguette</td>
                </tr>
                <tr>
                  <th scope="row">12pm</th>
                  <td>Peanut bar, bananna</td>
                </tr>
                <tr>
                  <th scope="row">130pm</th>
                  <td>Tuna and spinach based salad</td>
                </tr>
                <tr>
                  <th scope="row">430pm</th>
                  <td>6 inch chicken fillet subway</td>
                </tr>
                <tr>
                  <th scope="row">8pm</th>
                  <td>Spinach based salad, fried skinless chicken thigh fillets</td>
                </tr>
                </tbody>
              </table>
            </div>
            <div>
              <h2>Tuesday, 4 April 2017</h2>
              <div className="Session">
                <a href="https://www.crossfitinvictus.com/wod/march-27-2017-competition/">Invictus MARCH 27, 2017 –
                  COMPETITION</a>
                  <p><strong>Program Note</strong> – You all have just completed five weeks of physically and mentally challenging training and competing. This week will be a chance to restore, so while training will be posted, we strongly encourage you all to modify or omit portions to keep your intensity low to moderate. Please do not add any unnecessary volume; we want you feeling fresh going into the next training cycle, which begins Monday, April 3, 2017.</p>
                  <p>A.<br />
                    Front Squat<br />
                    Set 1 – 5 reps @ 60%<br />
                    Set 2 – 5 reps @ 70%<br />
                    Set 3 – 5 reps @ 75%<br />
                    Set 4 – 5 reps @ 75%<br />
                    Rest 2 minutes</p>
                  <small className="note"><i>
                    84, 91, 98, 105
                  </i></small>
                  <p>B.<br />
                    Every 2 minutes, for 4 minutes (2 sets):<br />
                    Snatch Press from Receiving x 2 reps @ 2111</p>
                <small className="note"><i>
                  Can only manage the bar and a quater squat because of mobility reasons
                </i></small>
                  <p>Immediately followed by…</p>
                  <p>Every 2 minutes, for 4 minutes (2 sets):<br />
                    Snatch Push Press + Overhead Squat x 2 reps<br />
                    (pause for 2 seconds in the bottom position of each overhead squat)</p>
                <small className="note"><i>
                  40 and 50kg
                </i></small>
                  <p>Immediately followed by…</p>
                  <p>Every 90 seconds, for 3 minutes (2 sets):<br />
                    High Hang Snatch x 2 reps @ 50-65%</p>
                <small className="note"><i>
                  50kg
                </i></small>
                  <p>Immediately followed by…</p>
                  <p>Every 90 seconds, for 3 minutes (2 sets):<br />
                    Hang Snatch x 1 rep @ 65-75%</p>
                <small className="note"><i>
                  60kg
                </i></small>
                  <p>Immediately followed by…</p>
                  <p>Every 90 seconds, for 6 minutes (4 sets):<br />
                    Snatch x 1 rep @ 75-85%</p>
                <small className="note"><i>
                  70 and 75 kg
                </i></small>
                  <p>Followed by…</p>
                  <p>Every minute, on the minute, for 12 minutes:<br />
                    Snatch x 1 rep</p>
                  <p>Goal is to complete all 12 reps at 85-90% of your 1-RM Snatch.</p>
                <small className="note"><i>
                  Started at 80 kg and failed a couple so did the remaining half at 75kg.
                </i></small>
                  <p>C.<br />
                    Back Squat<br />
                    Set 1 – 10 reps @ 60%<br />
                    Set 2 – 8 reps @ 65%<br />
                    Set 3 – 6 reps @ 70%<br />
                    Set 4 – 6 reps @ 75%<br />
                    Set 5 – 6 reps @ 80%<br />
                    Rest 2 minutes</p>
                <small className="note"><i>
                  96, 104, 112, 120, 128kg
                </i></small>
                  <p>D.<br />
                    For completion:<br />
                    400 Meter Sandbag Carry (Bear Hug)</p>
                  <p>Go heavy, and take your time. WALK, do not run. The point is to accumulate time under tension and strengthen your posterior chain, so embrace the slow grind of the walk and don’t get in a hurry. Please note the weight of the sandbag used, as we will want to increase the load over the course of the next several weeks.</p>
                <small className="note"><i>
                  Used a 45kg dead ball. Did the 60m at the start unbroken and then pretty much broke it up into sets of 20m. Would aim to do 10s of 40m next time with the same weight.
                </i></small>
              </div>
              <table className="table">
                <thead>
                <tr>
                  <th></th>
                  <th>Food</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <th scope="row">730am</th>
                  <td>Blueberry / spinach smoothie and 2 boiled eggs</td>
                </tr>
                <tr>
                  <th scope="row">9am</th>
                  <td>Small strong latte and peanut butter white bread toast</td>
                </tr>
                <tr>
                  <th scope="row">10am</th>
                  <td>Large strong latte</td>
                </tr>
                <tr>
                  <th scope="row">130pm</th>
                  <td>Spicy Korean fried chicken on a stir fry salad</td>
                </tr>
                <tr>
                  <th scope="row">3pm</th>
                  <td>6 inch chicken fillet subway</td>
                </tr>
                <tr>
                  <th scope="row">515pm</th>
                  <td>Banana and peanut/choc bar</td>
                </tr>
                <tr>
                  <th scope="row">8pm</th>
                  <td>1kg Roasted chicken and spinach based salad</td>
                </tr>
                <tr>
                  <th scope="row">9pm</th>
                  <td>1 cup of strawberry sorbet</td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
