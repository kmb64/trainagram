import React, {Component} from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Trainagram</h1>
        <div className="container-fluid">
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
            <img className="img-fluid" src="https://scontent-hkg3-1.cdninstagram.com/t51.2885-15/s320x320/e35/13696482_1400428993304092_1831844280_n.jpg" />
            <p>A.<br />
              Three sets, not for time, of:<br />
              500 Meter Row<br />
              3 Rope Climbs (15′)<br />
              Strict Handstand Push-Ups x Max Reps*</p>
            <p>*A set terminates at any point you pause longer than one breath when your at full extension or when your
              head is on the mat.</p>
            <small className="note"><i>I could only manage 3 strict HSPU each round, as I was fatigued from earlier chest workout.</i></small>
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
            <small className="note"><i>This was really tough, especially trying to do the MU after all those swings. Broke them up into 4 and then into 2s. I was pretty cooked halfway into this and slowed right down. Should have broken it down at the start into smaller sets maybe.</i></small>
            <p>Extras</p>
            <p>3 x 20 Wall balls, not for time</p>
            <small className="note"><i>Just to get some extra practice in as I'm weak at them, but I was really struggling at this stage.</i></small>
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
      </div>
    );
  }
}

export default App;
