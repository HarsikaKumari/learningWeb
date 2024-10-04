function vowelCheck(str) {
    let vowel = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    str.forEach(item => {
        vowel.forEach(index => {
            if (item == index) {
                count++
            }
        })
    });
    console.log(count);  
}

vowelCheck("harsika");
