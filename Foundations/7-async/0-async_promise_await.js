const uno = () => {
    return 'one';
};

const dos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {resolve('Two');}, 3000)
    })
};

const tres = () => {
    return 'Three';
};

const callMe = async () => {
    let valOne = uno();
    console.log(valOne);

    let valTwo = await dos();
    console.log(valTwo);

    let valThree = tres();
    console.log(valThree);
}

callMe();