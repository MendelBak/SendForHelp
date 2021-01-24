import {
  action,
  computed,
  getDependencyTree,
  makeAutoObservable,
  trace,
} from 'mobx';
import { Alert } from 'react-native';
import EmergencyLocationModel from '../models/emergencyLocation.model';
import Geolocation from '@react-native-community/geolocation';

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
    Geolocation.getCurrentPosition((position) =>
      this.setEmergencyLocation(position)
    );
  }

  setEmergencyLocation(position: GeolocationPosition): void {
    this.location = new EmergencyLocationModel(position);
  }

  get getLocation(): EmergencyLocationModel {
    return this.location;
  }

  clearLocation(): void {
    this.location = new EmergencyLocationModel();
  }
}
