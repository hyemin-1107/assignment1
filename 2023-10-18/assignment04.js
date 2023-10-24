// strs은 단어가 담긴 배열입니다.

// 공통된 시작 단어(prefix)를 반환해주세요.

// 예를 들어


const strs = ['abcd', 'abc', 'ab'];
// return은 'ab'

// strs = ['start', 'stair', 'step']
// return은 'st'

// strs = ['start', 'wewok', 'today']
// return은 ''


const prefix = strs => {

    for (let i = 0; i < strs[0].length; i++) {
    // 이중 for문
        const firstStr = strs[0][i];

        for (let j = 0; j < strs.length; j++) {

            if (strs[j][i] !== firstStr) {
                // 다른걸 찾았을때 멈춘다
                return strs[0].substring(0, i);
            }
        }
    };

};

console.log(prefix(strs));