import { Subscription } from "../components/home/header/subscription";

export class DataService {
    private data: Subscription[] = [
        {mail: "ilchyshynmuchailo@gmail.com"},
        {mail: "romanilchyshyn@gmail.com"}
    ];

    getData() : Subscription[] {
        return this.data;
    }

    addData(mail: string) {
        this.data.unshift(new Subscription(mail));
    }
}