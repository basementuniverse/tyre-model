export type WheelStats = {
  slip: number;
  speed: number;
};

export default interface HasWheels {
  getWheelStats(): WheelStats[];
}
