class HashTable {
    constructor(size){
        this.data = new Array(size);
    }

    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
            // console.log(this.data);
        }
        return hash;
    }

    set(key, value) {
      const address = this._hash(key);
      if (!this.data[address]) {
        this.data[address] = [];
      }
      this.data[address].push([key, value]);
      return this.data;
    }

    get(key) {
        const address = this._hash(key);
        const currentBucket = this.data[address];
        if (currentBucket) {
            for (let i = 0; i < currentBucket.length; i++) {
                if (currentBucket[i][0] === key) {
                    return currentBucket[i][1];
                } 
            }
        } 
        return undefined;       
    }

    keys() {
        const keysArray = [];
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i]) {
                keysArray.push(this.data[i][0][0])
            }
        }
        return keysArray;
    }

}

// const myHashTable = new HashTable(50);


class HashTable {
    constructor(size){
        this.data = new Array(size);
    }

    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
            // console.log(this.data);
        }
        return hash;
    }

    // set(key, value) {
    //   let address = this._hash(key);
    //   if (!this.data[address]) {
    //     this.data[address] = [];
    //   }
    //   this.data[address].push([key, value]);
    //   console.log(this.data[address]);
    //   return this.data;
    // }

    set(key, value) {
        const address = this._hash(key); // where to store the data
        console.log(address);
        if (!this.data[address]) {
            this.data[address] = []; //first array
        }
        console.log(this.data[address]);
        this.data[address].push([key, value]); //second array
        return this.data;
    }

    get(key) {
        let address = this._hash(key);
        const currentBucket = this.data[address];
        if (currentBucket) {
            for (let i = 0; i < currentBucket.length; i++) {
                if (currentBucket[i][0] === key) {
                    console.log(currentBucket[i][1]);
                    return currentBucket[i][1];
                }
            }
        }
        return undefined;
    }

    keys() {
        const keysArray = [];
        for (let i = 0; i < this.data.length; i++) {
            keysArray.push(this.data[i][0][0]);           
        }
        console.log(keysArray);
        return keysArray;
    }

}

const myHashTable = new HashTable(2);

myHashTable.set('grapes', 10000);
myHashTable.set('mango', 54);
myHashTable.get('grapes');
myHashTable.keys();


console.log(myHashTable);
