/**
 * @param {string} s
 * @return {boolean}
 */

let isValid = (s) => {
    const stack = [];

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        if (char === '(' || char === '[' || char === '{') {
            stack.push(char)
        }
        else if (char === ')' || char === ']' || char === '}') {
            if (isEmpty(stack)) {
                return false;
            }

            const top = stack.pop();
            if (
                (char === ')' && top !== '(') ||
                (char === ']' && top !== '[') ||
                (char === '}' && top !== '{')
            ) {
                return false;
            }
        }
    };

    return isEmpty(stack);
};

const isEmpty = (stack) => {
    return stack.length === 0;
};

console.log(isValid("([{}])"));