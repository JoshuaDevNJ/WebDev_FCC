
let today = new Date().toLocaleString('default',{weekday: 'short'});
//console.log(today)


//let roll = 4;

switch(true) {
         case today === 'Mon':
             console.log(`Today is ${today}`);
        break;

         case today === 'Tue':
             console.log(`Today is ${today}`);
        break;

         case today === 'Wed':
             console.log(`Today is ${today}`);
        break;

         case today === 'Thu':
             console.log(`Today is ${today}`);
        break;

         case today === 'Fri':
             console.log(`Today is ${today}`);
        break;

         case today === 'Sat':
             console.log(`Today is ${today}`);
        break;
        case today === 'Sun':
            console.log(`Today is ${today}`);
       break;
    default:
        console.log(`No Idea!!`);

 }       