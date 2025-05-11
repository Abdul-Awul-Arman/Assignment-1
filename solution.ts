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

function processValue(value: string | number): number{
 
    if(typeof value==='string'){
        return value.length
    }
    return value*2;

}


  interface Product {
    name: string;
    price: number;
  }
  
  function getMostExpensiveProduct(products: Product[]): Product | null{

    if(products.length===0) return null;

    return products.reduce((max,current)=>current.price>max.price? current :max)

  };


  enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
  }
  
  function getDayType(day: Day): string{
    if(day===Day.Friday || day=== Day.Saturday){
        return "Weekend"
    }
    else{
        return "Weekday"
    }
  };

  async function squareAsync(n: number): Promise<number>{
     
    if(n<0){
        throw new Error('Negative number not allowed')
    }
     
    return new Promise((resolve)=>{  setTimeout(()=>{ resolve(n*n) },1000)})
  };



 
