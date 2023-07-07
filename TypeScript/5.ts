let names:string[]=["rohan","harihs","harish"];
let no2: number[]=[12,23,45,66,12];
names[1]="Virat";
console.log(names[8]);// undefined

for (let k=0;k<names.length;k++)
    {
        console.log(names[k]);

    }
for(let m of names) console.log(m);
