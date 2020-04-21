export class Course{
    public code:string;
    public name:string;
    public shotdescription:string;
    public description:string;
    public faculty:string;
    public imagePath:string;
    public category:string;
    public nlectures:number;
    public nhours:number;
    public rating:number;
    public cost:number;
    public tag?:string;
    public specilization?:string;

    constructor(code:string,name:string, sdesc:string, desc:string, faculty:string, imagePath:string, category:string,
                nlectures:number, nhours:number, rating:number, cost:number, tag?:string, specilization?:string){
                    this.code=code;
                    this.name=name;
                    this.shotdescription=sdesc;
                    this.description=desc;
                    this.faculty=faculty;
                    this.imagePath=imagePath;
                    this.category=category;
                    this.nlectures=nlectures;
                    this.nhours=nhours;
                    this.rating=rating;
                    this.cost=cost;
                    this.tag=tag;
                    this.specilization=specilization;
                }
}