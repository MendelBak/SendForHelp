import { makeAutoObservable } from 'mobx';

export default class EmergencyStore {
  isEmergency: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  declareEmergency() {
    this.isEmergency = true;
  }

  resolveEmergency() {
    this.isEmergency = false;
  }

  get getEmergency() {
    return this.isEmergency;
  }
}

// const myTimer = new Timer();

// Build a "user interface" that uses the observable state.
// const TimerView = observer(({ timer }) => (
//     <button onClick={() => timer.reset()}>Seconds passed: {timer.secondsPassed}</button>
// ))
