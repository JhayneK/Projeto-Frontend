export default class Candle {
    constructor(openTime, open, high, low, close) {
    this.x = new Date(openTime);
    this.y = [parseFloat(open), parsefloat(high), parseFloat(low), parseFloat(close)];
    }
    }