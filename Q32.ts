let current_user = ['John', 'aeyla','zara','mutanza'];

let new_user = ['Bob', 'aeyla','amna','ayesha','zara'];

new_user.forEach(new_one_user => {

    let our_condition = current_user.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase());

    if (our_condition){
        console.log(`Sorry ${new_one_user} is already taken!`);
    }else {
        console.log(`This username ${new_one_user} is avaliable`);
    }

})
