class Uber {

    constructor(BaseFare = 25, CostPerMile = 6, CostPerMinute = 3, BookingFee = 15, time = 10, mile = 20) {
        this.BaseFare = BaseFare;
        this.CostPerMile = CostPerMile
        this.CostPerMinute = CostPerMinute;
        this.BookingFee = BookingFee;
        this.time = time;
        this.mile = mile;
    }
    totalPrice(time = this.time, mile = this.mile) {
        console.log(this.BaseFare) + (this.BookingFee) +
            (this.CostPerMinute) + (this.time) + (this.mile)
    }
}
let car = new Uber();
car.totalPrice(20, 100);
car.totalPrice(25, 50);