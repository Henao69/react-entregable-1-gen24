const getRandomArray = (arr) => {     //obtenemos el numero random
    const indexRandom = Math.floor(Math.random() * arr.length)
    return arr[indexRandom]
}

export default getRandomArray