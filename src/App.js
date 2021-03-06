import React, {Component} from 'react';
import './App.css';
import {PrimaryNav} from './components/PrimaryNav';
import {Log} from './components/Log';
import {Note} from './components/Note';

class App extends Component {
  render() {
    const date4March = new Date("2017-04-05").toDateString();
    const date5March = new Date("2017-04-06").toDateString();
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
                  <th scope="row">1230pm</th>
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
            <Log date={date4March}>
              <div className="session">
                <a href="https://www.crossfitinvictus.com/wod/march-28-2017-competition/">March 28, 2017 –
                  Competition</a>
                <div className="embed-responsive embed-responsive-16by9">
                  <video className="embed-responsive-item" controls>
                    <source src="https://scontent-lax3-2.cdninstagram.com/t50.2886-16/17745509_1856841737863596_3338324121783107584_n.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                  </video>
                </div>
                <Note>Mobility exercise I want to try.</Note>
                <p>A.<br />
                  Build to a 3-RM Dumbbell Z-Press</p>
                <Note>Built to 22.5kg</Note>
                <p>followed by…</p>
                <p>For time:<br />
                  30 Dumbbell Z-Presses @ 85% of today’s 3-RM</p>
                <Note>2:44 @ 17.5kg</Note>
                <p>B.<br />
                  Four sets of:<br />
                  Front-Racked Barbell Bulgarian Split Squats x 4-6 reps @ 30X1<br />
                  Rest 45 seconds after each leg<br />
                  Weighted Chest-to-Bar Pull-Ups x 4-6 reps @ 21X0<br />
                  Rest 90 seconds</p>
                <Note>Did 5 lunges @ 50kg and 4 C2B at 10kg</Note>
                <p>C.<br />
                  Three sets of:<br />
                  Landmine Rows x 6 reps each @ 2111<br />
                  Rest as needed<br />
                  100-Foot Suitcase Carry (Left)<br />
                  100-Foot Suitcase Carry (Right)<br />
                  Rest as needed</p>
                <Note>Used T bar with 15kg probably try 20kg next time. 24kg KB for the suitcase carry, probably try 32 or 28 next time.</Note>
                <p>D.<br />
                  Every 2 minutes, for 20 minutes (10 sets):<br />
                  Row 300/250 Meters</p>
                <p>Pick a pace that you believe you can keep within 2 seconds of for all ten sets.</p>
                <Note>Lowest was 1:00, highest was 1:03</Note>
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
                  <td>Blueberry / spinach smoothie and ham, cheese tomato crossiant</td>
                </tr>
                <tr>
                  <th scope="row">8am</th>
                  <td>Large strong latte</td>
                </tr>
                <tr>
                  <th scope="row">12pm</th>
                  <td>200g Tuna spinach salad</td>
                </tr>
                <tr>
                  <th scope="row">4pm</th>
                  <td>6 inch chicken fillet subway</td>
                </tr>
                <tr>
                  <th scope="row">515pm</th>
                  <td>Peanut choc bar and snickers bar</td>
                </tr>
                <tr>
                  <th scope="row">8pm</th>
                  <td>Bowl of lamb mince vegetable stirfy with 3 poached eggs</td>
                </tr>
                <tr>
                  <th scope="row">9pm</th>
                  <td>1 cup of strawberry sorbet</td>
                </tr>
                </tbody>
              </table>
            </Log>
            <Log date={date5March}>
              <div className="session">
                <h3>Active rest day</h3>
                <p>Spent a good 45 minutes rolling out and stretching. Then spent 15 minutes attempting tripple unders and then finished off with a 10 minute row averaging 1:52 pace</p>
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
                  <td>2 pieces peanut butter toast and large strong bagel</td>
                </tr>
                <tr>
                  <th scope="row">930</th>
                  <td>Salmon and cream cheese bagel</td>
                </tr>
                <tr>
                  <th scope="row">10am</th>
                  <td>Large strong latte</td>
                </tr>
                <tr>
                  <th scope="row">1230pm</th>
                  <td><a href="http://sezar.com.au/wp-content/uploads/2016/04/LUNCH-AT-SEZAR-.pdf">Work lunch at Sezar.</a> 2 glasses of reisling wine</td>
                </tr>
                <tr>
                  <th scope="row">515pm</th>
                  <td>Half peanut choc bar</td>
                </tr>
                <tr>
                  <th scope="row">7pm</th>
                  <td>3 beers</td>
                </tr>
                <tr>
                  <th scope="row">8pm</th>
                  <td>500g Roasted chicken and spinach based salad and mayo</td>
                </tr>
                <tr>
                  <th scope="row">9pm</th>
                  <td>1 cup of strawberry sorbet</td>
                </tr>
                </tbody>
              </table>
            </Log>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
