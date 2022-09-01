class LegoBuild {
    constructor (name, number) {
        this.name = name;
        this.number = number;
    }

    describe() {
        return `The Lego set ${this.name} has the ID number: ${this.number}`
    }
}
class Collection {
    constructor (name){
        this.name = name
        this.legoSets = []
    }

    addLegoSet (legoset){
        if(legoset instanceof LegoBuild) {
            this.legoSets.push(legoset)
        }else {
            throw new Error(`You can only add an instance of LegoBuild. Argument is not a LegoBuild ${legoset}`);
        }
    }

    describe() {
        return `The ${this.name} Collection consists of ${this.legoSets.length} Lego Sets`
    }
}

class CollectionCreation{
    constructor() {
        this.collections = [];
        this.selectedCollection = null;
    }

    start() {
        let selection = this.creationOptions();

        while (selection != 0){
            switch(selection) {
                case '1':
                    this.createCollection();
                    break;
                case '2':
                    this.viewCollection();
                    break;
                case '3':
                    this.deleteCollection();
                    break;
                case '4':
                    this.displayAllCollections();
                    break;
                default:
                    selection = 0;
            }
            selection = this.creationOptions();
        }

        alert('Have a nice day!');
    }
    

    creationOptions(){
        return prompt(`
        0) Exit
        1) Add Collection
        2) View Collection
        3) Delete Collection
        4) View All Collections
        `)
    }

    showCollectionMenuOptions(collectionInfo){
        return prompt(`
        0) Previous Menu
        1) Add New Lego Set
        2) Delete Lego Set
        -----------------------
        ${collectionInfo}
        `);
    }

    displayAllCollections(){
        let collectionsString='';
        for(let i=0; i < this.collections.length; i++){
            collectionsString += i + ') ' + this.collections[i].name + '\n';
        }
        alert(collectionsString);
    }

    deleteCollection(){
        let num = prompt('Enter the collection number you would like to delete: ');
        if(num >-1 && num < this.collections.length){
            this.collections.splice(num, 1);
        }
    }

    createCollection(){
        let name = prompt('Enter a name for your collection: ')
        this.collections.push(new Collection(name));
    }

    viewCollection(){
        let num = prompt('Enter the number for the collection you would like to view');
        if (num > -1 && num < this.collections.length){
            this.selectedCollection = this.collections[num];
            let description = 'Collection Name: ' + this.selectedCollection.name + '\n';

            for(let i = 0; i < this.selectedCollection.legoSets.length; i++){
                description += i + ') ' + this.selectedCollection.legoSets[i].name + ' - '+ this.selectedCollection.legoSets[i].number + '\n';

            }
        
        
        let selection = this.showCollectionMenuOptions(description);

        switch (selection){
            case '1':
                this.createLegoSet();
                break;
            case '2':
                this.deleteLegoSet();
        }
    }}

    createLegoSet(){
        let name = prompt('Enter Name of Lego Set')
        let number = prompt('Enter Build Number for Lego Set: ')
        this.selectedCollection.legoSets.push(new LegoBuild(name, number));
    }

    deleteLegoSet(){
        let num = prompt('Enter the listed number for the Lego Set you would like to delete: ')
        if(num >-1 && num < this.selectedCollection.legoSets.length){
            this.selectedCollection.legoSets.splice(num, 1);
        }
    }
}

let startCollection = new CollectionCreation();
startCollection.start();
     
