export class MuscleDataPoint {
  name: string
  value: number

  constructor(date: string, weight: number) {
    this.name = date
    this.value = weight
  }
}
