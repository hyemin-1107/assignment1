// 2023-11-01 assignment 
// 두 개의 input에 복소수(complex number)가 string 으로 주어집니다.
// 복소수란 a+bi 의 형태로, 실수와 허수로 이루어진 수입니다.

// input으로 받은 두 수를 곱해서 반환해주세요.
// 반환하는 표현도 복소수 형태의 string 이어야 합니다.

// 복소수 정의에 의하면 (i^2)는 -1 이므로 (i^2) 일때는 -1로 계산해주세요.

// (제곱 표현이 안 되어 i의 2제곱을 (i^2)라고 표현했습니다.)

// Input: "1+1i", "1+1i"
// Output: "0+2i"
// Input: "1+-1i", "1+-1i"
// Output: "0+-2i"
// Input: "1+3i", "1+-2i"
// Output: "7+1i"

// 가정

// input은 항상 `a+bi` 형태입니다.
// output도 `a+bi` 형태로 나와야 합니다.


const input = (x, y) => {
    // 첫번째 인풋을 마지막 i제외하고 중간에 + 빼주기
    const numX = x.slice(0, -1).split("+")

    // number화 시키기
    // "1+3i" x1 = 1, x2 = 3
    const x1 = Number(numX[0])
    const x2 = Number(numX[1])

    // 두번째 인풋을 마지막 i제외하고 중간에 + 빼주기
    const numY = y.slice(0, -1).split("+")

    // number화 시키기
    // "1+-2i" y1 = 1, y2 = -2
    const y1 = Number(numY[0])
    const y2 = Number(numY[1])

    // (a+bi) x (c+di)
    // -> ac, bdi^ + adi, bci
    return (`${x1 * y1 + -(x2 * y2)}+${x1 * y2 + x2 * y1}i`)
};

//(1*1 + -(3*-2)) + (1*-2 + 3*1) 
// (1 + --6) + (-2 + 3)i
console.log(input("1+3i", "1+-2i"));

