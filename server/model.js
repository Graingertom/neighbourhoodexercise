const peopleData = require("../data/data");

class Addresses {
    constructor(data) {
        this.id = data.id;
        this.personName = data.personName;
        this.age = data.age; 
        this.numOfPeople = data.numOfPeople;
        this.house = data.house
    }

    // Function that returns all the data from data
    static get All() {
        const showData = peopleData.map(showData => new Addresses(showData));

        return showData;
    }

    static findById(id) {
        try {
            const houseID = peopleData.find(peopleData => peopleData.house.houseNum === id);
            const data = new Addresses(houseID);

            return data
        } catch(err) {
            throw new Error ("That post does not exist");
        }
    }

    static create(data) {
        const newHouseID = peopleData.length + 1;
        const newHouse = new Addresses({ id: newHouseID, ...data });
        peopleData.push(newHouse);
        return newHouse;
    }

    static ageQuery(data){
        try {
            const houseID = peopleData.find(peopleData => peopleData.age < data.max && peopleData.age > data.min);
            const data = new Addresses(houseID);

            return data
        } catch(err) {
            throw new Error ("That post does not exist");
        }
    }

}

module.exports = Addresses
