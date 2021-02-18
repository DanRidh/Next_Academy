const getState = state => [state, () => console.log(`Your state is ${state}`)];
  
const [state, logState] = getState('stable')
console.log(state) // The console should print out 'stable'
logState() // The console should print out 'Your state is stable'


const user = {
    id: 101,
    email: 'josh@nextacademy.com',
    personalInfo: {
        name: 'Josh',
        gender: 'male',
        address: {
            line1: 'AG-7, Glomac Damansara',
            states: 'Kuala Lumpur',
            country: 'Malaysia'
        }
    }
}

const {
    personalInfo: {
        gender
    },
    email,
    personalInfo: {
        address: {
            line1,
            states,
            country
        }
    }
} = user;

const josh = {
    gender,
    email,
    address: `${line1}, ${states}, ${country}`
};

console.log(josh);
/* prints out:
{ 
    gender: 'male',
    email: 'josh@nextacademy.com',
    address: 'AG-7, Glomac Damansara, Kuala Lumpur, Malaysia'
}
*/