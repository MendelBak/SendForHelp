export default class EmergencyLocationModel {
  altitudeAccuracy;
  altitude;
  accuracy;
  heading;
  longitude;
  latitude;
  speed;
  timestamp;

  constructor(emergencyLocation?: GeolocationPosition)  {
    if (emergencyLocation) {
      this.altitudeAccuracy = emergencyLocation.coords.altitude;
      this.altitude = emergencyLocation.coords.altitude;
      this.accuracy = emergencyLocation.coords.accuracy;
      this.heading = emergencyLocation.coords.heading;
      this.longitude = emergencyLocation.coords.longitude;
      this.latitude = emergencyLocation.coords.latitude;
      this.speed = emergencyLocation.coords.speed;
      this.timestamp = emergencyLocation.timestamp
      // this.altitudeAccuracy = emergencyLocation.altitude;
      // this.altitude = emergencyLocation.altitude;
      // this.accuracy = emergencyLocation.accuracy;
      // this.headingAccuracy = emergencyLocation.headingAccuracy;A
      // this.longitude = emergencyLocation.longitude;
      // this.latitude = emergencyLocation.latitude;
    }
  }
}
