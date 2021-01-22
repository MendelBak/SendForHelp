import { makeAutoObservable } from 'mobx';

export default class EmergencyStore {
  private isEmergency: boolean = false;

  private firstResponder?: string;

  constructor() {
    makeAutoObservable(this);
  }

  declareEmergency() {
    this.isEmergency = true;
  }

  cancelEmergency() {
    this.isEmergency = false;
  }

  get getEmergency(): boolean {
    return this.isEmergency;
  }

  setFirstResponder(id: string) {
    this.firstResponder = id;
  }

  get getFirstResponder() {
    return this.firstResponder;
  }
}
