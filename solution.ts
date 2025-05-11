function formatString(input: string, toUpper?: boolean): string{
  

    if(toUpper=== true || toUpper== undefined){
       return input.toUpperCase()
    }

    return input.toLowerCase();
};



function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[]{

  type RatingType={
    title:string;
    rating:number
  };

   let filtered:RatingType[]=items.filter((item:RatingType)=>item.rating>=4)

  return filtered;

};

function concatenateArrays<T>(...arrays: T[][]): T[]{

    let result:Array<T>=[];

   return result.concat(...arrays);

};

class Vehicle{
    private _make:string;
     year:number;

     constructor(make:string,year:number){
        this._make=make;
        this.year=year;
     };

     getInfo(){
        console.log(`Make: ${this._make}, Year: ${this.year}`)
     };
};



class Car extends Vehicle{
    private _model:string;

   constructor(make:string,year:number,model:string){
       super(make,year);
       this._model=model;
   };

   getModel(){
    console.log(`Model: ${this._model}`)
   }
}

const myCar = new Car("Toyota", 2020, "Corolla");
myCar.getInfo();   // Output: "Make: Toyota, Year: 2020"
myCar.getModel();  // Output: "Model: Corolla"

