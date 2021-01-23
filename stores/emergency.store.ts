import {
  action,
  computed,
  getDependencyTree,
  makeAutoObservable,
  trace,
} from 'mobx';
import { Alert } from 'react-native';
import EmergencyLocationModel from '../models/emergencyLocation.model';

import { configure } from 'mobx';

configure({
  enforceActions: 'always',
  computedRequiresReaction: true,
  reactionRequiresObservable: true,
  observableRequiresReaction: true,
  disableErrorBoundaries: false,
});

export default class EmergencyStore {
  private isEmergency = false;

  private location: EmergencyLocationModel = new EmergencyLocationModel();

  private firstResponder: string = '';

  constructor() {
    makeAutoObservable(this);
  }

  declareEmergency(): void {
    this.isEmergency = true;
    this.getCurrentPosition();
  }

  cancelEmergency(): void {
    this.isEmergency = false;
    this.clearFirstResponder();
    this.clearLocation();
  }

  get getEmergency(): boolean {
    trace();
    return this.isEmergency;
  }

  setFirstResponder(id: string): void {
    this.firstResponder = id;
  }

  clearFirstResponder(): void {
    this.firstResponder = '';
  }

  get getFirstResponder() {
    trace();
    return this.firstResponder;
  }

  getCurrentPosition(): void {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setEmergencyLocation(position);
        return position;
      },
      (error) => Alert.alert(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  }

  setEmergencyLocation(position: GeolocationPosition): void {
    this.location = new EmergencyLocationModel(position);
  }

  get getLocation(): EmergencyLocationModel {
    console.log('test', this.location)
    return this.location;
  }

  clearLocation(): void {
    this.location = new EmergencyLocationModel();
  }
}
