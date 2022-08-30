// class Phone{
//     constructor(name, width, height){
//         this.name = name;
//         this.screenWidth = width;
//         this.screenHeight = height;
//     }

//     //create a Function for phone
//     calculateScreenArea(){
//         return this.screenHeight * this.screenWidth;

//     }
// } // My bluePrint (Phone class defention)

// //Phone and Phone 2 are the instances of the blue print(output)
// const phone = new Phone('Samsung', 200 , 150);
// const phone2 = new Phone('Iphone', 300 , 350);






// //extension and inheretance of classess

// class Ios extends Phone{
//     constructor(name, width , height , operatingAssistant){
//         super(name, width, height);//call constructor of Phone
//         this.operatingAssistant = operatingAssistant;
//     }

//     findApps(system){
//         return this.operatingAssistant.find(x => x === system)
//     }

//     static assitantName(){
//         return "Siri"
//     } ;
// }//Iphone blueprint

// //static function reference from the blueprint 
// console.log(Ios.assitantName());

// class Android extends Phone {
//     constructor(name, width, height, operatingAssistant){
//         super(name, width, height);
//         this.operatingAssistant = operatingAssistant;
//     }

//     //to overide a method you just pass it in the blueprint and reassign its value (Polymorphism)

//     calculateScreenArea(){
//         return 500
//     }

    
// }// Android bluePrints

// // inisiating the classes/blueprint , giving it a instance ->
// const androidPhone = new Android('Samsung', '250', '300', 'Google-Assistant');

// const iosPhone = new Ios("Iphone" , "300","450", ['App-store', 'cloudStore']);







// //usefullness of polymorphisym in a class
// const phones = [phone , phone2, androidPhone, iosPhone];

// // loop throught phones (Using shortcut loop)

// // old way to loop
// // for(let i = 0; i < phones.length; i++){
// //     const phones = phones[i]
// // }

// //new shorcutted way of looping // note only works with Arrays !!// downfall is that you wont be able to get the index you specifically want
// for(const phone of phones){
//     console.log(phone);
// };

// //with polymorphism you are able to loop through all the classes an able able to change there methods an values individually , but the must have th exact method name to assign it different value








// console.log(androidPhone, iosPhone.calculateScreenArea());//the reason calculateScreenArea function method works in Iphone is because Iphone is inhereted from Phone , an it inherets all Phone's data an methods , along with its own methods a data


//  console.log(phone.calculateScreenArea(), phone2.calculateScreenArea());  
////////////////////////////////////////////////////////
//class practice above
//////////////////////////////////////////////////////

class Task{
    constructor(task, completed, delet){
        this.task = task;
        this.completed = completed;
        this.delet = delet;
    }
}

class createTask{
    constructor(){
        this.taskInput = document.getElementById('taskInput');
        this.form = document.getElementById('formSubmit');
        this.table = document.getElementById('tb-output');

        this.task = [];
    }

    addTask(){
        this.form.addEventListener('submit', (e) => this.onFormSubmit(e))
    }

    onFormSubmit(e){
        e.preventDefault();

        const task = new Task(
            this.taskInput.value
        )

        this.task.push(task);

        this.addNewTask()

    }

    addNewTask(){
        this.table.innerHTML = "";

        for(const task of this.taskInput){
            const row = document.createElement('tr');

            const taskCell = document.getElementById('td');
            const completedCell = document.getElementById('td');
            const deleteCell = document.getElementById('td');

            taskCell.innerHTML = task.task
            completedCell.innerHTML = 'completed';
            deleteCell.innerHTML = 'X'
        }
    }
}


 const creatTask = new createTask();
 creatTask.addTask();