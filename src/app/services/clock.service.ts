import { Watch } from '../models/watch.model';

export class ClockService {
    private clocks : Watch[] = [
        {imgPath: '../../../assets/images/watch.jpg', title: 'Lnib Steinhart Ocean Vintage ...', price: 300, id: 1},
        {imgPath: '../../../assets/images/watch2.jpg', title: 'Seiko Prospex SBBN039', price: 500, id: 2},
        {imgPath: '../../../assets/images/watch3.jpg', title: 'Seiko "BFK" (SKA579)', price: 800, id: 3},
        {imgPath: '../../../assets/images/watch4.jpg', title: 'Lum-Tec 600m-1', price: 800, id: 4},
        {imgPath: '../../../assets/images/watch5.jpg', title: 'Lnib Steinhart Ocean Vintage ', price: 350, id: 5},
        {imgPath: '../../../assets/images/watch6.jpg', title: 'Bell and Ross BR03-51 GMT ...', price: 900, id: 6},
        {imgPath: '../../../assets/images/watch.jpg', title: 'Lnib Steinhart Ocean Vintage ...', price: 300, id: 7},
        {imgPath: '../../../assets/images/watch2.jpg', title: 'Seiko Prospex SBBN039', price: 500, id: 8}
    ];

    clock;

    getClock(): Watch[] {
        return this.clocks;
    }
    addClock(imgPath: string, title: string, price: number, id: number){
        this.clocks.unshift(new Watch(imgPath, title, price, id));
    }

    removeClock(id: number) {
        for (let i = 0; this.clocks.length; i++) {
            if (this.clocks[i].id === id) {
                this.clocks.splice(i,1);
                break;
            }
        }
    }

    editClock(id: number, newValue: Watch) {
        for (let i = 0; this.clocks.length; i++) {
            if (this.clocks[i].id === id) {
                this.clocks[i] = newValue;
                break;
            }
        }
    }
}