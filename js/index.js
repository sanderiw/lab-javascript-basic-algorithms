// Iteration 1: Names and Input
const hacker1 = "Sander"
const hacker2 = "Iwase"

console.log(`The navigator's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
  } else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
  } else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
  }

// Iteration 3: Loops
let upperSpaced = ""
for (let i=0; i<hacker1.length; i++) {
  upperSpaced = upperSpaced.concat(`${hacker1[i].toUpperCase()} `)
}
console.log(upperSpaced) //3.1

let reverseOrder = "";
for (let i=hacker2.length - 1; i>=0; i--) {
  reverseOrder = reverseOrder.concat(hacker2[i]);
}

console.log(reverseOrder); //3.2

//3.3
if (hacker1 < hacker2) {
    console.log("The driver's name goes first.");
  } else if (hacker1 > hacker2) {
    console.log("Yo, the navigator goes first definitely.");
  } else {
    console.log("What?! You both have the same name?");
  }


//Bonus 1

const randomParagraph = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec erat erat, euismod vitae efficitur vel, ullamcorper ac nulla. Donec vel fermentum nisi, sed fermentum purus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer in arcu nec nulla malesuada accumsan. Nulla nunc est, efficitur eu nulla nec, pharetra pharetra sapien. Etiam commodo lacus sit amet tincidunt feugiat. Nunc id est ac augue tristique sollicitudin eget eget lacus. Nunc diam tellus, placerat vitae lobortis porttitor, mattis quis tortor. Donec rhoncus, neque id maximus semper, tellus urna semper ipsum, id interdum felis justo quis nisl. Aliquam nunc libero, aliquet sit amet purus vel, pellentesque cursus purus. In ac egestas arcu, ut congue elit. Sed pharetra consectetur tellus et fermentum.

Cras viverra, justo eget consectetur bibendum, justo enim rhoncus ligula, ac lacinia justo dui quis diam. In aliquet tincidunt felis, ac condimentum lorem luctus sit amet. Morbi mattis est in lectus feugiat, non mattis justo gravida. Donec vitae ex dolor. Integer ultrices volutpat lacus, ac euismod risus sagittis non. Donec est velit, feugiat at velit non, viverra ultrices libero. Mauris viverra, tortor eget auctor luctus, arcu augue pellentesque nulla, ut consequat dolor lorem eget elit. Nam aliquam, nulla eget venenatis fermentum, neque leo tempor arcu, eu efficitur est ipsum vel velit. In consectetur id ipsum a pharetra. Fusce egestas volutpat purus, eget viverra felis tristique a. Nullam sollicitudin libero mauris, a hendrerit magna laoreet sit amet. Suspendisse ac quam rhoncus, congue urna a, vestibulum nisi. In eros quam, lacinia vel ipsum sed, mollis ultrices libero.

Vestibulum at lectus erat. Suspendisse et pellentesque dolor. Vestibulum nec ipsum purus. Nulla condimentum nibh non accumsan viverra. Aenean nec risus vitae lectus elementum viverra. Aliquam iaculis neque tortor, viverra sollicitudin magna semper a. Nunc eget felis libero. Proin in suscipit elit. Nunc tempus sapien et mi dictum, a luctus quam varius. Morbi vitae lacus auctor ex convallis ultricies eget a quam. Fusce congue, dolor a faucibus mollis, sem quam efficitur sapien, a rutrum mi est nec orci. Aenean porttitor cursus nisl, sit amet convallis odio blandit eu. Maecenas nec aliquam urna. Maecenas quis metus ac massa vestibulum condimentum nec id mauris.`;

const numberOfWords = randomParagraph.split(' ').length;

console.log(numberOfWords);

// count the number of times the Latin word et appears

const numberOfEts = randomParagraph.split('et').length - 1;

console.log(numberOfEts);

//Bonus 2
