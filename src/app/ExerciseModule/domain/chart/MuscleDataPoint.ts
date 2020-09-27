export class MuscleDataPoint {
  name: Date
  value: number

  constructor(date: Date, weight: number) {
    this.name = date
    this.value = weight
  }
}
